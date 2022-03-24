import React, { useEffect, useState } from 'react';
import CharacterDetail from './CharacterDetail';
import Modal from './Modal';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { setFavorite, deleteFavorite } from '../actions';
import '../assets/styles/components/Character.scss';
import { ReactComponent as SVGStar } from '../assets/static/icons/star.svg';

const Character = () => {
  const [modal, setModal] = useState(false);
  const [favorite, setFavorite] = useState(false);

  return <div>Character</div>;
};

export default Character;
