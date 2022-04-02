import { useState } from 'react';
import Axios from 'axios';
import { useLocalStorage } from './useLocalStorage';

const useGetCharacters = () => {
  //const [characters, setCharacters] = useState([]);
  const [characters, setCharacters] = useLocalStorage('characters',"");
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

  return {
    characters,
    loading,
    error,
    getCharacter
  }
};

export default useGetCharacters;

