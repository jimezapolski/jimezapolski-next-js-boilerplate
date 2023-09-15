import { useAppContext } from '@/contexts/AppContext'
import React, { useEffect, useState } from 'react'
import LatestTrandingSingleCard from './LatestTrandingSingleCard';
const TopSearches = () => {
    const {shows, loading} = useAppContext();

    const [topSeacrh, setTopSearch] = useState();

    useEffect(() => {

        const filterTop = shows.filter((theShow) => theShow.rating.average > 8);
        setTopSearch(filterTop);
        console.log(filterTop)
      },[shows]) 


  return (
    <div>
        <h1 className='m-8 text-3xl text-slate-300 font-semibold'> Top Searches </h1>
        <div className='flex flex-row m-4'>
        {/* {!loading && (
} */}
        </div>
    </div>
  )
}

export default TopSearches