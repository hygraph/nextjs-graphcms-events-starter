import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const Wrapper = props => (
  <section className="max-w-4xl mx-auto px-6" {...props} />
);

const Home = () => {
  const {
    cms: { events },
  } = useStaticQuery(
    graphql`
      query EventsQuery {
        cms {
          events(orderBy: start_ASC) {
            start
            title
            slug
            description {
              html
            }
            venue {
              name
              location {
                latitude
                longitude
              }
            }
          }
        }
      }
    `
  );
  const now = new Date().toISOString();
  const next = events.find(event => event.start > now);

  return (
    <React.Fragment>
      <Wrapper>
        <p className="text-2xl mb-4">Up Next</p>
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
    </React.Fragment>
  );
};

export default Home;
