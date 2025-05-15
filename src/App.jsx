import { useState, useEffect } from 'react'
import './App.css'
// components
import Navbar from './componants/Navbar'
import Hero from './componants/Hero'
import InfoOne from './componants/InfoOne'
import InfoTwo from './componants/InfoTwo'
import OurStatics from './componants/OurStatics'
import Testimonials from './componants/Testimonials'
import Getintouch from './componants/Getintouch'
import Footer from './componants/Footer'

function App() {

  useEffect(() => {
    document.title = "FoodDelish";
  }, []);

  return (
    <div >
      <Navbar />
      <Hero />
      <InfoOne />
      <InfoTwo />
      <OurStatics />
      <Testimonials />
      {/* <Getintouch />
      <Footer /> */}
    </div>
  )
}

export default App
