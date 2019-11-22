import React from 'react';
import Image from 'graphcms-image';

function Sponsor({ logo, ...props }) {
  return (
    <div className="w-full md:w-1/3 px-6">
      <div className="bg-gray-300 p-6 rounded-lg flex items-center justify-center w-full">
        {/* <Image image={logo} maxWidth={150} className="h-20" /> */}
        Sponsor Logo
      </div>
    </div>
  );
}

export default Sponsor;
