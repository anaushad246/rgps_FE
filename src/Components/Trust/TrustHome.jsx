import React from 'react'
import TrustIntro from './TrustIntro'

import TrustNewsSlider from './TrustNewsSlider';
import TrustMission from './TrustMission';
import AppealSection from './AppealSection';


import TrustHero from './TrustHeroSection/TrustHero';
import TrustGallery from './TrustGallery/TrustGallary';




function TrustHome() {
  return (
    <div className='w-screen'>
        
        <TrustHero />
        {/* <TrustMenu /> */}
        <TrustIntro />
        <TrustMission />
        {/* <TrustDonation /> */}
        {/* <TrustContactUs /> */}
        <TrustNewsSlider />
        <AppealSection />
        <TrustGallery />
       
    </div>
  )
}

export default TrustHome