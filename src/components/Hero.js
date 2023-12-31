import React from "react";
import Image from "next/image";
import SearchForm from "./SearchForm";

const Hero = () => {
  return (
    <div
      className={`hero flex justify-center items-center w-full h-[600px] bg-[url('/assets/hero.jpeg')] bg-cover bg-top mb-6`}
    >
      <div className=" bg-[rgba(0,0,0,.6)] w-full h-full flex justify-center items-center">
        {/* <h1 className=" text-white text-xl md:text-7xl sm:text-7xl">Welcome to the machine</h1> */}
        {/* <Image src={`/assets/search.png`} width={400} height={400}  alt={`search`} ></Image> */}
      
      < SearchForm />
      </div>
    </div>
  );
};

export default Hero;
