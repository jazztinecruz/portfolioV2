"use client";

import { charateristics } from "@/libraries/constants/data";
import { useTheme } from "@/libraries/contexts/use-theme";
import Title from "../../title";

const Character = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="grid md:grid-cols-2 items-center gap-8 mt-12">
      <div className="flex flex-wrap gap-3">
        {charateristics.map((character) => (
          <div
            key={character}
            className={`border ${
              isDarkMode ? "border-gray-600 tertiary" : "border-black"
            } rounded-md w-fit px-4 py-2 text-sm md:text-md`}>
            {character}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 items-start">
        <Title>Character</Title>
        <p className={`${isDarkMode && "tertiary"}`}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
          eaque similique delectus, expedita sapiente ab maxime soluta
          praesentium nostrum a voluptatem tenetur consectetur laudantium
          voluptatibus possimus quibusdam, placeat dignissimos veritatis.
        </p>
      </div>
    </div>
  );
};

export default Character;
