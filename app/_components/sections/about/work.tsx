import { Title } from "../../titles";
import { works } from "@/libraries/constants/data";

const WorkExperience = () => {
  return (
    <div className="grid md:grid-cols-2 items-center gap-8 mt-12">
      <div className="flex flex-col gap-4 items-start">
        <Title>Work Experience</Title>
        <p className="tertiary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
          eaque similique delectus, expedita sapiente ab maxime soluta
          praesentium nostrum a voluptatem tenetur consectetur laudantium
          voluptatibus possimus quibusdam, placeat dignissimos veritatis.
        </p>
      </div>

      <div className="flex flex-col">
        {works.map((work) => (
          <div
            key={work.months}
            className="flex border-l py-2 relative primary-border">
            <div className="w-3 h-3 rounded-full absolute -start-1.5 mt-1.5 secondary" />

            <div className="flex flex-col ml-8">
              <h3 className="font-medium">{work.company}</h3>
              <div className="text-sm flex items-center font-light tertiary gap-2">
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
    </div>
  );
};

export default WorkExperience;
