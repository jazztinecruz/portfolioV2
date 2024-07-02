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
export type TechStack = {
  label: string;
  src: string;
};
export type Social = {
  link: string;
  src: string;
};
export type Development = {
  title: string;
  description: string;
  github: string;
  preview?: string;
  previewSet: string[];
  ongoing?: boolean;
};
export type Design = {
  title: string;
  description: string;
  preview: string;
  previewSet: string[];
};
export type Project = {
  development: Development[];
  design: Design[];
};
export type Work = {
  company: string;
  location?: string
  year: string;
  duration: string;
  type: "full-time" | "part-time" | "internship" | "contractual" | "freelance";
  isCurrent: boolean;
};
