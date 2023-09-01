import React from 'react'
import { useAppContext } from '@/contexts/AppContext'
import Image from 'next/image'
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {

  return (
   <div className='flex justify-between items-center px-8 h-14 bg-[#FDF104]'>
    <div className='h-auto w-16 sm:w-24 md:w-20'>
      <Image src={`/assets/batman-logo.png`} width={80} height={60}  alt={`logo`} ></Image>
    </div>
    <nav className='hidden sm:block'>
        <ul className='flex justify-end items-center gap-4 text-black'>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className='sm:hidden'>
        <RxHamburgerMenu size={20} color={`#000000`} />
      </div>

    </div>
  )
}

export default Navbar