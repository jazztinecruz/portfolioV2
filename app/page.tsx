import type { Page } from "@/libraries/types";

import Hero from "./_components/sections/hero";
import About from "./_components/sections/about";
import TechStacks from "./_components/sections/techs";

const HomePage: Page = () => {
  return (
    <div>
      <Hero />
      <About />
      <TechStacks />
    </div>
  );
};

export default HomePage;
