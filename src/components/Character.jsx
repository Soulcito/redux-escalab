import React, { useEffect, useState } from 'react';
import CharacterDetail from './CharacterDetail';
import Modal from './Modal';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { setFavorite, deleteFavorite } from '../actions';
import SVGStar from '../assets/static/icons/star.svg';
import '../assets/styles/components/Character.scss';
import useModal from '../custom-hooks/useModal';

const Character = (props) => {
  const { modal, handleCloseModal, handleOpenModal } = useModal();
  const [favorite, setFavorite] = useState(false);

  const { data, favoriteCharacters } = props;
  const { id, image, name, status, gender, species } = data;

  const handleSetFavorite = () => {
    props.setFavorite({ data });
    setFavorite(true);
  };

  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
    setFavorite(false);
  };

  const isFavorite = () => {
    const result = favoriteCharacters.filter(
      (favoriteCharacter) => favoriteCharacter.data.id === id
    );
    if (result.length) {
      setFavorite(true);
    }
  };

  useEffect(() => {
    isFavorite();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="character">
      <img className="character__img" src={image} alt="Character" />
      5620000
      <div className="character__details">
        <h2 className="character__details-name">{name}</h2>
        {favorite ? (
          <SVGStar
            onClick={() => handleDeleteFavorite(id)}
            className="character__details-star favorite"
          />
        ) : (
          <SVGStar
            onClick={() => handleSetFavorite(id)}
            className="character__details-star noFavorite"
          />
        )}
        <p className="character__details__item">
          <span className="character__details__item-type">Status: </span>
          {status}
        </p>
        <p className="character__details__item">
          <span className="character__details__item-type">Species: </span>
          {species}
        </p>
        <p className="character__details__item">
          <span className="character__details__item-type">Gender: </span>
          {gender}
        </p>
        <p onClick={handleOpenModal} className="character__details__item-more">
          More details...
        </p>
      </div>
      <Modal isOpen={modal} onClose={handleCloseModal}>
        <CharacterDetail data={data} />
      </Modal>
    </div>
  );
};

// Component Documentation
Character.propTypes = {
  data: propTypes.object.isRequired,
};

// react-redux native with HOC
const mapStateToProps = (state) => {
  return {
    favoriteCharacters: state.favoriteCharacters,
  };
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

// HOC
export default connect(mapStateToProps, mapDispatchToProps)(Character);
// Se pasa null si no hay acciones que pasar ...

// Alias component in the browser
Character.displayName = 'Character Component';
