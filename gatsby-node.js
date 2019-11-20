require('dotenv').config();

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const {
    data: {
      cms: { events },
    },
  } = await graphql(`
    fragment assetInfo on GraphCMS_Asset {
      handle
      width
      height
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
      }
    }

    fragment EventInfo on GraphCMS_Event {
      id
      title
      slug
      start
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
        events {
          ...EventInfo
        }
      }
    }
  `);

  if (events) {

    const pastEvents = []
    const futureEvents = []

    const now = new Date().toISOString();

    const sortByStart = (a,b) => {
      if (a.start < b.start) return -1
      if (a.start > b.start) return 1
      if (a.start === b.start) return 0
    }
    
    events.forEach(({ tracks, sponsors, venue, ...event }) => {
      
      if (event.start < now) pastEvents.push(event)
      if (event.start > now) futureEvents.push(event)

      return createPage({
        path: `/${event.slug}`,
        component: require.resolve('./src/templates/EventTemplate.js'),
        context: {
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
      }
    })
  }
};
