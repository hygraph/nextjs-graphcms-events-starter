import React from 'react';
import Link from 'next/link';
import Sponsors from '../components/Sponsors';

const { GraphQLClient } = require('graphql-request');

const Wrapper = (props) => (
  <section className="container px-6 py-12 mx-auto lg:py-20" {...props} />
);

const Home = ({ futureEvents, pastEvents, globalSponsors }) => {
  const next = pastEvents[0];
  return (
    <React.Fragment>
      <section
        className="pt-8 pb-32 bg-purple-800 bg-cover"
        style={{
          backgroundImage: `linear-gradient(rgba(107, 70, 193,0.55), rgba(107, 70, 193,0.5)), url(${next.image.url})`,
          clipPath:
            'polygon(0% 0%, 100% 0%, 100% 85%, 30% 85%, 30% 100%, 0% 85%)',
        }}
      >
        <Wrapper>
          <Link href={next.slug}>
            <a>
              <article>
                <div className="relative z-10 self-center w-2/3 px-4 mb-8">
                  <p className="inline-block mb-4 text-sm font-bold text-white">
                    Up Next
                  </p>
                  <h1 className="mb-4 text-6xl font-bold leading-tight text-white">
                    {next.title}
                  </h1>
                  <p className="pb-3 text-xl font-bold text-purple-200">
                    {next.venue && next.venue.name}
                  </p>
                </div>
                <section className="flex flex-wrap">
                  <div
                    className="w-full p-6 text-white bg-gray-900 md:w-1/2"
                    dangerouslySetInnerHTML={{ __html: next.description.html }}
                  />
                </section>
              </article>
            </a>
          </Link>
        </Wrapper>
      </section>
      <Wrapper>
        <h2 className="mb-6 text-4xl font-bold text-purple-800 md:text-6xl">
          Upcoming Events
        </h2>
        <section className="flex flex-wrap -mx-2 overflow-hidden">
          {futureEvents &&
            futureEvents.slice(1).map((event, index) => {
              return (
                <Link href="/[event-slug].js" as={event.slug} key={index}>
                  <a className="w-full px-2 mb-10 md:w-1/2">
                    <article>
                      <div
                        className="relative h-56 mb-4"
                        style={{
                          backgroundImage: `linear-gradient(rgba(107, 70, 193,0.85), rgba(107, 70, 193,0.5)), url(${
                            event.image ? event.image?.url : ''
                          })`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'bottom center',
                        }}
                      ></div>
                      <h1 className="mb-2 text-xl font-bold text-gray-800">
                        {event.title}
                      </h1>
                      <p className="">
                        {' '}
                        {event.venue ? event.venue.name : 'TBD'}
                      </p>
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

Home.getInitialProps = async (ctx) => {
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

    events.forEach((payload) => {
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
