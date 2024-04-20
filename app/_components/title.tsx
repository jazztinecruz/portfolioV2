import type { Children } from "@/libraries/types";

type Props = {
  children: Children;
};

const Title = ({ children }: Props) => {
  return (
    <h2 className="text-lg md:text-xl text-center">{children}</h2>
  );
};

export default Title;
