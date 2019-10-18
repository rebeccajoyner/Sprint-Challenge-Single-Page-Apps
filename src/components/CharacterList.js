import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import axios from 'axios';



export default function CharacterList() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    axios
        .get(`https://rickandmortyapi.com/api/character/`)
        .then(results => {setCharacters(results.data.results)})
  }, [])

  return (
    <section className="character-list">
      <h2>
      {characters.map(c => {
        return <CharacterCard key={c.id} {...c} />;
      })}
      </h2>
    </section>
  );
}
