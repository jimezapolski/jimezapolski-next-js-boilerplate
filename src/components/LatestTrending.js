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
        <div className='flex flex-row m-4'>
        <p className='m-8 text-9xl text-white font-bold'>1</p>
        <FilterSingleCard theShow={showsFiltrados[0]} />
        <p className='m-8 text-9xl text-white font-bold'>2</p>
        <FilterSingleCard theShow={showsFiltrados[1]} />
         <p className='m-8 text-9xl text-white font-bold'>3</p>
         <FilterSingleCard theShow={showsFiltrados[2]} />
         <p className='m-8 text-9xl text-white font-bold'>4</p>
         <FilterSingleCard theShow={showsFiltrados[3]} />
         <p className='m-8 text-9xl text-white font-bold'>5</p>
         <FilterSingleCard theShow={showsFiltrados[4]} />

        </div> 
        
                   

    </div>
  )
}

export default LatestTrending