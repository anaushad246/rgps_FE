import React from 'react';

function Events() {
  return (
    <div className="bg-[#03A9F4] py-8">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Events</h1>
      <h2 className="text-xl text-center mb-8 text-gray-600">Events and happenings at school</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <img
            src="student1.jpg"
            alt="Performing salah"
            className="rounded-md mb-4 object-cover h-48 w-full"
          />
          <p className="text-lg font-semibold text-gray-700">Practice for salah</p>
          <p className="text-sm text-gray-500">2002</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <img
            src="student1.jpg"
            alt="Performing salah"
            className="rounded-md mb-4 object-cover h-48 w-full"
          />
          <p className="text-lg font-semibold text-gray-700">Practice for salah</p>
          <p className="text-sm text-gray-500">2002</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <img
            src="student1.jpg"
            alt="Performing salah"
            className="rounded-md mb-4 object-cover h-48 w-full"
          />
          <p className="text-lg font-semibold text-gray-700">Practice for salah</p>
          <p className="text-sm text-gray-500">2002</p>
        </div>
      </div>
    </div>
  );
}

export default Events;
