import React from 'react';

import '../main.css';

import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <React.Fragment>
      <Header />

      <main>{children}</main>

      <Footer />
    </React.Fragment>
  );
}

export default Layout;
