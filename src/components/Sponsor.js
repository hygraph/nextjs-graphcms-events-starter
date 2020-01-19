import React from 'react';
import Image from 'graphcms-image';

function Sponsor({ name, url, logo, ...props }, index) {
  return (
    <a key={index} href={url} className="even:mx-8">
      {logo && <img className="h-32" src={logo.url} />}
    </a>
  );
}

export default Sponsor;
