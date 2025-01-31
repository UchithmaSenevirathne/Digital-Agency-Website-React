import React from 'react'
import HeroImg from '../../assets/website/team.png'

const Hero = () => {
  return (
    <>
      <main className='duration-300 bg-white dark:bg-gray-950 dark:text-white'>
        <div className="container min-h-[620px] flex mt-10 sm:mt-0">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 place-items-center">
        
            {/* image section */}
            <div className='relative order-1 sm:order-2'>
              <img src={HeroImg} alt="" />
              <div className='absolute px-4 py-2 bg-white shadow-md -bottom-5 dark:bg-gray-900 rounded-xl -right-8'>
                <p>⭐Projects</p>
                <h1 className="font-bold">
                600+ <span className="font-normal">Done</span>
                </h1>
              </div>
            </div>
            {/* text content section */}
            <div className='order-2 space-y-5 sm:order-1 xl:pr-40'>
              <h1 className='text-4xl font-semibold sm:text-5xl'>
                Building Brands in the 
                <span className='text-primary'> Digital Agency</span>
              </h1>
              <p>
              Your partner in navigating the ever-evolving landscape of digital
              marketing. From conceptualization to execution, we craft tailored
              solutions that drive results and elevate your brand to new
              heights.
              </p>
              <button className='primary-btn'>Get Started</button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Hero