import ShowCard from "@/components/ShowCard";
import { useAppContext } from "@/contexts/AppContext";
import Link from "next/link";
import { RiArrowLeftSLine } from "react-icons/ri";

const CardsContainer = () => {
  const { shows, loading } = useAppContext();
  return (
    <section>
       <Link href={`/`}>
    <button className="inline-flex items-center p-4 bg-[#2FBBAA] hover:bg-[#2aa899] active:bg-[#238e81]  focus:ring focus:ring-[#299d8f] border-0 font-medium py-1 text-white px-3 focus:outline-none rounded mt-4 md:mt-0 mr-12">
    Back <RiArrowLeftSLine />
    </button>
  </Link>
      {/* <h3>Shows</h3> */}
      {!loading && (
        <div className=' inner my-0 m-auto max-w-[1200px] px-4'>
          <div className=" grid grid-cols-12 gap-2 gap-y-6">
            {shows.map((actualShow, index) => {
              return <ShowCard actualShow={actualShow} key={index} />;
            })}
          </div>
        </div>
      )}
      {loading && <p >Loading...</p>}
     
    </section>
  );
};

export default CardsContainer;
