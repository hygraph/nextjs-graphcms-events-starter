import React from 'react';
import Image from 'graphcms-image';

function Sponsor({ name, url, logo, ...props }) {
  return (
    <div className="w-full md:w-1/3 px-6">
    <a href={url}>
    <div>
        {logo && <Image alt={name} image={logo} maxWidth={150} className="object-contain" />}
      </div>
      </a>  
    </div>
  );
}

export default Sponsor;
