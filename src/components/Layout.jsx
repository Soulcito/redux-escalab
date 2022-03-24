import React from 'react';
import '../assets/styles/components/Layout.scss';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
