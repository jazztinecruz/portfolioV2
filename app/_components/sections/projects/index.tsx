import { projects } from "@/libraries/constants/data";
import { SectionTitle } from "../../titles";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Github from "../../github";
import Image from "next/image";

const Projects = () => {
  return (
    <section id="projects" className="grid items-center gap-8 mt-12">
      <SectionTitle>
        <span className="bg-text">Projects</span>
      </SectionTitle>

      <div className="space-y-4">
        <h2 className="font-bold text-lg">Developments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {projects.development.map((code) => (
            <div
              key={code.title}
              className="relative w-full h-48 lg:h-56 rounded-md  overflow-hidden">
              <div className="absolute h-[50%] inset-0 rounded-md bg-gradient-to-r from-transparent via-darkblue to-darkpink animate-spin-slow" />
              <div className="absolute inset-[0.07rem] primary p-4 flex flex-col justify-center gap-4 py-4 lg:py-6 rounded-md">
                <div className="flex items-center gap-3">
                  <h3 className="font-semibold">{code.title}</h3>
                  {code.url && (
                    <Link
                      href={code.url}
                      target="_blank"
                      rel="noopener noreferrer">
                      <ArrowUpRightIcon title="Live Url" className="w-5 h-5" />
                    </Link>
                  )}
                </div>
                <p className="text-sm tertiary">{code.description}</p>
                <Github url={code.github} hasArrow />
                {code.ongoing && (
                  <div className="bg-green-700/30 rounded px-3 py-1 w-fit text-xs text-green-700 font-semibold -mt-2">
                    In Development
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="font-bold text-lg">Designs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 rounded-t-md">
          {projects.design.map((design) => (
            <div key={design.title} className="flex flex-col rounded-md">
              <Link href={design.pdf} target="_blank" rel="noopener noreferrer">
                <div className="aspect-video relative w-full h-full">
                  <Image
                    src={design.thumbnail}
                    alt={design.title}
                    fill
                    priority
                    className="rounded-t-md object-cover"
                  />
                </div>
              </Link>
              <div className="bg-opacity p-4 space-y-2 rounded-b-md">
                <div className="flex items-center gap-3">
                  <h3 className="font-semibold">{design.title}</h3>
                  <Link
                    href={design.pdf}
                    target="_blank"
                    rel="noopener noreferrer">
                    <ArrowUpRightIcon
                      title="Download PDF"
                      className="w-5 h-5"
                    />
                  </Link>
                </div>
                <p className="text-sm tertiary">{design.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
