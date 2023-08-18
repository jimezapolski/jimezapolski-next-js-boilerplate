import React from "react";
import { useAppContext } from "@/contexts/AppContext";

// next link : para que vaya al link de la informacion y que eso lleve a la pagina que quiere y completamos el link
const HomeContainer = () => {
  const { shows, loading } = useAppContext(); // el homecontainer no tiene un use state sino se usa una vez sola desde el appContext
  return (
    <div>
      <h1>Shows</h1>
      <div>
        {!loading && (
          <div>
            {shows.map((actualShow, index) => {
              return (
                <div key={index} className="show_container">
                  <h2>{actualShow.show.name} </h2>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeContainer;
