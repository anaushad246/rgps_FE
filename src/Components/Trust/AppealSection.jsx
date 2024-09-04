// AppealSection.js
import React from 'react';
import { Link } from 'react-router-dom';

const AppealSection = () => {
  return (
    <div className="bg-[#f7f7f7] py-4 px-2 flex flex-col justify-center items-center w-[100vw]">
      <h2 className="text-3xl font-bold p-4">Support Our Cause</h2>
      <p className="text-lg text-center mb-8">
        Your donation can help us make a difference in the lives of those in need.
      </p>
      <Link to="/trustDonation"><button className="bg-[#005467] text-[#CCCCCC] font-bold py-2 px-4 rounded">
        Donate Now
      </button></Link>
    </div>
  );
};

export default AppealSection;