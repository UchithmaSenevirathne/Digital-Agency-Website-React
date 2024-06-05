import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from "./components/Hero/Hero";
import BrandLogo from './components/BrandLogo/BrandLogo';
import Services from './components/Services/Services';
import Testimonial from './components/Testimonial/Testimonial';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogComp from './components/Blogs/BlogComp';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className='overflow-x-hidden duration-300 bg-white dark:bg-black'>
      <Navbar/>
      <Hero/>
      <BrandLogo/>
      <Services/>
      <Testimonial/>
      <BlogComp/>
      <Footer/>
    </div>
  )
}

export default App