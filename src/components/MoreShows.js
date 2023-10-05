import { useAppContext } from "@/contexts/AppContext";
import React, { useEffect, useState } from "react";
import FilterSingleCard from "./FilterSingleCard";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";

const MoreShows = () => {
  const { shows, loading } = useAppContext();

  const [moreShows, setMoreShows] = useState();

  useEffect(() => {
    const filter = shows.filter((theShow) => theShow.rating.average > 4 && theShow.rating.average < 7);
    setMoreShows(filter);
    console.log(filter);
  }, [shows]);

  return (
   
      <div>
      <div className="flex items-center justify-between">
  <h1 className="m-6 text-3xl text-slate-300 font-semibold">
   More Shows
  </h1>
  <Link href={`/cardsContainer`}>
    <button className="inline-flex items-center p-4 bg-[#2FBBAA] hover:bg-[#2aa899] active:bg-[#238e81]  focus:ring focus:ring-[#299d8f] border-0 font-medium py-1 text-white px-3 focus:outline-none rounded mt-4 md:mt-0 mr-12">
     View More <RiArrowRightSLine />
    </button>
  </Link>
</div>

       {moreShows && (
        <div className="flex flex-row m-4">
        {moreShows.slice(0, 5).map((item, index) => (
          <React.Fragment key={index}>
            <p className="m-2 text-9xl text-white font-bold">{index + 1}</p>
            <FilterSingleCard theShow={item} />
          </React.Fragment>
        ))}
      </div>
      )}
    
       
    </div>
  );
};

export default MoreShows;
