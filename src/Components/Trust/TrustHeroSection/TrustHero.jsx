import React from 'react';

function TrustHero() {
  return (
    <section 
      className="flex items-center justify-center bg-contain md:bg-cover  bg-center h-fit    md:p-12 lg:p-24 bg-[#BCE3C5]" 
    //   style={{ backgroundImage: `url(TrustHeroPageImage.jpeg)` }}
    >
      <div className="relative z-10 text-center text-white bg-black bg-opacity-50 p-6 md:p-12 lg:p-16 rounded-lg">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold md:mb-4">Tahir Hussain Educational and Welfare Trust</h1>
        <p className="text-xl md:text-2xl lg:text-3xl md:mb-4">Empowering Minds, Transforming Lives</p>
      </div>
    </section>
  );
}

export default TrustHero;
