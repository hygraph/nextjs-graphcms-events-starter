import React from 'react';
import Image from 'graphcms-image';

// filter on __typename

function Slot({ id, start, end, talk, sessionBreak }) {
  return (
    <div key={id} className="py-3 md:py-6 px-6 flex flex-col md:flex-row ">
      {talk ? (
        <div className="flex items-center">
          <div className="w-16 mr-6">
            {talk.speaker.photo && (
              <Image
                image={talk.speaker.photo}
                maxWidth={150}
                className="w-16 h-16 rounded-full"
              />
            )}
          </div>

          <div className="flex-grow">
            <p className="text-gray-800 leading-tight">
              <strong>{talk.title}</strong>
            </p>
            <p className="text-gray-500">{talk.speaker.name}</p>
          </div>
        </div>
      ) : sessionBreak ? (
        <div className="flex items-center">
          <div className="w-16 mr-6">
            <p>break</p>
          </div>

          <div className="flex-grow">
            <p className="text-gray-800 leading-tight">
              <strong>{sessionBreak.title}</strong>
            </p>
          </div>
        </div>
      ) : (
        <div className="flex items-center">
          <div className="flex-grow">
            <p className="text-gray-800">
              <strong>TBD</strong>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Slot;
