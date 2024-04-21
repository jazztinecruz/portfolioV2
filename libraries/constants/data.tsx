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
  { label: "Tech Stacks", id: "#tech-stacks" },
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
    isCurrent: true,
  },
  {
    company: "Freelance",
    year: "Oct 2021 - Present",
    months: "2 yrs and 7 mos",
    type: "freelance",
    isCurrent: true,
  },
  {
    company: "Ghaleb Alaskari General Trading LLC",
    year: "July 2023 - July 2023 ",
    months: "1 mo",
    type: "contractual",
    isCurrent: false,
  },
  {
    company: "Checkpoint Labs",
    year: "Apr 2023 - Nov 2023",
    months: "6 mos",
    type: "part-time",
    isCurrent: false,
  },
  {
    company: "HireTalk Inc.",
    year: "Oct 2022 - Jan 2023",
    months: "4 mos",
    type: "internship",
    isCurrent: false,
  },
];

export const techStacks: TechStack[] = [
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

export const projects: Project[] = [
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.",
    url: "",
    github: "",
  },
  {
    title: "Codery",
    description:
      "A web-based platform for freelancers to find jobs and clients.",
    github: "",
  },
  {
    title: "Lorem Ipsum Sit Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.",
    url: "",
    github: "",
  },
  {
    title: "Lorem Ipsum Sit Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.",
    url: "",
    github: "",
  },
  {
    title: "Lorem Ipsum Sit Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.",
    url: "",
    github: "",
  },
  {
    title: "Lorem Ipsum Sit Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.",
    url: "",
    github: "",
  },
];

export const socials: Social[] = [
  { link: "www.linkedin.com/in/jazztinecruz", src: "/logos/linkedin.png" },
  { link: "me@jazztinecruz.com", src: "/logos/gmail.png" },
];
