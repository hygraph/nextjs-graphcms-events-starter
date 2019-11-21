import React from 'react';

function Sponsor() {
  return (
    <div className="w-full md:w-1/3 px-6">
      <div className="bg-gray-300 p-6 rounded-lg flex items-center justify-center w-full">
        <div className="bg-gray-900 h-64">Speaker photo</div>

        <div className="text-gray-500 flex items-center justify-between">
          <h4 className="text-bold text-2xl">Speaker Name</h4>
          <span className="flex items-center">Social icons</span>
        </div>
        <p className="text-gray-500">Speaker headline</p>
      </div>
    </div>
  );
}

export default Sponsor;
