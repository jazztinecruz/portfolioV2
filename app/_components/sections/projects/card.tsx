"use client";

import { Design, Development } from "@/core/types";
import {
  ArrowUpRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  NoSymbolIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {
  data: Design | Development;
  type: "design" | "development";
};

const ShowcaseCard = ({ data, type = "development" }: Props) => {
  const [currentDisplayIndex, setCurrentDisplayIndex] = useState<number>(0);

  const photos = data.previewSet || [];

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
    <div className="grid grid-rows-2 rounded-md">
      {/* carousel */}
      <div className="relative aspect-video w-full h-full bg-gray-500/50 rounded-t-md">
        {photos[currentDisplayIndex] ? (
          <Link href={photos[currentDisplayIndex]} target="_blank">
            <Image
              src={photos[currentDisplayIndex]}
              alt={data.title}
              fill
              className="w-full h-full rounded-t-md"
            />
          </Link>
        ) : (
          <div className="flex items-center flex-wrap gap-1 text-white/50 h-full justify-center">
            <NoSymbolIcon className="w-5 h-5" />
            <span>Photo Not Available</span>
          </div>
        )}

        {photos.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-2/4 -translate-y-2/4 bg-white/30 rounded p-1 z-10">
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-2/4 -translate-y-2/4 bg-white/30 rounded p-1">
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </>
        )}

        <div className="flex items-center gap-1 absolute bottom-2 left-2/4 -translate-x-2/4">
          {photos.map((_, index) => (
            <div
              className={`w-2 h-2 rounded-full z-10 ${
                index === currentDisplayIndex ? "bg-white" : "bg-opacity"
              }`}
            />
          ))}
        </div>
      </div>
      {/* details */}
      <div className="bg-opacity p-4 space-y-3 rounded-b-md">
        <h3 className="font-semibold">{data.title}</h3>
        <p className="text-sm tertiary mb-auto">{data.description}</p>
        <div>{previews()}</div>
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
