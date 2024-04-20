import type { Children } from "@/libraries/types";

type Props = {
  children: Children;
};

export const Title = ({ children }: Props) => {
  return (
    <h2 className="text-lg md:text-xl text-center font-medium">{children}</h2>
  );
};

export const SectionTitle = ({ children }: Props) => {
  return (
    <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold">
      {children}
    </h2>
  );
};
