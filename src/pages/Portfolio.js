import React from 'react';
import Image1 from '../img/portfolio/photo12.jpg';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return( 
  <section className='section'>
    <div className='container mx-auto h-full relative'>
      <div className='flex flex-col lg:flex-row h-full items-center justify-center 
      gap-x-24 lg:px-20 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
        <div className='flex flex-col lg:items-start'>
          <h1 className='h1 mb-10'>Portfolio</h1>
          <p className='mb-12 max-w-sm'>
            I am quite adapt in designing and okay with development as I have worked on various projects design.
            You can see my recents work on below and hire or contact me.
          </p>
          <Link to={'/contact'} className='btn mb-[40px] xs:mx-auto lg:max-0'>
            Hire Me
          </Link>
        </div>

        <div className='grid grid-cols-2 gap-2 xs:mx-2'>
          <div className='max-w-[250px] lg:max-w-[320px] h-[150px] lg:h-[180px] bg-accent 
          overflow-hidden'>
            <img src={Image1} alt='' className='object-cover h-full lg:h-[180px] hover:scale-105 transition-all duration-500'></img>
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[150px] lg:h-[180px] bg-accent 
          overflow-hidden'>
            <img src={Image1} alt='' className='object-cover h-full lg:h-[180px] hover:scale-105 transition-all duration-500'></img>
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[150px] lg:h-[180px] bg-accent 
          overflow-hidden'>
            <img src={Image1} alt='' className='object-cover h-full lg:h-[180px] hover:scale-105 transition-all duration-500'></img>
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[150px] lg:h-[180px] bg-accent 
          overflow-hidden'>
            <img src={Image1} alt='' className='object-cover h-full lg:h-[180px] hover:scale-105 transition-all duration-500'></img>
          </div>
         
        </div>

      </div>

    </div>
  </section>
  )
};

export default Portfolio;