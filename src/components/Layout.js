import React from 'react';

import '../main.css';

import Header from './Header';
import Footer from './Footer';

function Layout({ location, children }) {
  return (
    <React.Fragment>
      <Header location={location} />

      <main>{children}</main>

      <Footer />
    </React.Fragment>
  );
}

export default Layout;
