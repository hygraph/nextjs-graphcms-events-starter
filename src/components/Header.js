import React from 'react';
import {Link} from 'gatsby'

import Logo from './Logo'

function Header() {
  return (
    <div className="py-3 z-10 absolute w-full">
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
        <Logo />
        <Link to="/"><strong className="font-bold text-purple-200">&larr; Back to all events link</strong></Link>
      </div>
    </div>
  );
}

export default Header;
