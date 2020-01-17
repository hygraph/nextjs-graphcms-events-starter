import React from 'react';

import Speakers from '../components/Speakers';
import Venue from '../components/Venue';
import Schedule from '../components/Schedule';
import Sponsors from '../components/Sponsors';

const { GraphQLClient } = require('graphql-request');

function EventPage({ event, speakers, venue, sponsors, tracks, debug }) {
  return (
    <React.Fragment>
      <section
        className="bg-cover bg-purple-800 pb-32 pt-8"
        style={{
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 66%, 0% 100%)',
        }}
      >
        <div className="container mx-auto px-6 py-12 lg:py-20">
          <div className="w-2/3">
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-8 leading-tight">
              {event.title}
            </h1>
            <div
              className="body-copy"
              dangerouslySetInnerHTML={{ __html: event.description.html }}
            />
          </div>
        </div>
      </section>
      <Speakers speakers={speakers} />
      <Schedule tracks={tracks} />
      <Venue {...venue} image={event.image} />
      <Sponsors sponsors={sponsors} event={event.title} />
    </React.Fragment>
  );
}

EventPage.getInitialProps = async ctx => {
  const query = `
    fragment assetInfo on Asset {
      handle
      width
      height
      url(transformation: { image: { resize: { width: 1000}}})
    }
  
    fragment venueInfo on Venue {
      id
      name
      location {
        lat: latitude
        lng: longitude
      }
      street
      city
      postcode
      country
    }
  
    fragment speakerInfo on Speaker {
      name
      headline
      photo {
        ...assetInfo
      }
    }
  
    fragment talkInfo on Talk {
      id
      title
      speaker {
        ...speakerInfo
      }
    }
  
    fragment trackInfo on Track {
      id
      title
      mc {
        ...speakerInfo
      }
      timeSlots(orderBy: start_ASC) {
        id
        start
        end
        talk {
          ...talkInfo
        }
        sessionBreak: break {
          title
        }
      }
    }
  
    fragment EventInfo on Event {
      id
      title
      slug
      start
      image {
        ...assetInfo
      }
      description {
        html
      }
      tracks {
        ...trackInfo
      }
      sponsors {
        name
        url
        logo {
          ...assetInfo
        }
      }
      venue {
        ...venueInfo
      }
    }
  
    query {
        event(where:{
            slug: "${ctx.asPath.replace('/', '')}"
          }) {
            ...EventInfo
          }
    }
  `;

  const graphQLClient = new GraphQLClient(`${process.env.URL}/api/graphql`);

  const { event } = await graphQLClient.request(query);

  if (event) {
    const { tracks, sponsors, venue, ...rest } = event;

    const sortBySpeaker = (a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      if (a.name === b.name) return 0;
    };

    const speakers = tracks.reduce((collector, currentTrack) => {
      return [
        ...collector,
        ...currentTrack.timeSlots.map(timeSlot =>
          timeSlot.talk ? timeSlot.talk.speaker : null
        ),
      ]
        .filter(Boolean)
        .sort(sortBySpeaker)
        .reduce((collector, current) => {
          if (collector.length) {
            if (current.name === collector[collector.length - 1].name) {
              return collector;
            } else {
              return [...collector, current];
            }
          } else {
            return [...collector, current];
          }
        }, []);
    }, []);

    return {
      sponsors,
      venue,
      speakers,
      tracks,
      event: rest,
      debug: ctx.asPath.replace('/', ''),
    };
  }
};

export default EventPage;
