import React from 'react';

function Footer() {
  return (
    <div className="border-t text-white bg-gray-900 py-12 pt-20" style={{
      clipPath: "polygon(0% 30%, 100% 0%, 100% 100%, 0% 100%)"
    }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-wrap -mx-3">
          <div className="md:w-1/4 px-3">Some links</div>
          <div className="md:w-1/4 px-3">Some links</div>
          <div className="md:w-1/4 px-3">Some links</div>
          <div className="md:w-1/4 px-3">Some links</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
