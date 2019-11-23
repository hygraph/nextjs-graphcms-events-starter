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
  console.log(next);
  return (
    <React.Fragment>
      <Wrapper>
        <Link to={next.slug}>
          <article>
            <figure className="relative h-64 overflow-hidden flex">
              <div className="z-10 relative px-4 w-full self-center">
                <h1 className="text-6xl">{next.title}</h1>
                <p className="text-xl">{next.venue && next.venue.name}</p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1526043446186-2ff4028f978b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="The Bread Dog"
                className="absolute top-0 w-full"
              />
            </figure>
            <section className="flex flex-wrap">
              <p
                className="w-full md:w-1/2"
                dangerouslySetInnerHTML={{ __html: next.description.html }}
              />
              <aside>
                <section>
                  <div>Stat</div>
                  <div>Value</div>
                </section>
              </aside>
            </section>
          </article>
        </Link>
      </Wrapper>
      <Wrapper>
        <h2 className="text-gray-800 text-4xl md:text-6xl font-bold">
          Upcoming Events
        </h2>
        <section className="flex flex-wrap overflow-hidden -mx-2">
          {futureEvents &&
            futureEvents.map((event, index) => {
              return (
                <article className="w-full md:w-1/2 px-2 mb-10" key={index}>
                  <img src="https://images.unsplash.com/photo-1526043446186-2ff4028f978b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                  <h1 className="text-xl mb-2">{event.title}</h1>
                  <p>{event.venue ? event.venue.name : 'TBD'}</p>
                </article>
              );
            })}
        </section>
      </Wrapper>
      <Sponsors sponsors={globalSponsors} />
    </React.Fragment>
  );
};

export default HomeTemplate;
