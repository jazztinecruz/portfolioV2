import type { Children } from "@/libraries/types";

type Props = {
  children: Children;
};

const SectionTitle = ({ children }: Props) => {
  return (
    <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold">
      {children}
    </h2>
  );
};

export default SectionTitle;
