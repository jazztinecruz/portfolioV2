import type { Page } from "@/libraries/types";

import Hero from "./_components/sections/hero";
import About from "./_components/sections/about";
import TechStacks from "./_components/sections/techs";
import Projects from "./_components/sections/projects";
import Socials from "./_components/sections/socials";

const HomePage: Page = () => {
  return (
    <div className="space-y-20 lg:space-y-32">
      <Hero />
      <About />
      <TechStacks />
      <Projects />
      <Socials />
    </div>
  );
};

export default HomePage;
