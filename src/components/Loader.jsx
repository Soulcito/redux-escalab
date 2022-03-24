import React from 'react';
import '../assets/styles/components/Loader.scss';
import portal from '../assets/static/images/portal.gif';

const Loader = () => (
  <div className="loader">
    <img src={portal} alt="Portal loader" />
    <span className="loader-text">Loading...</span>
  </div>
);

export default Loader;
