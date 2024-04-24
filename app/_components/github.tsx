"use client";

import { useTheme } from "@/libraries/contexts/use-theme";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

type Props = {
  url: string;
  hasArrow?: boolean;
};

const Github = ({ url, hasArrow = false }: Props) => {
  const { isDarkMode } = useTheme();

  return (
    <Link href={url}>
      <div
        title="Github Url"
        className="bg-opacity rounded px-3 flex items-center gap-2 py-1 w-fit">
        {isDarkMode ? (
          <Image
            alt="Github"
            src="/logos/github-dark.webp"
            width={30}
            height={30}
          />
        ) : (
          <Image
            alt="Github"
            src="/logos/github-light.png"
            width={20}
            height={20}
          />
        )}
        {hasArrow && (
          <>
            <span className="text-sm tertiary">Github</span>
            <ArrowUpRightIcon className="w-3 h-3" />
          </>
        )}
      </div>
    </Link>
  );
};

export default Github;
