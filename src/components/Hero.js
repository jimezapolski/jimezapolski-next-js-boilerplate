import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      className={`hero flex justify-center items-center w-full h-[600px] bg-[url('/assets/hero.png')] bg-cover bg-top mb-6`}
    >
      <div className=" bg-[rgba(0,0,0,.6)] w-full h-full flex justify-center items-center">
        <h1 className="text-xl sm:text-7xl">Welcome to the machine</h1>
      </div>
    </div>
  );
};

export default Hero;
