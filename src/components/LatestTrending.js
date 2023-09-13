import React from 'react'
import { useAppContext } from '@/contexts/AppContext';
import Image from 'next/image';
import ShowCard from './ShowCard';

const LatestTrending = () => {
  const { show} = useAppContext();

  return (
    <div className='bg-[#000000]'>
         <h1 className='m-8 text-3xl text-slate-300 font-semibold'> Latest & Trending </h1>
        <div className='flex flex-row'>
        <p className='m-8 text-9xl text-white font-bold'>1</p>
        <p className='m-8 text-9xl text-white font-bold'>2</p>
         <p className='m-8 text-9xl text-white font-bold'>3</p>
         <p className='m-8 text-9xl text-white font-bold'>4</p>
         <p className='m-8 text-9xl text-white font-bold'>5</p>
        </div> 
        
                   

    </div>
  )
}

export default LatestTrending