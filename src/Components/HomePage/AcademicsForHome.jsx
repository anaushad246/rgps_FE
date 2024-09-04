import React from 'react';

function AcademicsForHome() {
  return (
    <div className="academics">
      <h1>Academics</h1>
      <div className="primary-school">
        <h2>Primary School (Upto 5th Class)</h2>
        <p>
          Our primary school program focuses on building a strong foundation in core subjects like English, Mathematics, Science, and Social Studies.
        </p>
        
      </div>
      <div className="dar-ul-tahfeez">
        <h2>Dar-Ul-Tahfeez (Quran Memorization)</h2>
        <p>
          Our Dar-Ul-Tahfeez program is designed for students to memorize the Holy Quran, understand its teachings, and develop a strong spiritual foundation.
        </p>
        <img src="dar-ul-tahfeez-image.jpg" alt="Dar-Ul-Tahfeez" />
      </div>
      <div className="islamiyat">
        <h2>Islamiyat (For 11th, 12th, and Higher)</h2>
        <p>
          Our Islamiyat program focuses on the study of Islamic theology, jurisprudence, and history, preparing students for higher education and beyond.
        </p>
        <img src="islamiyat-image.jpg" alt="Islamiyat" />
      </div>
    </div>
  );
}

export default AcademicsForHome;