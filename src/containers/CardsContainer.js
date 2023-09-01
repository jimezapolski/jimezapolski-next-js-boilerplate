import ShowCard from "@/components/ShowCard";
import { useAppContext } from "@/contexts/AppContext";

const CardsContainer = () => {
  const { shows, loading } = useAppContext();
  return (
    <section>
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
