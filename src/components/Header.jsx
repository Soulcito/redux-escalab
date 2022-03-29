import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteFavorite, setFavorite, setSection } from '../actions';
import '../assets/styles/components/Header.scss';
import Logo from '../assets/static/images/logo.png';

const Header = () => {
  const sectionActive = useSelector((state) => state.sectionActive);
  const dispatch = useDispatch();

  const handleSetSection = (section) => {
    dispatch(setSection(section));
  };

  return (
    <header className="header">
      <figure>
        <img
          className="header__logo-img"
          src={Logo}
          alt="Rick and Morty Logo"
        />
      </figure>
      <nav>
        <ul className="header__nav__options">
          <li
            onClick={() => handleSetSection('Characters')}
            className={`header__nav__options-item ${
              sectionActive === 'Characters' ? 'active' : ''
            }`}
          >
            <Link to="/">Characters</Link>
          </li>
          <li
            onClick={() => handleSetSection('Favorites')}
            className={`header__nav__options-item ${
              sectionActive === 'Favorites' ? 'active' : ''
            }`}
          >
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
