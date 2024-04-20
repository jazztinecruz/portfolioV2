import type { Education, MenuItem } from "@/libraries/types";

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
