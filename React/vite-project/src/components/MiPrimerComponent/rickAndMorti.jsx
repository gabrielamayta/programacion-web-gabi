import React, { useState, useEffect } from "React";
import api from "api";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    api
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setCharacters(response.data.results);
      })
      .catch((error) => {
        console.error("Hubo un error en los caracteres", error);
      });
  }, []);

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
