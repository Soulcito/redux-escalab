import React from 'react';
import '../assets/styles/components/Error.scss';
import errorImage from '../assets/static/images/error.png';

const Error = () => (
  <div className="error">
    <img src={errorImage} alt="Morty scared" className="error-img" />
    <span className="error-text">Sorry, an error has ocurred.</span>
  </div>
);

export default Error;
