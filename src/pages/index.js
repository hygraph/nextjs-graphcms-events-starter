import React from 'react';
import Link from 'next/link';
import Sponsors from '../components/Sponsors';

const { GraphQLClient } = require('graphql-request');

const Wrapper = props => (
  <section className="container mx-auto px-6 py-12 lg:py-20" {...props} />
);

const Home = ({ futureEvents, pastEvents, globalSponsors }) => {
  const next = futureEvents[0];
  return (
    <React.Fragment>
      <section
        className="bg-cover bg-purple-800 pb-32 pt-8"
        style={{
          backgroundImage: `linear-gradient(rgba(107, 70, 193,0.85), rgba(107, 70, 193,0.5)), url(${next.image.url})`,
          clipPath:
            'polygon(0% 0%, 100% 0%, 100% 85%, 30% 85%, 30% 100%, 0% 85%)',
        }}
      >
        <Wrapper>
          <Link href={next.slug}>
            <a>
              <article>
                <div className="z-10 relative px-4 self-center w-2/3">
                  <p className="text-white inline-block font-bold text-sm">
                    Up Next
                  </p>
                  <h1 className="text-6xl font-bold leading-tight text-white">
                    {next.title}
                  </h1>
                  <p className="text-xl font-bold pb-3 text-purple-200">
                    {next.venue && next.venue.name}
                  </p>
                </div>
                <section className="flex flex-wrap">
                  <div
                    className="w-full md:w-1/2 text-white bg-gray-900 p-6"
                    dangerouslySetInnerHTML={{ __html: next.description.html }}
                  />
                </section>
              </article>
            </a>
          </Link>
        </Wrapper>
      </section>
      <Wrapper>
        <h2 className="text-purple-800 text-4xl md:text-6xl font-bold mb-6">
          Upcoming Events
        </h2>
        <section className="flex flex-wrap overflow-hidden -mx-2">
          {futureEvents &&
            futureEvents.slice(1).map((event, index) => {
              return (
                <Link href="/[event-slug].js" as={event.slug} key={index}>
                  <a className="w-full md:w-1/2 px-2 mb-10">
                    <article>
                      <img src={event.image ? event.image.url : ''} />
                      <h1 className="font-bold text-gray-800 text-xl mb-2">
                        {event.title}
                      </h1>
                      <p>{event.venue ? event.venue.name : 'TBD'}</p>
                    </article>
                  </a>
                </Link>
              );
            })}
        </section>
      </Wrapper>
      <Sponsors sponsors={globalSponsors} />
    </React.Fragment>
  );
};

Home.getInitialProps = async ctx => {
  const query = `
  fragment assetInfo on Asset {
    handle
    width
    height
    url
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
    venue {
      ...venueInfo
    }
  }

  query {
      globalSponsors: sponsors(where: {
        type: GLOBAL
      }) {
        name
        url
        logo {
          ...assetInfo
        }
      }
      events {
        ...EventInfo
      }
  }
`;

  const graphQLClient = new GraphQLClient(`${process.env.URL}/api/graphql`);

  const request = await graphQLClient.request(query);

  const { events, globalSponsors } = request;

  if (events) {
    let pastEvents = [];
    let futureEvents = [];

    const now = new Date();

    const sortByStart = (a, b) => {
      if (a.start < b.start) return -1;
      if (a.start > b.start) return 1;
      if (a.start === b.start) return 0;
    };

    events.forEach(payload => {
      const { tracks, sponsors, venue, ...event } = payload;

      if (new Date(event.start) < now) pastEvents.push(payload);
      if (new Date(event.start) > now) futureEvents.push(payload);
    });

    pastEvents = pastEvents ? pastEvents.sort(sortByStart) : [];
    futureEvents = futureEvents ? futureEvents.sort(sortByStart) : [];

    return { futureEvents, pastEvents, globalSponsors };
  }
};

export default Home;
