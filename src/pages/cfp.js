import React from 'react';
import Link from 'next/link';

const Wrapper = props => (
  <section className="container mx-auto px-6 py-12 lg:py-20" {...props} />
);

const CFP = () => {
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
          <form class="px-8 pb-8 mb-4">
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="first_last"
              >
                Name
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="first_last"
                type="text"
                placeholder="First Last"
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                E-Mail
              </label>
              <input
                class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="first_last@domain.com"
              />
            </div>
            <div class="flex items-center justify-between">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
              <a
                class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default CFP;

/*
$talkTitle: String!,
    $talkAbstract: RichTextAST,
    $speakerName: String!,
    $speakerHeadline: String!,
    $speakerEmail: String!,
    $speakerNotes: String
*/
