import React from 'react';
import Link from 'next/link';

import Speaker from './Speaker';

function Speakers({ speakers }) {
  return (
    <div className="container mx-auto px-6 py-12 lg:py-20">
      <div className="mb-6 md:mb-12 lg:mb-20">
        <h2 className="text-purple-800 text-4xl md:text-6xl font-bold">
          Speakers
        </h2>
      </div>

      {speakers.length ? (
        <div className="flex flex-wrap -mx-6">{speakers.map(Speaker)}</div>
      ) : (
        <p>Speakers will be announced soon.</p>
      )}

      <div className="inline-flex items-center mt-6">
        <Link href="/cfp">
          <a className="bg-purple-600 text-white px-4 py-2 text-lg rounded hover:bg-purple-800">
            Apply to Speak!
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Speakers;
