import { works } from "@/core/constants/data";
import { SectionTitle, Title } from "../../titles";

const WorkExperience = () => {
  return (
    <section id="experience" className="grid items-center gap-8 mt-12">
      <SectionTitle>
        <span className="bg-text">Work Experience</span>
      </SectionTitle>
      <div className="grid md:grid-cols-2 items-center gap-8 mt-12">
        <div className="flex flex-col gap-4 items-start">
          <Title>Work Experience</Title>
          <p className="tertiary">
            Over the past years, I have worked as a Frontend Developer
            specializing in React.js, Next.js, and TypeScript. My experience
            includes developing dynamic and responsive web applications,
            optimizing performance, and enhancing user interfaces. I have
            collaborated with cross-functional teams to deliver high-quality
            products and have consistently met project deadlines.
          </p>
        </div>

        <div className="flex flex-col">
          {works.map((work) => (
            <div
              key={work.duration}
              className="flex border-l py-2 relative primary-border">
              <div
                className={`w-3 h-3 rounded-full absolute -start-1.5 mt-1.5 secondary ${
                  work.isCurrent && "bg-green-500 dark:bg-green-500"
                }`}
              />

              <div className="flex flex-col ml-8 flex-wrap">
                <h3 className="font-medium">{work.company}</h3>
                <p className="text-sm tertiary">{work.location}</p>
                <div className="text-sm flex flex-wrap items-center font-light tertiary gap-2">
                  <p>{work.year}</p>
                  <div className="w-1 h-1 rounded-full secondary" />
                  <p>{work.duration}</p>
                  <div className="w-1 h-1 rounded-full secondary" />
                  <p>{work.type[0].toUpperCase() + work.type.slice(1)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
