// react types
export type Children = React.ReactNode;
export type Page = React.FC;

// data types
export type Theme = "light" | "dark";
export type MenuItem = {
  label: string;
  id: string;
};
export type Education = {
  label: string;
  sublabel: string;
  type: "degree" | "award";
};
export type Work = {
  company: string;
  year: string;
  months: string;
  type: "full-time" | "part-time" | "internship" | "contractual" | "freelance";
  isCurrent: boolean;
};
export type TechStack = {
  label: string;
  src: string;
};
export type Project = {
  title: string;
  description: string;
  url?: string;
  github: string;
};
export type Social = {
  link: string;
  src: string;
};
