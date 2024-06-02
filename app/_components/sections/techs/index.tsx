import { technologies } from "@/core/constants/data";
import { SectionTitle } from "../../titles";
import Image from "next/image";

const Technologies = () => {
  return (
    <section id="technologies" className="grid items-center gap-8 mt-12">
      <SectionTitle>
        <span className="bg-text">Technologies</span>
      </SectionTitle>
      <div className="flex flex-wrap gap-8">
        {technologies.map((tech) => {
          return (
            <div
              title={tech.label}
              key={tech.label}
              className="relative bg-opacity rounded-md w-fit px-4 py-2 grid place-items-center">
              <Image
                src={tech.src}
                alt={tech.label}
                width={40}
                height={40}
                className="object-center"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Technologies;
