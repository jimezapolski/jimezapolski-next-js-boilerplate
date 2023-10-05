import React from "react";
import Image from "next/image";
import Link from "next/link";
const FilterSingleCard = ({ theShow }) => {
  return (
    <div  className=" lex flex-column m-4  justify-center items-center">
      <Link href={`/show/${theShow?.id}`}>
        <Image
          className="rounded-lg"
          src={theShow?.image?.medium}
          width={138}
          height={178}
          alt={theShow?.name}
        />
      </Link>
      <p className="m-6 text-sm font-bold text-white text-center">{theShow?.name} </p>
    </div>
  );
};

export default FilterSingleCard;
