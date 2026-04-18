export type Attribute = Array<{
  name: string;
  links: Array<
    | {
        type: "showcase";
        label: string;
        url: string;
        description: string;
      }
    | {
        type: "inspiration";
        label: string;
        url: string;
        description?: string;
      }
  >;
}>;

export const attributes: Attribute = [
  {
    name: "Inspiration & Open Source",
    links: [
      {
        type: "inspiration",
        label: "hexaa.sh",
        url: "https://hexaa.sh/",
        description:
          "big thanks to hexaa for open-sourcing his work and inspiring me to create my own portfolio. hexaa is a personal website that this portfolio followed closely in terms of design and layout.",
      },
      {
        type: "inspiration",
        label: "kamranahmed.info",
        url: "https://kamranahmed.info/",
        description:
          "kamran's personal website has been a significant source of inspiration for me in terms of work experience presentation",
      },
    ],
  },
  {
    name: "Stacks & Technologies",
    links: [
      {
        type: "showcase",
        label: "next.js",
        url: "https://nextjs.org/",
        description:
          "i don't really like next.js, but  i give it a try this time",
      },
      {
        type: "showcase",
        label: "fumadocs",
        url: "https://fumadocs.dev",
        description:
          "well, the main reason why i choose nextjs since fumadocs just look so damn good.",
      },
      {
        type: "showcase",
        label: "tailwindcss",
        url: "https://tailwindcss.com/",
        description:
          "i have been using tailwindcss for a long time now, and don't see myself switching to other css framework in the near future. but yes, you can not drop vanilla css",
      },
    ],
  },
  {
    name: "Design & UI Libraries",
    links: [
      {
        type: "showcase",
        label: "shadcn-ui",
        url: "https://shadcn.com/",
        description:
          "if you hate on it, c'mon just give it a try. probably the easiest and most flexible UI library that i've ever used",
      },
    ],
  },
];
