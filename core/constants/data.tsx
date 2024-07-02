import type {
  Education,
  MenuItem,
  Project,
  Social,
  TechStack,
  Work,
} from "@/core/types";

export const menus: MenuItem[] = [
  { label: "Home", id: "#home" },
  { label: "About ME", id: "#about" },
  { label: "Technologies", id: "#technologies" },
  { label: "Projects", id: "#projects" },
  { label: "Contact ME", id: "#socials" },
];

export const charateristics: string[] = [
  "Passionate",
  "Dedicated",
  "Fast Learner",
  "Problem Solver",
  "Detail Oriented",
  "Creative",
  "Cooperative",
  "Intelligent",
  "Eagerness for Growth and Betterment",
];

export const education: Education[] = [
  {
    label: "Bachelor of Science in Computer Science",
    sublabel: "Philippine Christian University",
    type: "degree",
  },
  {
    label: "Most Outstanding Intern",
    sublabel: "Philippine Christian University",
    type: "award",
  },
  {
    label: "College Deans Lister",
    sublabel: "Philippine Christian University",
    type: "award",
  },
  {
    label: "Best Thesis Software Application Project",
    sublabel: "Codery - A Web-based Platform for Freelancers",
    type: "award",
  },
];

export const technologies: TechStack[] = [
  { label: "HTML", src: "/logos/html.png" },
  { label: "CSS", src: "/logos/css.png" },
  { label: "JavaScript", src: "/logos/javascript.png" },
  { label: "TypeScript", src: "/logos/typescript.png" },
  { label: "React", src: "/logos/react.webp" },
  { label: "NextJS", src: "/logos/next.png" },
  { label: "NodeJS", src: "/logos/nodejs.png" },
  { label: "Tailwind CSS", src: "/logos/tailwind.png" },
  { label: "Sass", src: "/logos/sass.png" },
  { label: "Hygraph CMS", src: "/logos/hygraph.png" },
  { label: "Headless UI", src: "/logos/headless.png" },
  { label: "Material UI", src: "/logos/mui.png" },
  { label: "GraphQL", src: "/logos/graphql.png" },
  { label: "Figma", src: "/logos/figma.webp" },
  { label: "Git", src: "/logos/git.png" },
];

export const socials: Social[] = [
  {
    link: "https://www.linkedin.com/in/jazztinecruz/",
    src: "/logos/linkedin.png",
  },
];

export const projects: Project = {
  development: [
    {
      title: "Netflix Clone",
      description:
        "A fully typed Responsive Netflix Clone that I made with the use of ReactJS, Next JS App Dir, Typescript and Tailwind CSS.",
      github: "https://github.com/jazztinecruz/netflix.git",
      preview: "https://netflix-seven-eta.vercel.app",
      previewSet: [
        "/development/netflix/home.png",
        "/development/netflix/collection.png",
        "/development/netflix/modal.png",
      ],
    },
    {
      title: "Clode",
      description:
        "A web platform where you can Store, Share, and Manage Code Snippets empowering developers with enhanced collaboration and productivity tools.",
      preview: "",
      github: "https://github.com/nikkoabucejo/clode",
      ongoing: true,
      previewSet: [],
    },
    {
      title: "AI-Driven Design Challenges",
      description:
        "A web platform where you can enhance your design skills as you take on the AI-Driven Design Challenge and get inspirations from the other designs.",
      github: "https://github.com/jazztinecruz/ai-driven-design-challenge",
      ongoing: true,
      previewSet: [],
    },
    {
      title: "Codery",
      description:
        "A web platform for Software Engineer Freelancers. Designed to streamline the freelancer-client matchmaking process with professionalism and efficiency.",
      github: "https://github.com/jazztinecruz/codery",
      previewSet: [],
    },
  ],
  design: [
    {
      title: "AI-Driven Image Generator",
      description:
        "A website design that generates AI-driven images for you. It uses AI to generate images based on the user's input.",
      preview: "/designs/ai/ai-image.pdf",
      previewSet: [
        "/designs/ai/feed.png",
        "/designs/ai/profile.png",
        "/designs/ai/settings.png",
      ],
    },
  ],
};

export const works: Work[] = [
  {
    company: "HireTalk Inc.",
    location: "United States",
    year: "Jan 2023 - Present",
    duration: "1 yr and 7 mos",
    type: "full-time",
    isCurrent: true,
  },
  {
    company: "Software Engineer Freelancer",
    year: "Oct 2021 - Present",
    duration: "2 yrs and 10 mos",
    type: "freelance",
    isCurrent: true,
  },
  {
    company: "Ghaleb Alaskari General Trading LLC",
    location: "United Arab Emirates",
    year: "July 2023 - July 2023 ",
    duration: "1 mo",
    type: "contractual",
    isCurrent: false,
  },
  {
    company: "Checkpoint Labs",
    location: "Metro Manila",
    year: "Apr 2023 - Nov 2023",
    duration: "6 mos",
    type: "part-time",
    isCurrent: false,
  },
  {
    company: "HireTalk Inc.",
    location: "United States",
    year: "Oct 2022 - Jan 2023",
    duration: "4 mos",
    type: "internship",
    isCurrent: false,
  },
];
