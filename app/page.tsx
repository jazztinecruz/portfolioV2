import type { Page } from "@/core/types";

import Hero from "./_components/sections/hero";
import About from "./_components/sections/about";
import Projects from "./_components/sections/projects";
import Socials from "./_components/sections/socials";
import Technologies from "./_components/sections/techs";

const HomePage: Page = () => {
  return (
    <div className="space-y-20 lg:space-y-32">
      <Hero />
      <Technologies />
      <Projects />
      <About />
      <Socials withHeader />
    </div>
  );
};

export default HomePage;
