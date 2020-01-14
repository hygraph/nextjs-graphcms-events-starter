import React from 'react';

import Slot from './Slot';
import SlotTime from './SlotTime';

function Schedule({ tracks }) {
  const timeSlots = tracks.reduce((collector, currentTrack) => {
    currentTrack.timeSlots.forEach(timeSlot => {
      const key = timeSlot.start;
      if (collector[key]) {
        collector[key] = [...collector[key], timeSlot];
      } else {
        collector[key] = [timeSlot];
      }
    });

    return collector;
  }, {});

  return (
    <div className="container mx-auto px-6 py-12 lg:py-20">
      <div className="mb-3 md:mb-6">
        <h2 className="text-purple-800 text-4xl md:text-6xl font-bold">
          Schedule
        </h2>
        <p className="text-gray-800">
          <strong>Tracks</strong>
        </p>
        <div className="flex flex-wrap">
          {tracks.map(({ title }, i) => (
            <div className="w-full md:w-1/2" key={i}>
              <h4
                className={`font-normal text-2xl text-gray-800 ${
                  i > 0 ? 'bg-gray-200 md:bg-white' : ''
                }`}
              >
                {title}
              </h4>
            </div>
          ))}
        </div>
      </div>
      <section className="w-full">
        {Object.keys(timeSlots).map((timeSlot, timeSlotNumber) => {
          const concurrentTalks = timeSlots[timeSlot];
          const singleTrack = concurrentTalks.length === 1;
          const width = singleTrack
            ? `w-full`
            : `w-full md:w-1/${concurrentTalks.length}`;

          return (
            <div
              className="flex flex-wrap md:flex-no-wrap w-full"
              key={timeSlotNumber}
            >
              <SlotTime date={timeSlot} />

              <div className="flex flex-wrap flex-grow">
                {timeSlots[timeSlot].map((session, index) => {
                  const borderRight =
                    !singleTrack && index === 0 ? 'border-0 md:border-r' : '';
                  return (
                    <div
                      key={index}
                      className={`${width} h-32 border-b border-gray-400 ${borderRight} ${
                        index > 0 ? 'bg-gray-200 md:bg-white' : ''
                      }`}
                    >
                      <div className="py-3">
                        <Slot {...session} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Schedule;
