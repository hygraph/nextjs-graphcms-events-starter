import React from 'react';

import Slot from './Slot';

function Track({ id, title, timeSlots, mc }) {
  return (
    <div key={id}>
      <h4 className="text-xl mb-3">{title}</h4>

      <p className="text-gray-500 text-sm">Kickoff time</p>

      <div className="py-3">{timeSlots.map(Slot)}</div>
    </div>
  );
}

export default Track;
