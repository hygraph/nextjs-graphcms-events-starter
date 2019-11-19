import React from 'react';

import Track from './Track';

function Schedule({ tracks }) {
  return (
    <div className="py-6 md:py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-3 md:mb-6">
          <h3 className="font-bold text-gray-800 text-xl md:text-3xl">
            Schedule
          </h3>
        </div>

        {tracks.map(Track)}
      </div>
    </div>
  );
}

export default Schedule;
