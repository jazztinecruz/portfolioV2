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
export type Development = {
  title: string;
  description: string;
  url?: string;
  github: string;
  ongoing?: boolean;
};
export type Design = {
  title: string;
  description: string;
  thumbnail: string;
  pdf: string;
};
export type Social = {
  link: string;
  src: string;
};
export type Project = {
  development: Development[];
  design: Design[];
};
