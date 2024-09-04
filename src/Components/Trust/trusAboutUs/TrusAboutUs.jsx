import React from 'react';

function TrustAboutUs() {
  const trusties = [
    {
      name: 'John Doe',
      role: 'Founder',
      image: 'https://example.com/john-doe.jpg',
      bio: 'John is the founder of our organization.',
    },
    {
      name: 'Jane Smith',
      role: 'Director',
      image: 'https://example.com/jane-smith.jpg',
      bio: 'Jane is the director of our organization.',
    },
    // Add more trusties here...
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg mb-8">Our organization is dedicated to...</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trusties.map((trustie, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={trustie.image}
                alt={trustie.name}
                className="w-32 h-32 rounded-full mb-4"
              />
              <h3 className="font-bold mb-2">{trustie.name}</h3>
              <p className="text-gray-600 mb-4">{trustie.role}</p>
              <p className="text-center">{trustie.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustAboutUs;