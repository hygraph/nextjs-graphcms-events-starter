import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import {
  FormSection,
  TextInput,
  TextArea,
  Error,
} from '../components/FromElements';

const Wrapper = props => (
  <section className="container mx-auto px-6 py-12 lg:py-20" {...props} />
);

const CFP = () => {
  const { handleSubmit, register, errors } = useForm();
  const [response, setResponse] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSubmit = async values => {
    setIsError(false);
    setIsLoading(true);

    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(values),
    };

    const result = await fetch('/api/submit', options);

    if (result.status === 201) {
      const data = await result.json();
      setResponse(data.createTalk);
    } else {
      setIsError(true);
      setIsLoading(false);
    }
  };

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
          {response ? (
            <div>
              <h1 className="text-purple-800 text-4xl font-bold">
                Thanks for submitting, {response.speaker.name}!
              </h1>
              <p>
                A member of our team will review your application and let you
                know if your talk has been chosen.
              </p>
            </div>
          ) : (
            <form className="px-8 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
              <TextInput
                id="speakerName"
                type="text"
                placeholder="First Last"
                label="First & Last Name"
                errors={errors.speakerName}
                ref={register({
                  required: 'Required',
                })}
              />
              <TextInput
                id="speakerHeadline"
                type="text"
                placeholder="Developer @ BigCorp"
                label="Your Role @ Company"
                errors={errors.speakerHeadline}
                ref={register}
              />
              <TextInput
                id="speakerEmail"
                type="email"
                placeholder="first_last@domain.com"
                label="E-Mail"
                errors={errors.speakerEmail}
                ref={register({
                  required: 'Required',
                })}
              />
              <TextInput
                id="talkTitle"
                type="text"
                placeholder="My Awesome Talk Title"
                label="Talk Title"
                errors={errors.talkTitle}
                ref={register({
                  required: 'Required',
                })}
              />
              <TextArea
                id="talkAbstract"
                type="text"
                placeholder="My talk abstract…"
                label="Your talk abstract"
                errors={errors.talkAbstract}
                ref={register({
                  required: 'Required',
                })}
              />
              <TextArea
                id="speakerNotes"
                type="text"
                placeholder="…"
                label="Anything else you'd like to tell us?"
                errors={errors.speakerNotes}
                ref={register}
              />

              <div className="flex items-center justify-between">
                {isLoading ? (
                  <p className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Submitting…
                  </p>
                ) : (
                  <button
                    className="bg-purple-500 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Submit
                  </button>
                )}
                {isError &&
                  Error(
                    "I'm sorry, something went wrong. Please try again in a few minutes."
                  )}
              </div>
            </form>
          )}
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default CFP;
