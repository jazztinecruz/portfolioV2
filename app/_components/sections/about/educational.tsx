import { Title } from "../../titles";
import { education } from "@/core/constants/data";
import { AcademicCapIcon, StarIcon } from "@heroicons/react/24/solid";

const EducationalBackground = () => {
  return (
    <section className="grid md:grid-cols-2 items-center gap-8 mt-12">
      <div className="flex flex-col gap-4 items-start">
        <Title>Educational Background</Title>
        <p className="tertiary">
          My educational journey has been marked by resilience and
          determination. These experiences have not only shaped my intellect but
          also strengthened my character.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {education
          .filter((item) => item.type === "degree")
          .map((item) => (
            <div key={item.label} className="flex gap-4 items-start">
              <AcademicCapIcon className="w-5 h-5" />
              <div className="flex flex-col">
                <p className="lg:text-lg">{item.label}</p>
                <p className="text-sm tertiary font-light">{item.sublabel}</p>
              </div>
            </div>
          ))}

        {education
          .filter((item) => item.type === "award")
          .map((item) => (
            <div key={item.label} className="flex gap-4 items-start">
              <StarIcon className="w-5 h-5" />
              <div className="flex flex-col">
                <p className="lg:text-lg">{item.label}</p>
                <p className="text-sm tertiary font-light">{item.sublabel}</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default EducationalBackground;
