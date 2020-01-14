import React from 'react';
import Image from 'graphcms-image';

function Sponsor({ name, url, logo, ...props }, index) {
  return (
    <div className="w-1/2 md:w-1/6 px-6" key={index}>
      <a href={url} className="w-full h-full block">
        {logo && (
          <Image
            alt={name}
            image={logo}
            maxWidth={150}
            className=""
            outerWrapperClassName="w-full h-full"
          />
        )}
      </a>
    </div>
  );
}

export default Sponsor;
