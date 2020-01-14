import React from 'react';
import Image from 'graphcms-image';

import Speakers from '../components/Speakers';
import Venue from '../components/Venue';
import Schedule from '../components/Schedule';
import Sponsors from '../components/Sponsors';

function PageTemplate({
  pageContext: { event, speakers, venue, sponsors, tracks },
}) {
  console.log(event);
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
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 leading-tight">
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

export default PageTemplate;
