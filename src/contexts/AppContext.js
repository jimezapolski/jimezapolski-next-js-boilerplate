import {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from 'react';
import axios from 'axios';
// porque es un componente de react normal entonces hay que incorporar cosas

const AppContext = createContext(); // creamos appContext = createContext() = es lo que nos deja crear el contexto

export const AppContextProvider = ({ children }) => { // el provider es lo que nos deja envolver a todo - es el papel amarillo
  //WRAP _app with this.
  // const showNumber = () => `Mi numero es 5` // aca armo funciones
  // const nombre = `jime`
  
  //cuando carga el componente hacemos llamada a la api
  const [shows, setShows] = useState([]);
  const [show, setShow] = useState({});
  const [loading, setLoading] = useState(true);
  const [showLoading, setShowLoading] = useState(true);

  const getShows = useCallback(async (whichPage) => {
    setLoading(true);
    try {
      const showsReq = await axios.get(
        // `https://api.tvmaze.com/search/shows?q=${whichShow}`
        `https://api.tvmaze.com/shows?page=${whichPage}`
      );
      setShows(showsReq.data.slice(0,40));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getShows(1);
    // const showsBatman =  getShows("batman") 
    // const showsBarbie = getShows("barbie");
    // const theShows = [[showsBatman], [showsBarbie]];
    // setShows(theShows)
  }, [getShows]);
 
  const getShow = useCallback(async (id) => {
    setShowLoading(true);
    try {
      const show = await axios.get(`https://api.tvmaze.com/shows/${id}`);
      console.log(show.data);
      setShow(show.data);
      setShowLoading(false);
    } catch (error) {
      console.log('ERRORRR NO EXISTE SHOW');
    }
  }, []);


  return (
    <AppContext.Provider
      value={
        {           //exported functions - son las funciones que van a estar disponibles en toda la aplicacion

          shows,
          loading,
          getShow,
          show,
          showLoading
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
