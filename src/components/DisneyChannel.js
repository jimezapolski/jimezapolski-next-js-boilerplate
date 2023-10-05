import { useAppContext } from "@/contexts/AppContext";
import React, { useEffect, useState } from "react";
import FilterSingleCard from "./FilterSingleCard";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";

const DisneyChannel = () => {
  const { shows } = useAppContext();

  const [disneyShows, setDisneyShows] = useState();

  useEffect(() => {
    const filterDisney = shows.filter((theShow) => theShow.genres.includes("Family"));
    setDisneyShows(filterDisney);
  }, [shows]);

  return (
   
      <div>
      <div className="flex items-center justify-between">
  <h1 className="m-6 text-3xl text-slate-300 font-semibold">
  Family Shows
  </h1>
  <Link href={`/cardsContainer`}>
    <button className="inline-flex items-center p-4 bg-[#2FBBAA] hover:bg-[#2aa899] active:bg-[#238e81]  focus:ring focus:ring-[#299d8f] border-0 font-medium py-1 text-white px-3 focus:outline-none rounded mt-4 md:mt-0 mr-12">
    View More <RiArrowRightSLine />
    </button>
  </Link>
</div>

       {disneyShows && (
        <div className="flex flex-row m-4">
        {disneyShows.slice(0, 5).map((item, index) => (
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

export default DisneyChannel;
