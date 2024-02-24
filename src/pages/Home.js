import React from 'react';
import Photo from '../img/home/photo01.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
  <section className='section '>
    <div className='container mx-auto h-full relative'>
      <div className='flex flex-col justify-center'>
        <div className='w-full pt-36 pb-14 lg:pt-40 lg:pb-0 lg:pl-20  lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start'>
          <h2 className='h1'>
          Designer <br/> & Developer
          </h2>
          <p className='text-[26px] lg:text-[30px] font-primary mb-4 lg-mb-12'>Open to Free-lancing!</p>
          <Link to={'/contact'} className='btn mb-[30px]'>hire me</Link>

        </div>
        <div className='flex justify-end max-h-100 lg:max-h-max'>
          <div className='relative overflow-hidden lg:-right-30'>
            <img src={Photo} alt='' className='md:h-[100vh]'/>
          </div>
        </div>
      </div>

    </div>
  </section>
  )
};

export default Home;