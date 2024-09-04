// src/Components/HomePage/WelcomeNote.js

import React from 'react';

function WelcomeNote() {
  return (
    <section className="w-full flex justify-center  bg-slate-400">
      <div className="bg-white border border-gray-200 rounded-md shadow-lg p-2 sm:p-0 max-w-xl m-4">
        <img src="https://cdn.pixabay.com/photo/2022/09/20/22/12/peter-of-moravia-7468859_640.jpg" alt="Director" />
        <p>Khalid Hussain Nadwi</p>
        <div className="text-center space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Welcome to RGPS!</h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-h-48 sm:max-h-full overflow-y-auto">
            We believe in nurturing young minds and fostering both academic excellence and personal growth. Our dedicated staff creates a stimulating environment where each student thrives. Explore our website to discover our curriculum, dedicated teachers, and vibrant school community!
          </p>
        </div>
      </div>
    </section>
  );
}

export default WelcomeNote;
