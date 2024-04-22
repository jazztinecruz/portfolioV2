"use client";

import { useTheme } from "@/libraries/contexts/use-theme";
import Image from "next/image";

const Radials = () => {
  const { isDarkMode } = useTheme();

  if (!isDarkMode) return null;

  return (
    <div>
      <div className="fixed left-0 transform top-64 overflow-hidden">
        <Image
          src="/radial1.png"
          width={800}
          height={800}
          alt="radial"
          priority
          className="rounded-r-full"
        />
      </div>
      <div className="fixed right-0 rotate-180 -top-40 transform overflow-hidden">
        <Image
          src="/radial2.png"
          width={800}
          height={800}
          alt="radial"
          priority
          className="rounded-r-full"
        />
      </div>
    </div>
  );
};

export default Radials;
