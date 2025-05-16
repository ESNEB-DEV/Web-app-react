import { useState, useEffect } from 'react'
import './App.css'
// components
import Navbar from './componants/Navbar'
import Hero from './componants/Hero'
import RecommenOne from './componants/RecommenOne'
import OurStatics from './componants/OurStatics'
import PopularMenu from './componants/PopularMenu'
import RecommenTwo from './componants/RecommenTwo'
import ChefInfo from './componants/ChefInfo'
import UpdateMenu from './componants/UpdateMenu'
import Footer from './componants/Footer'

function App() {

  useEffect(() => {
    document.title = "FoodDelish";
  }, []);

  return (
    <div >
      <Navbar />
      <Hero />  
      <PopularMenu />
      <RecommenOne />
      <OurStatics />
      <RecommenTwo />
      <ChefInfo />
      <UpdateMenu />
      <Footer />
    </div>
  )
}

export default App
