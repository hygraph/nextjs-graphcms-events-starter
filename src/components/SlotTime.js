import React from 'react'
import Slot from './Slot';

const formattedStart = isoDate => new Intl.DateTimeFormat('en-GB', {
    hour: 'numeric',
    minute: 'numeric',
  }).format(new Date(isoDate));


const SlotTime = ({date}) => {

    return (
        <div className="md:border-b border-gray-400 w-full md:w-12 pt-3 font-bold">
            <p className="text-gray-400">{formattedStart(date)}</p>
        </div>
    )
}

export default SlotTime