import React from 'react'
import { useAppContext } from '@/contexts/AppContext'
import Image from 'next/image'
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {

  return (
   <div className='flex justify-between items-center px-8 h-14 bg-[#000000] shadow-xl shadow-cyan-500/50 '>
    <div className='h-auto w-20 sm:w-24 md:w-20'>
      <Image src={`/assets/Logo.png`} width={160} height={80}  alt={`logo`} ></Image>
    </div>
    <nav className='hidden sm:block'>
        <ul className='flex justify-end items-center gap-4 text-white opacity-75'>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
      </nav>
      <div className='sm:hidden'>
        <RxHamburgerMenu size={20} color={`#FFFFFF`} />
      </div>

    </div>
  )
}

export default Navbar