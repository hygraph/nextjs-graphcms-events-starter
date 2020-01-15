import React, { useState } from 'react';
import Link from 'next/link';

import { FormSection, TextInput, TextArea } from '../components/FromElements';

const Wrapper = props => (
  <section className="container mx-auto px-6 py-12 lg:py-20" {...props} />
);

const CFP = () => {
  const [payload, updatePayload] = useState({});

  function onClick() {
    console.log(payload);
  }

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
              Call For Papers
            </h1>
            <div className="body-copy">
              <p>
                We are always looking for new ideas and voices to be represented
                at our conferences, apply to speak today!
              </p>
            </div>
          </div>
        </div>
      </section>
      <Wrapper>
        <div className="max-w-2xl">
          <form className="px-8 pb-8 mb-4">
            <TextInput
              id="speakerName"
              type="text"
              placeholder="First Last"
              label="First & Last Name"
              errorMessage="This field is Required"
              updatePayload={updatePayload}
              required
            />
            <TextInput
              id="speakerHeadline"
              type="text"
              placeholder="Developer @ BigCorp"
              label="Your Role @ Company"
              updatePayload={updatePayload}
            />
            <TextInput
              id="speakerEmail"
              type="email"
              placeholder="first_last@domain.com"
              label="E-Mail"
              errorMessage="This field is Required"
              updatePayload={updatePayload}
              required
            />
            <TextInput
              id="talkTitle"
              type="text"
              placeholder="My Awesome Talk Title"
              label="Talk Title"
              errorMessage="This field is Required"
              updatePayload={updatePayload}
              required
            />
            <TextArea
              id="talkAbstract"
              type="text"
              placeholder="My talk abstract…"
              label="Your talk abstract"
              errorMessage="This field is Required"
              updatePayload={updatePayload}
              required
            />
            <TextArea
              id="speakerNotes"
              type="text"
              placeholder="…"
              label="Anything else you'd like to tell us?"
              updatePayload={updatePayload}
            />

            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => onClick()}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default CFP;
