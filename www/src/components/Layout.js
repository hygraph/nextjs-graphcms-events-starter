import React from 'react';

import '../main.css';

function Layout({ children }) {
  return <div className="container mx-auto px-6">{children}</div>;
}

export default Layout;
