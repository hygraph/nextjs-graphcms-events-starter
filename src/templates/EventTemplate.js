import React from 'react';
import Image from 'graphcms-image';

import Speakers from '../components/Speakers';
import Venue from '../components/Venue';
import Schedule from '../components/Schedule';
import Sponsors from '../components/Sponsors';

function PageTemplate({
  pageContext: { event, speakers, venue, sponsors, tracks },
}) {
  return (
    <React.Fragment>
      <section className="container mx-auto px-6 py-12 lg:py-20">
        <h1 className="text-gray-800 text-4xl md:text-6xl font-bold">{event.title}</h1>
      </section>
      <Speakers speakers={speakers} />
      <Schedule tracks={tracks} />
      <Venue {...venue} />
      <Sponsors sponsors={sponsors} />
    </React.Fragment>
  );
}

export default PageTemplate;
