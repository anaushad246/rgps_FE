import React from 'react';

const TrustEvents = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Events</h1>
      <div className="upcoming-events mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="event-card bg-white p-4 shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-2">Education Workshop</h3>
            <p className="text-gray-600 mb-2">Date: March 12, 2023</p>
            <p className="text-gray-600 mb-2">Time: 2:00 PM - 4:00 PM</p>
            <p className="text-gray-600 mb-4">Description: This workshop will focus on education and welfare.</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Register Now
            </button>
          </div>
          <div className="event-card bg-white p-4 shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-2">Charity Run</h3>
            <p className="text-gray-600 mb-2">Date: April 15, 2023</p>
            <p className="text-gray-600 mb-2">Time: 8:00 AM - 10:00 AM</p>
            <p className="text-gray-600 mb-4">Description: Join us for a charity run to support education and welfare.</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Register Now
            </button>
          </div>
        </div>
      </div>
      <div className="past-events">
        <h2 className="text-2xl font-bold mb-4 text-center">Past Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="event-card bg-white p-4 shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-2">Education Conference</h3>
            <p className="text-gray-600 mb-2">Date: January 20, 2023</p>
            <div className="event-photos flex justify-center mb-4">
              <img src="photo1.jpg" alt="Event Photo" className="w-1/2 mr-2 rounded-lg" />
              <img src="photo2.jpg" alt="Event Photo" className="w-1/2 rounded-lg" />
            </div>
            <p className="text-gray-600">Summary: This conference focused on education and welfare.</p>
          </div>
          <div className="event-card bg-white p-4 shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-2">Food Distribution</h3>
            <p className="text-gray-600 mb-2">Date: February 10, 2023</p>
            <div className="event-photos flex justify-center mb-4">
              <img src="photo3.jpg" alt="Event Photo" className="w-1/2 mr-2 rounded-lg" />
              <img src="photo4.jpg" alt="Event Photo" className="w-1/2 rounded-lg" />
            </div>
            <p className="text-gray-600">Summary: We distributed food to those in need.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustEvents;
