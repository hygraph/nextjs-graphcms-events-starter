import React from 'react';
import Image from 'graphcms-image';

// filter on __typename

function Slot({ id, start, end, talk }) {
  if (!talk) return null;

  const formattedStart = new Intl.DateTimeFormat('en-GB', {
    hour: 'numeric',
    minute: 'numeric',
  }).format(new Date(start));

  return (
    <div
      key={id}
      className="py-3 md:py-6 flex flex-col md:flex-row items-center"
    >
      <div className="border-b border-gray-500 md:border-transparent md:w-1/4 py-3 md:py-0 mb-6 md:mb-0 md:mr-6 md:text-right">
        {formattedStart}
      </div>

      <div className="flex items-center">
        <div className="w-16 mr-6">
          <Image
            image={talk.speaker.photo}
            maxWidth={150}
            className="w-16 h-16 rounded-full"
          />
        </div>

        <div className="flex-grow">
          <p className="text-gray-800">
            <strong>{talk.title}</strong>
          </p>
          <p className="text-gray-500">{talk.speaker.name}</p>
        </div>
      </div>
    </div>
  );
}

export default Slot;
