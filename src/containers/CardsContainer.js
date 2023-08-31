import ShowCard from '@/components/ShowCard';
import { useAppContext } from '@/contexts/AppContext';

const CardsContainer = () => {
  const { shows, loading } = useAppContext();
  return (
    <section>
      <h2>Shows</h2>
      {!loading && (
        <div>
          {shows.map((actualShow, index) => {
            return <ShowCard actualShow={actualShow} key={index} />;
          })}
        </div>
      )}
      {loading && <p>Loading...</p>}
    </section>
  );
};

export default CardsContainer;