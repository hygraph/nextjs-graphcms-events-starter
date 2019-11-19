import React from 'react';

function Venue(props) {
  return (
    <div className="bg-gray-100 py-6 md:py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-3 md:mb-6">
          <h3 className="font-bold text-gray-800 text-xl md:text-3xl">Venue</h3>
        </div>

        <pre>{JSON.stringify(props, null, 2)}</pre>
      </div>
    </div>
  );
}

export default Venue;
