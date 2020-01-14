import React from 'react';
import { Link } from 'gatsby';
import Sponsors from '../components/Sponsors';

const Wrapper = props => (
  <section className="container mx-auto px-6 py-12 lg:py-20" {...props} />
);

const HomeTemplate = ({
  pageContext: { futureEvents, pastEvents, globalSponsors },
}) => {
  const next = futureEvents[0];
  return (
    <React.Fragment>
    <section className="bg-cover bg-purple-800 pb-32 pt-8"  style={{
      backgroundImage: `linear-gradient(rgba(107, 70, 193,0.85), rgba(107, 70, 193,0.5)), url(${next.image.url})`,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 30% 85%, 30% 100%, 0% 85%)"
    }}>
      <Wrapper>
        <Link to={next.slug}>
          <article>
              <div className="z-10 relative px-4 self-center w-2/3">
              <p className="text-white inline-block font-bold text-sm">Up Next</p>
                <h1 className="text-6xl font-bold leading-tight text-white">{next.title}</h1>
                <p className="text-xl font-bold pb-3 text-purple-200">{next.venue && next.venue.name}</p>
              </div>
            <section className="flex flex-wrap">
              <div
                className="w-full md:w-1/2 text-white bg-gray-900 p-6"
                dangerouslySetInnerHTML={{ __html: next.description.html }}
              />
            </section>
          </article>
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
                <Link className="w-full md:w-1/2 px-2 mb-10" to={event.slug}>
                <article key={index}>
                  <img src={event.image ? event.image.url : ""} />
                  <h1 className="font-bold text-gray-800 text-xl mb-2">{event.title}</h1>
                  <p>{event.venue ? event.venue.name : 'TBD'}</p>
                </article>
                </Link>
              );
            })}
        </section>
      </Wrapper>
      <Sponsors sponsors={globalSponsors} />
    </React.Fragment>
  );
};

export default HomeTemplate;
