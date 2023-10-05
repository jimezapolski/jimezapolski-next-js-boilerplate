import React from "react";
import Image from "next/image";
import Link from "next/link";

const FilterSpecialCard = ({ theShow }) => {
  const summaryBien = theShow?.summary?.replace(/<\/?p>|<\/?b>/g, "");

  return (
    <div className="flex flex-row m-4 justify-center items-center">
    <Link href={`/show/${theShow?.id}`}>
      <div className="my-0 ml-0">
        <Image
          src={theShow?.image?.original}
          width={240}
          height={240}
          alt={theShow?.name}
        />
      </div>
    </Link>
    <div className="w-1/2 ml-2">
      <h1 className="text-8xl font-bold text-[#2FBBAA]">{theShow.name}</h1>
      <div className="flex items-center my-3">
        <p className="text-2xl font-bold text-white">{theShow.genres[0]}</p>
        <span className="mx-2 text-white">-</span>
        <p className="text-2xl font-bold text-white">{theShow.genres[1]}</p>
      </div>
      <div className="flex flex-col my-3"> {/* Cambiamos a flex-col */}
        <p className="leading-relaxed text-white mb-3">
          {summaryBien?.substring(0, 130) + "..." || "-"}
        </p>
        <Link href={`https://www.netflix.com/ar/`}>
          <button className="px-4 py-2 bg-[#2FBBAA] text-white font-semibold rounded hover:bg-[#279c8d] transition-colors">
            View Now
          </button>
        </Link>
      </div>
    </div>
  </div>
  
  

  );
};

export default FilterSpecialCard;
