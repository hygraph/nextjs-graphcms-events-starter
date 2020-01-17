import React from 'react';

import '../main.css';

import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
