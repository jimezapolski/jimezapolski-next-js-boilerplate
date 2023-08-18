import { useAppContext } from "@/contexts/AppContext"; // PASO 1: importamos el hook desde el context
import Navbar from "@/components/Navbar";
import HomeContainer from "@/containers/HomeContainer";
import Footer from "@/components/Footer";

export default function Home() {
  // const { showNumber, nombre } = useAppContext(); // PASO 2; destructuring de todas las funciones posibles de mis value / ahi voy a tener todas y me voy trayendo las que necesito
  return (
    <> 
      <Navbar />
      <HomeContainer />
      <Footer />
    </>
  );
}
