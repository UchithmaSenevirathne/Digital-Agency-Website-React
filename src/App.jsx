import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from "./components/Hero/Hero";
import BrandLogo from './components/BrandLogo/BrandLogo';
import Services from './components/Services/Services';

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <BrandLogo/>
      <Services/>
    </div>
  )
}

export default App