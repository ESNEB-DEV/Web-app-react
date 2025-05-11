import { useState } from 'react'
import './App.css'
// components
import Navbar from './componants/Navbar'
import Hero from './componants/Hero'
import InfoOne from './componants/InfoOne'
import InfoTwo from './componants/InfoTwo'
import CTA from './componants/CTA'
import Testimonials from './componants/Testimonials'
import Getintouch from './componants/Getintouch'
import Footer from './componants/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <InfoOne />
      <InfoTwo />
      <CTA />
      <Testimonials />
      <Getintouch />
      <Footer />
    </div>
  )
}

export default App
