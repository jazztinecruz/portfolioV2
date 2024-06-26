import type { Page } from "@/core/types";
import Navbar from "./navbar";
import ThemeSwitcher from "./theme";
import { Roboto_Mono, Satisfy } from "next/font/google";
import Socials from "../socials";

const roboto = Roboto_Mono({ subsets: ["latin"] });
const satisfy = Satisfy({ subsets: ["latin"], weight: "400" });

const Hero: Page = () => {
  return (
    <section id="home" className="space-y-4 h-screen">
      <header className="flex items-center justify-between">
        <Navbar />
        <div className="flex items-center gap-10 ml-auto">
          <ThemeSwitcher />
          <Socials />
        </div>
      </header>

      <div className="grid items-center text-center justify-center h-full">
        <div className="space-y-8 md:mt-20">
          <h1
            className={`text-5xl md:text-8xl font-extrabold leading-snug ${roboto.className}`}>
            <span className="bg-text">Frontend</span> <br /> Software Engineer
          </h1>
          <div
            className={`flex flex-col md:flex-row items-center justify-center gap-4 ${satisfy.className}`}>
            <span className="text-4xl">and</span>
            <h1 className="text-6xl md:text-8xl tracking-wider">
              Web <span className="bg-text">Designer</span>
            </h1>
          </div>
        </div>
        <h3 className="text-xl md:text-2xl tracking-widest bg-text">
          @JAZZTINECRUZ
        </h3>
      </div>
    </section>
  );
};

export default Hero;
