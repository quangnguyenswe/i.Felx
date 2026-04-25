export type WorkHistoryType = {
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  location: string;
  description: Array<string>;
  contributions: Array<string>;
  tags: string[];
};

export const workHistory: Array<WorkHistoryType> = [
  {
    company: "VTI Group",
    role: "Software Engineer",
    startDate: "October, 2024",
    location: "Ha Noi, Vietnam",
    description: [
      "VTI is a trusted global technology company, turning innovation into lasting value by harnessing AI and advanced technologies. Having a strong presence in Southeast Asia, Japan, Korea,... and aiming for global expansion, VTI delivers cutting-edge solutions to clients worldwide, driving digital transformation and business growth.",
      "I joined VTI as a Software Engineer intern, later transitioning to a full-time role. My responsibilities include developing and maintaining mostly internal tools but also some client-facing products. I work closely with cross-functional teams to design, implement, and optimize software solutions that meet the needs of our clients and enhance our internal operations.",
    ],
    contributions: [
      "Developed and maintained a internal social media, which is used by over <b>1800 employees</b> across the company. This platform saved the company around <b>$10,000</b> per month on third-party communication tools and improved employee engagement and collaboration.",
      "Worked on internal <b>copilot</b> tools that leverage AI to assist employees in various development phases, from planning, coding, testing and deployment. These tools have significantly improved developer productivity and code quality across the organization.",
      "Implemented a dashboard for monitoring and analyzing the performance of AI models used in our products, which managed over <b>30 teams</b> with over <b>300M+ monthly tokens</b> for both local and commercial llm models",
      "Participated in code reviews and provided mentorship to other developers, fostering a culture of continuous learning and improvement.",
    ],
    tags: [
      "Node.js",
      "React",
      "TypeScript",
      "Cloud",
      "PostgreSQL",
      "AI",
      "Astro",
      "NestJS",
      "ElasticSearch",
      "Redis",
      "Docker",
      "Couchbase",
      "CI-CD",
    ],
  },
  {
    role: "IELTS Tutor",
    company: "Kim IELTS",
    startDate: "July, 2024",
    location: "Ha Noi, Vietnam",
    description: [
      "Kim IELTS is a English language center specializing in IELTS preparation, and currently has a silver partnership with <a href='https://www.britishcouncil.org/' target='_blank' class='hover:underline text-primary font-bold'>British Council</a>. We are committed to providing high-quality education and personalized support to help students achieve their desired IELTS scores and succeed in their academic and professional endeavors.",
      "Thought this role has nothing to do with software engineering, but it is my first job and I am proud of it. At a certain level, this helps me a lot in my English journey, and I am glad that I can help other people in their English journey as well.",
    ],
    contributions: [
      "Successfully helped <b>50+ students</b> achieve their target IELTS scores through personalized tutoring sessions and tailored study plans.",
      "Developed engaging lesson materials and practice exercises that improved students' language proficiency and test-taking confidence.",
      "Received positive feedback from students for my effective teaching methods and supportive learning environment.",
    ],
    tags: ["First Job", "IELTS", "Tutoring", "Education"],
  },
];
