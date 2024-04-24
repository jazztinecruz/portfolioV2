import type {
  Education,
  MenuItem,
  Project,
  Social,
  TechStack,
  Work,
} from "@/libraries/types";

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
    label: "Academic Deans Lister",
    sublabel: "Philippine Christian University",
    type: "award",
  },
  {
    label: "Best Thesis Software Application Project",
    sublabel: "Codery - A Web-based Platform for Freelancers",
    type: "award",
  },
];

export const works: Work[] = [
  {
    company: "HireTalk Inc.",
    year: "Jan 2023 - Present",
    months: "1 yr and 4 mos",
    type: "full-time",
    link: "https://hiretalk.ai",
    isCurrent: true,
  },
  {
    company: "Freelance",
    year: "Oct 2021 - Present",
    months: "2 yrs and 7 mos",
    type: "freelance",
    link: "https://github.com/jazztinecruz",
    isCurrent: true,
  },
  {
    company: "Ghaleb Alaskari General Trading LLC",
    year: "July 2023 - July 2023 ",
    months: "1 mo",
    type: "contractual",
    link: "https://ghalebgt.com",
    isCurrent: false,
  },
  {
    company: "Checkpoint Labs",
    year: "Apr 2023 - Nov 2023",
    months: "6 mos",
    type: "part-time",
    isCurrent: false,
    link: "https://www.linkedin.com/company/checkpointlabs",
  },
  {
    company: "HireTalk Inc.",
    year: "Oct 2022 - Jan 2023",
    months: "4 mos",
    type: "internship",
    link: "https://hiretalk.ai",
    isCurrent: false,
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
      title: "AI-Driven Design Challenge",
      description:
        "A web platform where you can enhance your design skills as you take on the AI-Driven Design Challenge and get inspirations from the other designs.",
      github: "https://github.com/jazztinecruz/ai-driven-design-challenge",
    },
    {
      title: "Clode",
      description:
        "A web platform where you can Store, Share, and Manage Code Snippets empowering developers with enhanced collaboration and productivity tools.",
      url: "",
      github: "https://github.com/nikkoabucejo/clode",
    },
    {
      title: "Codery",
      description:
        "A web platform for Software Engineer Freelancers. Designed to streamline the freelancer-client matchmaking process with professionalism and efficiency.",
      github: "https://github.com/jazztinecruz/codery",
    },
  ],
  design: [
    {
      title: "AI-Driven Image Generator",
      description:
        "A website design that generates AI-driven images for you. It uses AI to generate images based on the user's input.",
      thumbnail: "/ai-image-thumbnail.png",
      pdf: "/",
    },
    {
      title: "Crafter",
      description:
        "An e-commerce web design that showcases the products of the Craft store.",
      thumbnail: "/crafter-thumbnail.png",
      pdf: "/crafter.pdf",
    },
    {
      title: "Signup",
      description:
        "A signup page facilitating user registration through third-party authentication or traditional email-password scheme.",
      thumbnail: "/signup-thumbnail.png",
      pdf: "/signup.pdf",
    },
  ],
};
