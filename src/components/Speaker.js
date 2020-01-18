import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

function Speaker({ name, headline, photo }, index) {
  return (
    <div className="w-full md:w-1/4 px-6 mb-6" key={index}>
      <div className="rounded-lg bg-purple-200 w-full overflow-hidden">
        <img src={photo.url} />
      </div>

      <div className="text-gray-500 flex items-center justify-between pt-3">
        <h4 className="text-gray-800 text-bold text-1xl">{name}</h4>
        <span className="flex items-center">
          <a href={`/`} className="text-gray-900 hover:text-purple-800 text-xl">
            <FontAwesomeIcon icon={faTwitter} className="mr-2 fill-current" />
          </a>
          <a href={`/`} className="text-gray-900 hover:text-purple-800 text-xl">
            <FontAwesomeIcon icon={faGithub} className="fill-current" />
          </a>
        </span>
      </div>
      <p className="text-gray-500">{headline}</p>
    </div>
  );
}

export default Speaker;
