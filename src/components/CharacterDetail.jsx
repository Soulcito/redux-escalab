import React from 'react';
import '../assets/styles/components/CharacterDetail.scss';

const CharacterDetail = (props) => {
  const { data } = props;
  const { image, name, status, species, gender, origin, location, episode } =
    data;

  return (
    <div className="characterDetail">
      <img src={image} alt="Character" />
      <div className="characterDetail__container">
        <h2>{name}</h2>
        <p className="characterDetail__item">
          <span className="characterDetail__item-type">Status: </span>
          {status}
        </p>
        <p className="characterDetail__item">
          <span className="characterDetail__item-type">Species: </span>
          {species}
        </p>
        <p className="characterDetail__item">
          <span className="characterDetail__item-type">Gender: </span>
          {gender}
        </p>
        <p className="characterDetail__item">
          <span className="characterDetail__item-type">Origin: </span>
          {origin.name}
        </p>
        <p className="characterDetail__item">
          <span className="characterDetail__item-type">Last Location: </span>
          {location.name}
        </p>
        <p className="characterDetail__item">
          <span className="characterDetail__item-type">Episodes: </span>
          {episode.length}
        </p>
      </div>
    </div>
  );
};

export default CharacterDetail;
