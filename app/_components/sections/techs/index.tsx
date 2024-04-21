import { techStacks } from "@/libraries/constants/data";
import { SectionTitle } from "../../titles";
import Image from "next/image";

const TechStacks = () => {
  return (
    <section id="tech-stacks" className="grid items-center gap-8 mt-12">
      <SectionTitle>Tech Stacks</SectionTitle>
      <div className="grid  grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-y-4 items-center">
        {techStacks.map((tech) => {
          return (
            <div
              title={tech.label}
              id={tech.label}
              className="relative bg-transparent w-fit">
              <Image
                key={tech.label}
                src={tech.src}
                alt={tech.label}
                width={50}
                height={50}
                className="rounded-full object-center"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TechStacks;
