import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import Link from "next/link";
import { RiArrowLeftSLine } from "react-icons/ri";

const ShowSingleCard = ({ show, width = 680, height = 1000 }) => {
  const {
    name,
    id,
    image,
    language,
    status,
    rating,
    genres,
    premiered,
    summary,
    webChannel,
  } = show;
  const summaryBien = summary.replace(/<\/?p>|<\/?b>/g, "");

  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center min-h-screen">
        <div className="w-4/5 rounded-lg shadow-lg flex md:flex-row flex-col">
          <div className="md:w-1/2 md:p-6 p-4">
            <Image
              className="rounded-lg"
              src={image.original}
              width={width}
              height={height}
              alt={name}
            />
          </div>
          <div className="md:w-1/2 p-6">
          <Link href={`/`}>
              <button className="inline-flex items-center p-4 bg-[#2FBBAA] hover:bg-[#2aa899] active:bg-[#238e81]  focus:ring focus:ring-[#299d8f] border-0 font-medium px-4 py-2 text-white focus:outline-none rounded mt-4 md:mt-0 mr-12">
                <RiArrowLeftSLine />
              </button>
            </Link>
            <h5 className="text-4xl font-bold text-[#2FBBAA] mb-4">{name}</h5>
            <p className="text-base text-white mb-2">{language}</p>
            <div className="flex mb-2">
              <p className="text-base text-white ml-2">{genres[0]}</p>
              <p className="text-base text-white">-</p>
              <p className="text-base text-white ml-2">{genres[1]}</p>
            </div>
            <p className="text-base text-white  mb-4">{summaryBien}</p>
            <Link href={`https://www.netflix.com/ar/`}>
              <button className="px-4 py-2 bg-[#2FBBAA] text-white font-semibold rounded hover:bg-[#279c8d] transition-colors">
                View Now
              </button>
            </Link>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowSingleCard;
