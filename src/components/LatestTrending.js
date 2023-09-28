import React, { useEffect, useState } from 'react'
import { useAppContext } from '@/contexts/AppContext';
import ShowSingleCard from './ShowSingleCard';
import FilterSingleCard from './FilterSingleCard';

const LatestTrending = () => {
  const { shows } = useAppContext();
  const [showsFiltrados, setShowFiltrados] = useState([]);

  useEffect(() => {
    const filter = shows.filter((theShow) => theShow.type.includes("Reality"));
    setShowFiltrados(filter);
    console.log(filter)
  },[shows]) 
    
  return (
    <div >
         <h1 className='m-8 text-3xl text-slate-300 font-semibold'> Latest & Trending </h1>
         {showsFiltrados && (
        <div className="flex flex-row m-4">
        {showsFiltrados.slice(0, 5).map((item, index) => (
          <React.Fragment key={index}>
            <p className="m-8 text-9xl text-white font-bold">{index + 1}</p>
            <FilterSingleCard theShow={item} />
          </React.Fragment>
        ))}
      </div>
      )}

        </div> 
        
  )
}

export default LatestTrending