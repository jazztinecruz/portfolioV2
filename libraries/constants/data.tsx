import type { Education, MenuItem, Work } from "@/libraries/types";

export const menus: MenuItem[] = [
  { label: "Home", id: "#home" },
  { label: "About ME", id: "#about" },
  { label: "Tech Stacks", id: "#tech-stacks" },
  { label: "Projects", id: "#projects" },
];

export const charateristics: string[] = [
  "Passonate",
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
    label: "Best Software Application Project",
    sublabel: "Philippine Christian University",
    type: "award",
  },
];

export const works: Work[] = [
  {
    company: "HireTalk Inc.",
    year: "Oct 2022 - Jan 2023",
    months: "4 mos",
    type: "internship",
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
    company: "Ghaleb Alaskari General Trading LLC",
    year: "July 2023 - July 2023 ",
    months: "1 mo",
    type: "contractual",
    isCurrent: false,
  },
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
];
