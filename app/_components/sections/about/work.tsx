import Link from "next/link";
import { Title } from "../../titles";
import { works } from "@/libraries/constants/data";

const WorkExperience = () => {
  return (
    <section className="grid md:grid-cols-2 items-center gap-8 lg:gap-12 mt-12">
      <div className="flex flex-col gap-4 items-start">
        <Title>Work Experience</Title>
        <p className="tertiary">
          In my professional journey, I&apos;ve embraced each role as an
          opportunity to learn, contribute, and grow. From collaborating with
          diverse teams to tackling complex challenges, I&apos;ve gained
          invaluable experience that has honed my skills.
        </p>
      </div>

      <div className="flex flex-col">
        {works.map((work) => (
          <div
            key={work.months}
            className="flex border-l py-2 relative primary-border">
            <div
              className={`w-3 h-3 rounded-full absolute -start-1.5 mt-1.5 secondary ${
                work.isCurrent && "bg-green-500 dark:bg-green-500"
              }`}
            />

            <div className="flex flex-col ml-8">
              <Link href={work.link}>
                <h3 className="font-medium hover:underline cursor-pointer">
                  {work.company}
                </h3>
              </Link>
              <div className="text-sm flex items-center  whitespace-nowrap flex-wrap font-light tertiary gap-2">
                <p>{work.year}</p>
                <div className="w-1 h-1 rounded-full secondary" />
                <p>{work.months}</p>
                <div className="w-1 h-1 rounded-full secondary" />
                <p>{work.type[0].toUpperCase() + work.type.slice(1)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
