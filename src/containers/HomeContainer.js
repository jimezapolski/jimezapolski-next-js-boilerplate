import Hero from "@/components/Hero";
import CardsContainer from "./CardsContainer";
import LatestTrending from "@/components/LatestTrending";
import TopSearches from "@/components/TopSearches";

const HomeContainer = () => {
  return (
    <>
      <Hero />
      <LatestTrending />
      <TopSearches />
      <CardsContainer />
    </>
  );
};

export default HomeContainer;
