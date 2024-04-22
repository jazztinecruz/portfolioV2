import { charateristics } from "@/libraries/constants/data";
import { Title } from "../../titles";

const Character = () => {
  return (
    <section className="grid md:grid-cols-2 items-center gap-8 mt-12">
      <div className="flex flex-wrap gap-3">
        {charateristics.map((character) => (
          <div
            key={character}
            className="bg-opacity rounded-md w-fit px-4 py-2 text-sm md:text-md">
            {character}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 items-start">
        <Title>Character</Title>
        <p className="tertiary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
          eaque similique delectus, expedita sapiente ab maxime.
        </p>
      </div>
    </section>
  );
};

export default Character;
