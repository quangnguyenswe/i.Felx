import path from "node:path";
import fs from "node:fs/promises";
import matter from "gray-matter";
import { html } from "satori-html";
import satori from "satori";
import sharp from "sharp";
import { Resvg } from "@resvg/resvg-js";

const ALL_BLOG_DIR = path.join(process.cwd(), "/src/content/blogs");
const OG_BACKGROUND_IMAGE_PATH = path.join(
  process.cwd(),
  "/public/images/og/background.png",
);
const OG_BACKGROUND_IMAGE_DATA_URL = await toDataUrl(OG_BACKGROUND_IMAGE_PATH);

const OG_AVATAR_IMAGE_PATH = path.join(
  process.cwd(),
  "/public/icons/felix.png",
);
const OG_AVATAR_IMAGE_DATA_URL = await toDataUrl(OG_AVATAR_IMAGE_PATH);

const alreadyGeneratedImages = await fs.readdir(
  path.join(process.cwd(), "/public/og"),
  {
    recursive: true,
  },
);

async function getAllBlogs() {
  const allBlogDirNames = await fs.readdir(ALL_BLOG_DIR);

  const allBlogFrontmatter = await Promise.all(
    allBlogDirNames.map(async (blogDirName) => {
      const blogDirPath = path.join(ALL_BLOG_DIR, blogDirName);

      const markdown = await fs.readFile(blogDirPath, "utf8");
      const { data } = matter(markdown);

      return {
        id: blogDirName,
        title: data.title,
        description: data.description,
      };
    }),
  );

  return allBlogFrontmatter;
}

async function generateBlogOpenGraph() {
  const allBlogs = (await getAllBlogs()).filter(
    (blog) => !alreadyGeneratedImages.includes(`blogs/${blog.id}.png`),
  );

  for (const blog of allBlogs) {
    // blog.id may contain .md or .mdx extension, we need to remove it
    const blogId = blog.id.replace(/\.mdx?$/, "");
    let template = getBlogTemplate({
      ...blog,
    });
    if (
      hasSpecialCharacters(blog.title) ||
      hasSpecialCharacters(blog.description)
    ) {
      // For some reason special characters are not being rendered properly
      // https://github.com/natemoo-re/satori-html/issues/20
      // So we need to unescape the html
      template = JSON.parse(unescapeHtml(JSON.stringify(template)));
    }
    await generateOpenGraph(template, "blogs", blogId + ".png");
  }
}

async function generateOpenGraph(
  htmlString,
  type,
  fileName,
  renderer = "sharp",
) {
  console.log("Started 🚀", `${type}/${fileName}`);
  const svg = await satori(htmlString, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Bricolage Grotesque",
        data: await fs.readFile(
          path.join(
            process.cwd(),
            "/public/fonts/BricolageGrotesque_Regular.ttf",
          ),
        ),
        weight: 400,
        style: "normal",
      },
    ],
  });

  await fs.mkdir(path.join(process.cwd(), "/public/og/" + type), {
    recursive: true,
  });
  // It will be used to generate the default image
  // for some reasone sharp is not working with this
  // FIXME: Investigate why sharp is not working with this
  if (renderer === "resvg") {
    const resvg = new Resvg(svg, {
      fitTo: {
        mode: "width",
        value: 2500,
      },
    });
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();
    await fs.writeFile(
      path.join(process.cwd(), "/public/og/" + `${type}/${fileName}`),
      pngBuffer,
    );
  } else {
    await sharp(Buffer.from(svg), { density: 150 })
      .png()
      .toFile(path.join(process.cwd(), "/public/og/" + `${type}/${fileName}`));
  }

  console.log("Completed ✅", `${type}/${fileName}`);
}

await generateBlogOpenGraph();

function getBlogTemplate({ title, description }) {
  const bgImage = OG_BACKGROUND_IMAGE_DATA_URL;
  const avatarImage = OG_AVATAR_IMAGE_DATA_URL;

  // Calculate text sizing based on length
  const titleText = typeof title === "string" ? title : "";
  const descText = typeof description === "string" ? description : "";

  // Title sizing: scale down for longer titles
  const titleLength = titleText.length;
  let titleSize = "84px";

  if (titleLength > 45) titleSize = "60px";
  else if (titleLength > 35) titleSize = "68px";
  else if (titleLength > 25) titleSize = "76px";

  // Description sizing
  const descLength = descText.length;
  let descSize = "28px";
  if (descLength > 120) descSize = "18px";
  else if (descLength > 80) descSize = "22px";

  // Truncate text if too long (approximate 2 lines)
  const maxTitleChars = titleLength > 60 ? 60 : titleLength > 40 ? 80 : 100;
  const maxDescChars = 150;

  const truncatedTitle = truncateAtWord(titleText, maxTitleChars);
  const truncatedDesc = truncateAtWord(descText, maxDescChars);

  return html`<div tw="flex flex-col w-full h-full text-white bg-[rgb(10,10,10)] relative">
      <img src="${bgImage}" tw="absolute top-0 left-0 w-full h-full" alt="" />
      <img
        src="${bgImage}"
        tw="absolute w-full h-full"
        style={{
          bottom: "-40px",
          right: "-120px",
          transform: "rotate(180deg)",
        }}
        alt=""
      />
      <header tw="absolute top-0 left-0 w-full flex items-center justify-between px-8 pt-6">
        <section
          tw="bg-transparent flex items-center"
        >
          <img
            src="${avatarImage}"
            tw="w-8 h-8 rounded-lg"
            alt=""
          />
          <p tw="text-base text-[24px] ml-2">i.Felx</p>
        </section>
        <section tw="text-white" style={{ fontFamily: "monospace" }}>
          <p tw="text-[16px] opacity-70">Yet Another Blog</p>
        </section>
      </header>

      <main
        tw="flex flex-col justify-center items-center flex-1 px-32 py-12 w-full -mt-8"
        style={{ gap: "0px" }}
      >
        <h1
          tw="font-semibold text-center text-[${titleSize}]"
          style={{
            lineHeight: 1.1,
            maxHeight: "210px",
            overflow: "hidden",
          }}
        >
          ${truncatedTitle || title}
        </h1>
        <p
          tw="text-gray-300 text-center mt-12 text-[${descSize}]"
          style={{
            lineHeight: 1.3,
            maxHeight: "62px",
            overflow: "hidden",
          }}
        >
          ${truncatedDesc || description}
        </p>
      </main>
    </div> `;
}

function truncateAtWord(text, maxChars) {
  if (text.length <= maxChars) return text;

  const truncated = text.slice(0, maxChars);
  const lastSpace = truncated.lastIndexOf(" ");

  return lastSpace > 0 ? truncated.slice(0, lastSpace) + "…" : truncated + "…";
}

function unescapeHtml(html) {
  return html
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");
}

function hasSpecialCharacters(str) {
  return /[&<>"]/.test(str);
}

async function toDataUrl(filePath) {
  const fileBuffer = await fs.readFile(filePath);
  return `data:image/png;base64,${fileBuffer.toString("base64")}`;
}
