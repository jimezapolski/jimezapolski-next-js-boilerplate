import { useAppContext } from "@/contexts/AppContext";
import React, { useEffect, useState } from "react";
import FilterSingleCard from "./FilterSingleCard";

const TopSearches = () => {
  const { shows, loading } = useAppContext();

  const [topSearch, setTopSearch] = useState();

  useEffect(() => {
    const filterTop = shows.filter((theShow) => theShow.rating.average > 8);
    setTopSearch(filterTop);
    console.log(filterTop);
  }, [shows]);

  return (
    <div>
      <h1 className="m-8 text-3xl text-slate-300 font-semibold">
        Top Searches
      </h1>

       {!topSearch && (
        <div className="flex flex-row m-4">
        {topSearch.slice(0, 5).map((item, index) => (
          <React.Fragment key={index}>
            <p className="m-8 text-9xl text-white font-bold">{index + 1}</p>
            <FilterSingleCard theShow={item} />
          </React.Fragment>
        ))}
      </div>
      )}
    
       
    </div>
  );
};

export default TopSearches;
