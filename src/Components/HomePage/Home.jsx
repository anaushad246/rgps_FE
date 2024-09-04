// src/Components/Main.js

import React from 'react';
import HeroSection from './HeroSection';
import WelcomeNote from './WelcomeNote';
import SimpleSlider from './SimpleSlider';
import Academics from '../Academics/Academics';
import Events from '../Events/Events';


function Home() {
  return (
    <>
      <HeroSection />
      <WelcomeNote />
      {/* <AcademicsForHome /> */}
      <Academics />
      <Events />
      <SimpleSlider />
    </>
  );
}

export default Home;
