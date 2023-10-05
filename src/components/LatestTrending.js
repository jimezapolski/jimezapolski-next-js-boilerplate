import React, { useEffect, useState } from "react";
import { useAppContext } from "@/contexts/AppContext";
import FilterSingleCard from "./FilterSingleCard";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";


const LatestTrending = () => {
  const { shows } = useAppContext();
  const [showsFiltrados, setShowFiltrados] = useState([]);

  useEffect(() => {
    const filter = shows.filter((theShow) => theShow.type.includes("Reality"));
    setShowFiltrados(filter);
    console.log(filter);
  }, [shows]);

  return (
    <div>
      <div className="flex items-center justify-between">
  <h1 className="m-6 text-3xl text-slate-300 font-semibold">
    Latest & Trending
  </h1>
  <Link href={`containers/CardsContainer`}>
    <button className="inline-flex items-center p-4 bg-[#2FBBAA] hover:bg-[#2aa899] active:bg-[#238e81]  focus:ring focus:ring-[#299d8f] border-0 font-medium py-1 text-white px-3 focus:outline-none rounded mt-4 md:mt-0 mr-12">
    View More <RiArrowRightSLine />
    </button>
  </Link>
</div>
      {showsFiltrados && (
        <div className="flex flex-row m-4">
          {showsFiltrados.slice(0, 5).map((item, index) => (
            <React.Fragment key={index}>
              <p className="m-8 text-9xl font-bold  inset-1 text-white">
                {index + 1}
              </p>
              <FilterSingleCard theShow={item} />
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default LatestTrending;
