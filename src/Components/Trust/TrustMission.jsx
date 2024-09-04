import React from 'react';

const TrustMission = () => {
  return (
    <div className="bg-[#005467] text-[#CCCCCC] py-10 px-4 flex flex-col items-center">
      <h2 className="text-4xl font-extrabold mb-6 text-center">Our Programs</h2>
      <p className="text-lg max-w-2xl text-center mb-10">
        Our mission is to make a positive impact through various programs aimed at improving the lives of individuals and communities. Here’s a glimpse of our initiatives.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <img
          src="pdf1_page-0001.jpg"
          alt="Program 1"
          className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105"
        />
        <img
          src="pdf1_page-0002.jpg"
          alt="Program 2"
          className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105"
        />
        <img
          src="pdf1_page-0003.jpg"
          alt="Program 3"
          className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105"
        />
        <img
          src="pdf1_page-0004.jpg"
          alt="Program 4"
          className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105"
        />
      </div>
    </div>
  );
};

export default TrustMission;
