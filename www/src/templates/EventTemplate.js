import React from 'react';
import Image from 'graphcms-image';

function PageTemplate({ pageContext: { event, tracks, sponsors, venue } }) {
  return (
    <div>
      <h3>
        {/* {new Intl.DateTimeFormat('en-GB', {
          hour: 'numeric',
          minute: 'numeric',
        }).format(new Date(event.starts))} */}
      </h3>

      <h3>Tracks</h3>
      <div>
        {tracks.map(({ timeSlots, mc, ...track }) => (
          <div key={track.id}>
            <h4>{track.title}</h4>
            <p>
              MCs:{' '}
              {mc.map(m => (
                <div>
                  <Image
                    image={m.photo}
                    maxWidth={100}
                    style={{ width: '50px' }}
                  />{' '}
                  {m.name}
                </div>
              ))}
            </p>

            <hr />

            {timeSlots.map(slot => {
              if (!slot) return null;

              return (
                <li>
                  {/* <Image
                  image={slot.talk.speaker.photo}
                  maxWidth={100}
                  style={{ width: '50px' }}
                /> */}
                  {/* {slot.talk.title} by {slot.talk.speaker.name} @{' '} */}
                  <pre>{JSON.stringify(slot, null, 2)}</pre>
                  {/* {new Intl.DateTimeFormat('en-GB', {
                  hour: 'numeric',
                  minute: 'numeric',
                }).format(new Date(slot.start))} */}
                </li>
              );
            })}
          </div>
        ))}
      </div>

      <h2>Event</h2>
      <pre>{JSON.stringify(event, null, 2)}</pre>

      <h2>Tracks</h2>
      <pre>{JSON.stringify(tracks, null, 2)}</pre>

      <h2>Sponsors</h2>
      <pre>{JSON.stringify(sponsors, null, 2)}</pre>

      <h2>Venue</h2>
      <pre>{JSON.stringify(venue, null, 2)}</pre>
    </div>
  );
}

export default PageTemplate;
