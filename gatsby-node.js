require('dotenv').config();

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const {
    data: {
      cms: { events, globalSponsors },
    },
  } = await graphql(`
    fragment assetInfo on GraphCMS_Asset {
      handle
      width
      height
      url
    }

    fragment venueInfo on GraphCMS_Venue {
      id
      name
      location {
        lat: latitude
        lng: longitude
      }
    }

    fragment speakerInfo on GraphCMS_Speaker {
      name
      headline
      photo {
        ...assetInfo
      }
    }

    fragment talkInfo on GraphCMS_Talk {
      id
      title
      speaker {
        ...speakerInfo
      }
    }

    fragment trackInfo on GraphCMS_Track {
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

    fragment EventInfo on GraphCMS_Event {
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
      cms {
        globalSponsors: sponsors(where: {
          type: GLOBAL
        }) {
          name
          url
        }
        events {
          ...EventInfo
        }
      }
    }
  `);

  if (events) {

    const pastEvents = []
    const futureEvents = []

    const now = new Date()

    const sortByStart = (a,b) => {
      if (a.start < b.start) return -1
      if (a.start > b.start) return 1
      if (a.start === b.start) return 0
    }

    const sortBySpeaker = (a,b) => {
      if (a.name < b.name) return -1
      if (a.name > b.name) return 1
      if (a.name === b.name) return 0
    }
    

    events.forEach(payload => {
      const { tracks, sponsors, venue, ...event } = payload
      
      if (new Date(event.start) < now) pastEvents.push(payload)
      if (new Date(event.start) > now) futureEvents.push(payload)

      const speakers = tracks.reduce((collector, currentTrack) => {
        return [
          ...collector,
          ...currentTrack.timeSlots
          .map(timeSlot => timeSlot.talk
          ? timeSlot.talk.speaker
          : null)]
          .filter(Boolean)
          .sort(sortBySpeaker)
          .reduce((collector, current) => {
            if (collector.length) {
              if (current.name === collector[collector.length - 1].name) {
                return collector
              } else {
                return [...collector, current]
              }
            } else {
              return [...collector, current]
            }
            
          },[])
      },[])

      return createPage({
        path: `/${event.slug}`,
        component: require.resolve('./src/templates/EventTemplate.js'),
        context: {
          speakers,
          tracks,
          sponsors,
          venue,
          event,
        },
      })
      }
    );

    createPage({
      path: '/',
      component: require.resolve('./src/templates/HomeTemplate.js'),
      context: {
        pastEvents: pastEvents ? pastEvents.sort(sortByStart) : [],
        futureEvents: futureEvents ? futureEvents.sort(sortByStart) : [],
        globalSponsors
      }
    })
  }
};
