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
