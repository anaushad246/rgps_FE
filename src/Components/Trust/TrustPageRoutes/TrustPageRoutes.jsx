import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import TrustHome from '../TrustHome'
import TrustDonation from '../TrustDonation'
import TrustEvents from '../TrustEvents'

function TrustPageRoutes() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<TrustHome />}  />
            <Route path='/donation' element={<TrustDonation />} />
            <Route path='/events' element={<TrustEvents />} />
            {/* <Route path='/aboutUs' element={<TrusAboutUs />} /> */}
            
        </Routes>
    </Router>
  )
}

export default TrustPageRoutes