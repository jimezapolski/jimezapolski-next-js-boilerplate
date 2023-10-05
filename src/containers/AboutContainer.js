import React from 'react'
import Image from 'next/image'

const AboutContainer = () => {
  return (
    <div className=" flex flex-row m-4  justify-center items-center">
      <div className="my-0 ml-0">
        <Image
          src={'/assets/Logo.png'}
          width={240}
          height={240}
          alt='logo'
        />
      </div>
   
    <div className="w-1/2 ml-2">
      <h1 className="text-8xl font-bold text-[#2FBBAA]">Tu nueva plataforma de STREAM</h1>
      <div className="flex items-center my-3">
        <p className="text-2xl font-bold text-white">Diseñada por Jimena Zapolski</p>
        <span className="mx-2 text-white">-</span> 
        <p className="text-2xl font-bold text-white">
       2023
        </p>
      </div>
     
  </div>
  </div>
  )
}

export default AboutContainer