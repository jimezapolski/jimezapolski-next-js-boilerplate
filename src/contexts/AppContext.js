import { createContext, useState, useContext, useEffect } from "react"; // porque es un componente de react normal entonces hay que incorporar cosas
import axios from "axios";

const AppContext = createContext(); // creamos appContext = createContext() = es lo que nos deja crear el contexto

export const AppContextProvider = ({ children }) => { // el provider es lo que nos deja envolver a todo - es el papel amarillo
  //WRAP _app with this.
  // const showNumber = () => `Mi numero es 5` // aca armo funciones
  // const nombre = `jime`
  
  //cuando carga el componente hacemos llamada a la api
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Hacemos request a nuestra API
    const getData = async () => {
      setLoading(true);
      try {
        const showsReq = await axios.get(
          `https://api.tvmaze.com/search/shows?q=batman`
        );
        setShows(showsReq.data);
        console.log(showsReq.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <AppContext.Provider
      value={
        {
          shows,
          loading
          // showNumber,
          // nombre
          //exported functions - son las funciones que van a estar disponibles en toda la aplicacion
        }
      }
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => { // cuando empezamos con la palabra use - son hooks de react -- aca estamos creando el nuestro propio que nos 
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppContextProvider"); // esto es para decir que no se puede usar desde afuera 
  }
  return context;
};

export default AppContext;
