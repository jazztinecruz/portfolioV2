import { techStacks } from "@/libraries/constants/data";
import { SectionTitle } from "../../titles";
import Image from "next/image";

const TechStacks = () => {
  return (
    <section id="tech-stacks" className="grid items-center gap-8 mt-12">
      <SectionTitle>
        <span className="bg-text">Tech</span> Stacks
      </SectionTitle>
      <div className="grid  grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-y-4 items-center">
        {techStacks.map((tech) => {
          return (
            <div
              title={tech.label}
              key={tech.label}
              className="relative bg-transparent w-fit">
              <Image
                src={tech.src}
                alt={tech.label}
                width={45}
                height={45}
                className="rounded-full object-center"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TechStacks;
