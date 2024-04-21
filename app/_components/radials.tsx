"use client";

import { useTheme } from "@/libraries/contexts/use-theme";
import Image from "next/image";

const Radials = () => {
  const { isDarkMode } = useTheme();

  const radial1 = !isDarkMode ? "/radial5.png" : "/radial1.png";
  const radial2 = !isDarkMode ? "/radial7.png" : "/radial2.png";

  return (
    <div>
      <div className="fixed left-0 transform top-64 overflow-hidden">
        <Image
          src={radial1}
          width={800}
          height={800}
          alt="radial"
          className="rounded-r-full"
        />
      </div>
      <div className="fixed right-0 rotate-180 -top-40 transform overflow-hidden">
        <Image
          src={radial2}
          width={800}
          height={800}
          alt="radial"
          className="rounded-r-full"
        />
      </div>
    </div>
  );
};

export default Radials;
