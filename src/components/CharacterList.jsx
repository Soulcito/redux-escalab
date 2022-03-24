import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Character from './Character';
import Loader from './Loader';
import Error from './Error';
import '../assets/styles/components/CharacterList.scss';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function getCharacter() {
    try {
      const response = await Axios.get(
        'https://rickandmortyapi.com/api/character'
      );
      const result = response.data.results;
      setCharacters(result);
      setLoading(false);
      setError(false);
    } catch (error) {
      setLoading(false);
      setError(error);
      console.error(error);
    }
  }

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        characters.map((character) => (
          <Character key={character.id} data={character} />
        ))
      )}
    </div>
  );
};

export default CharacterList;
