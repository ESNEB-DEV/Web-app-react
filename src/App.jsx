import { useState } from 'react'
import './App.css'
import Navbar from './componants/Navbar'
import Hero from './componants/Hero'
import Features from './componants/Features'
import Footer from './componants/Footer'

function App() {
  return (
    <section>
    <Navbar />
    <Hero />
    <Features />
    <Footer />
  </section>
  )
}

export default App
