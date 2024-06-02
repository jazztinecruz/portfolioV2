"use client";

import { Design, Development } from "@/libraries/types";
import {
  ArrowUpRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";

type Props = {
  data: Design | Development;
  type: "design" | "development";
};

const ShowcaseCard = ({ data, type = "development" }: Props) => {
  const [currentDisplayIndex, setCurrentDisplayIndex] = useState<number>(0);

  const photos: number[] = Array.from({ length: 5 }, (_, index) => index + 1);

  const handleNext = () => {
    if (currentDisplayIndex < photos.length - 1) {
      setCurrentDisplayIndex((prev) => prev + 1);
    } else setCurrentDisplayIndex(0);
  };

  const handlePrev = () => {
    if (currentDisplayIndex < 1) setCurrentDisplayIndex(photos.length - 1);
    else setCurrentDisplayIndex((prev) => prev - 1);
  };

  const previews = () => {
    switch (type) {
      case "development": {
        const code = data as Development;
        return (
          <div className="flex flex-wrap items-end gap-2">
            {code.preview && <Badge label="Preview" url={code.preview} />}
            <Badge label="Github" url={code.github} />
            {code.ongoing && <Badge label="In Development" />}
          </div>
        );
      }
      case "design": {
        const design = data as Design;
        return <Badge label="Preview" url={design.preview} />;
      }
    }
  };

  return (
    <div className="flex flex-col rounded-md">
      {/* carousel */}
      <div className="relative aspect-video w-full h-full bg-gray-500 rounded-t-md">
        <button
          onClick={handlePrev}
          className="absolute left-2 top-2/4 -translate-y-2/4 bg-opacity rounded p-1">
          <ChevronLeftIcon className="w-5 h-5" />
        </button>
        <div>{photos[currentDisplayIndex]}</div>
        <button
          onClick={handleNext}
          className="absolute right-2 top-2/4 -translate-y-2/4 bg-opacity rounded p-1">
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>
      {/* details */}
      <div className="bg-opacity p-4 space-y-2 rounded-b-md grid">
        <h3 className="font-semibold">{data.title}</h3>
        <p className="text-sm tertiary mb-4">{data.description}</p>
        {previews()}
      </div>
    </div>
  );
};

export default ShowcaseCard;

const Badge = ({ label, url }: { label: string; url?: string }) => {
  const backgroundColor =
    label === "In Development" ? "bg-yellow-600/50" : "bg-green-700/50";

  return (
    <Link href={url || ""} target="_blank">
      <div
        className={`text-xs rounded-full flex items-center gap-1 py-1 px-3 w-fit font-semibold ${backgroundColor}`}>
        <span>{label}</span>
        {url && <ArrowUpRightIcon title="Download PDF" className="w-3 h-3" />}
      </div>
    </Link>
  );
};
