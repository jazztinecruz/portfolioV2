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
          I have positive mindset that challenges are not merely additional
          circumstances but an opportunities for personal development and
          learning. I approach obstacles with determination and resilience,
          viewing them as pathways to growth.
        </p>
      </div>
    </section>
  );
};

export default Character;
