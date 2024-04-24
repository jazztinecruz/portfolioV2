import { projects } from "@/libraries/constants/data";
import { SectionTitle } from "../../titles";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Github from "../../github";

const Projects = () => {
  return (
    <section id="projects" className="grid items-center gap-8 mt-12">
      <SectionTitle>
        <span className="bg-text">Projects</span>
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 items-center">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col gap-4 py-4 lg:py-6 rounded-md">
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <Link href={project.url ?? ""}>
                <ArrowUpRightIcon title="Live Url" className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-sm tertiary">{project.description}</p>
            <Github url={project.github} hasArrow />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
