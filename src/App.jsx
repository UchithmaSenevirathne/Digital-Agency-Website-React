import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from "./components/Hero/Hero";
import BrandLogo from './components/BrandLogo/BrandLogo';

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <BrandLogo/>
    </div>
  )
}

export default App