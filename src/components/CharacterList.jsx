import React, { useEffect } from 'react';
import Character from './Character';
import Loader from './Loader';
import Error from './Error';
import '../assets/styles/components/CharacterList.scss';
import useGetCharacters from '../custom-hooks/useGetCharacters';

const CharacterList = () => {
  const { characters, loading, error, getCharacter } = useGetCharacters();

  useEffect(() => {
    getCharacter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="characterList">
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
