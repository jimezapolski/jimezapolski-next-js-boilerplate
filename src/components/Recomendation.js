import React, { useEffect, useState } from 'react'
import { useAppContext } from '@/contexts/AppContext';
import FilterSpecialCard from './FilterSpecialCard';


const Recomendation = () => {
    const { shows } = useAppContext();
    const [showsRandom, setShowRandom] = useState([]);
    useEffect(() => {
      const filteredShows = shows.filter((theShow) =>
        theShow.genres.includes("Drama" && "Comedy")
      );
    
      if (filteredShows.length > 0) {
        const randomElement = Math.floor(Math.random() * filteredShows.length);
        const randomShow = filteredShows[randomElement];
        
        setShowRandom([randomShow]);
        console.log(randomShow);
      } else {
        setShowRandom([]); 
      }
    }, [shows]); 
  
  return (

    <div>
    <h1 className="m-8 text-3xl text-slate-300 font-semibold">
    Show recomendado hoy
    </h1>
     {showsRandom && (
      <div className="flex flex-row m-6">
      {showsRandom.map((item, index) => (
        <React.Fragment key={index}>
          <FilterSpecialCard theShow={item} />
        </React.Fragment>
      ))}
    </div>
    )}
  
     
  </div>
  )
}

export default Recomendation