import Hero from "@/components/Hero";
// import CardsContainer from "./CardsContainer";
import LatestTrending from "@/components/LatestTrending";
import TopSearches from "@/components/TopSearches";
import Recomendation from "@/components/Recomendation";
import Drama from "@/components/Drama";
import DisneyChannel from "@/components/DisneyChannel";
import MoreShows from "@/components/MoreShows";
const HomeContainer = () => {
  return (
    <>
     
      <Hero />
      <Recomendation />
      <LatestTrending />
      <TopSearches />
     <Drama />
     <DisneyChannel />
     <MoreShows />
      {/* <CardsContainer /> */}
      
      
    </>
  );
};

export default HomeContainer;
