import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/HomePage/Home';
import Academics from './Components/Academics/Academics';
import Gallery from './Components/Gallery/Gallery';
import Welfare from './Components/Welfare/Welfare';
import ContactUs from './Components/Contact Us/ContactUs';
import AboutUs from './Components/About Us/AboutUs';
import Events from './Components/Events/Events';
import TrustHome from './Components/Trust/TrustHome';
import TrustEvents from './Components/Trust/TrustEvents';
import TrustDonation from './Components/Trust/TrustDonation';
import TrustContactUs from './Components/Trust/TrustContactUs';
import TrustHeader from './Components/Trust/TrustHeader';
import TrustGallary from './Components/Trust/TrustGallery/TrustGallary';
import TrustAboutUs from './Components/Trust/trusAboutUs/TrusAboutUs';

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <TrustHeader />
      <Routes>
        <Route path="/rgps" element={<Home />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/events" element={<Events />} />
        <Route path="/welfare" element={<Welfare />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contactUs" element={<ContactUs />} />
        {/* Trust routes */}
        <Route path="/" element={<TrustHome />} />
        <Route path="/trustEvents" element={<TrustEvents />} />
        <Route path='/trustGallary' element={<TrustGallary />} />
        <Route path="/trustDonation" element={<TrustDonation />} />
        <Route path="/trustContactUs" element={<TrustContactUs />} />
        <Route path='/trustAboutUs' element={<TrustAboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
