import Navbar from "./navbar";
import ThemeSwitcher from "./theme";

import type { Page } from "@/libraries/types";
import { roboto, satisfy } from "@/app/layout";

const Hero: Page = () => {
  return (
    <section id="home" className="space-y-4 h-screen">
      <header className="flex items-center justify-between">
        <Navbar />
        <div className="flex items-center gap-4 ml-auto">
          <ThemeSwitcher />
          <button className="btn">Email ME</button>
        </div>
      </header>

      <div className="grid items-center text-center justify-center h-full">
        <div className="space-y-8 md:mt-20">
          <h1
            className={`text-6xl md:text-8xl font-extrabold leading-snug ${roboto.className}`}>
            Frontend <br /> Software Engineer
          </h1>
          <h1
            className={`text-6xl md:text-8xl tracking-wider ${satisfy.className}`}>
            Website Designer
          </h1>
        </div>
        <h3 className="text-xl md:text-2xl tracking-widest">@JAZZTINECRUZ</h3>
      </div>
    </section>
  );
};

export default Hero;
