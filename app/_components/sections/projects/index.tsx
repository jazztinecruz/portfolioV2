import { projects } from "@/core/constants/data";
import { SectionTitle } from "../../titles";
import ShowcaseCard from "./card";

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
            <ShowcaseCard key={code.title} data={code} type="development" />
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="font-bold text-lg">Designs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 rounded-t-md">
          {projects.design.map((design) => (
            <ShowcaseCard key={design.title} data={design} type="design" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
