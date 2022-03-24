import React from 'react';
import '../assets/styles/components/Footer.scss';

const NAME = `Felipe Hinojosa`;

const Footer = () => (
  <footer className="footer">
    <div className="footer__made">
      Made with&nbsp;
      <span role="img" aria-label="heart">
        💜
      </span>
      &nbsp;by
      <a
        href="https://www.linkedin.com/in/felipehinojosafernandez/"
        rel="noopener noreferrer"
        target="_blank"
        className="logo"
      >
        <span className="logo-img">&lt;&gt;</span>
        &nbsp;
        <span>{`${NAME} `}😎</span>
      </a>
    </div>
    <div className="footer__location">
      CH,
      <span>Santiago</span>, 2022
    </div>
  </footer>
);

export default Footer;
