"use client";

import { projects } from "@/libraries/constants/data";
import { SectionTitle } from "../../titles";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useTheme } from "@/libraries/contexts/use-theme";

const Projects = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="projects" className="grid items-center gap-8 mt-12">
      <SectionTitle>Live Projects</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col gap-4 py-6 rounded-md">
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <Link href={project.url ?? ""}>
                <ArrowUpRightIcon title="Live Url" className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-sm tertiary">{project.description}</p>
            <Link href={project.github}>
              <div
                title="Github Url"
                className="border primary-border rounded px-3 flex items-center gap-2 py-1 w-fit">
                {isDarkMode ? (
                  <Image
                    alt="Github"
                    src="/logos/github-light.png"
                    width={20}
                    height={20}
                  />
                ) : (
                  <Image
                    alt="Github"
                    src="/logos/github-dark.webp"
                    width={30}
                    height={30}
                  />
                )}
                <span className="text-sm tertiary">Github</span>
                <ArrowUpRightIcon className="w-3 h-3" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
