// aca mostramos un nombre y un link para que pueda ir directo a la page de show
import Image from "next/image";
import ButtonLink from "./ButtonLink";

const ShowCard = ({ actualShow }) => {
  const { name, id } = actualShow;
  // const { name, id, image } = show;
  return (
    // col-span-3 = 12/3 = 4 columnas si pongo span-4 = me da 3 columnas
    <div className="show_container col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 flex flex-col gap-3 justify-start items-center ">
      <div className="border border-slate-800 border-solid mb-2 w-full h-auto">
        <Image src={actualShow.image?.original} width={680} height={1000} alt={actualShow.name} />
      </div> 
      {/* este div es porque next me obliga a tener el tamñani de las imagenes y al poner el div hago que no se me rompa la grilla, porque podria pasar que se rompa todo */}

      <h3>{name}</h3>
     <ButtonLink id={id} />
    </div>
  );
};

export default ShowCard;
