import React from 'react';
import { Link } from 'gatsby';

function Venue({ name, location, city, street, country, postcode }) {
  return (
    <div className="pt-12 lg:pt-20 relative">
      <div className="container mx-auto px-6">
        <div className="mb-6 md:mb-12 lg:mb-20">
          <h2 className="text-purple-800 text-4xl md:text-6xl font-bold mb-6">
            Venue
          </h2>
          <div className="">
            <p className="text-gray-800 mb-3">
              <strong>{name}</strong><br/>
              {street}<br/>
              {postcode} {city},<br/>
              {country}
            </p>

            <Link
              to="/sponsor-us"
              className="bg-gray-800 text-white px-2 py-1 rounded-lg hover:bg-purple-800 inline-flex items-center justify-center"
            >
              <svg
                className="fill-current w-4 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 0l10 10-10 10L0 10 10 0zM6 10v3h2v-3h3v3l4-4-4-4v3H8a2 2 0 0 0-2 2z" />
              </svg>
              Get directions
            </Link>
          </div>
        </div>
      </div>

      <div
        className="px-6 mb-6 md:mb-0 bg-gray-900 bg-cover"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1526043446186-2ff4028f978b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)',
          height: '450px',
          clipPath: "polygon(0% 10%, 100% 0%, 100% 100%, 0% 90%)"
        }}
      ></div>
    </div>
  );
}

export default Venue;
