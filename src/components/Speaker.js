import React from 'react';
import Image from 'graphcms-image';

function Speaker({ name, headline, photo }, index) {
  return (
    <div className="w-full md:w-1/4 px-6 mb-6" key={index}>
      <div className="rounded-lg bg-gray-900 w-full overflow-hidden">
        <Image image={photo} maxWidth={150} />
      </div>

      <div className="text-gray-500 flex items-center justify-between pt-3">
        <h4 className="text-gray-800 text-bold text-1xl">{name}</h4>
        <span className="flex items-center">Social icons</span>
      </div>
      <p className="text-gray-500">{headline}</p>
    </div>
  );
}

export default Speaker;
