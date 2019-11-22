import React from 'react';
import { Link } from 'gatsby';

import Sponsor from './Sponsor';

function Sponsors({ sponsors }) {
  return (
    <div className="container mx-auto px-6 py-12 lg:py-20">
      <div className="mb-6 md:mb-12 lg:mb-20 flex items-center justify-between">
        <h2 className="text-gray-800 text-4xl md:text-6xl font-bold">
          Sponsors
        </h2>

        <span className="inline-flex items-center">
          <span className="text-gray-800 mr-3">Could this be you?</span>
          <Link
            to="/sponsor-us"
            className="bg-gray-800 text-white px-2 py-1 rounded hover:bg-purple-800"
          >
            Contact us
          </Link>
        </span>
      </div>

      {sponsors.length ? (
        <div className="flex flex-wrap -mx-6">{sponsors.map(Sponsor)}</div>
      ) : (
        <p>Sponsors will be announced soon.</p>
      )}
    </div>
  );
}

export default Sponsors;
