import { useEffect, useState } from "react";

const RickAndMortyCharacters = () => {
  // Estado para almacenar los datos de los personajes
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((responseData) => setData(responseData));
  }, []);

  return (
    <>
      {!data ? (
        <>loading... </>
      ) : (
        <>
          <h2>
            Objeto Title:
            {data.title}
            id:{data.id}
          </h2>
          <p>body:{data.body}</p>
        </>
      )}
    </>
  );
};
