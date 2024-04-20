import type { Page } from "@/libraries/types";
import Hero from "./_components/sections/hero";
import About from "./_components/sections/about";

const HomePage: Page = () => {
  return (
    <div>
      <Hero />
      <About />
    </div>
  );
};

export default HomePage;
