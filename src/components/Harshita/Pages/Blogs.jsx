import React from 'react';
import Hero from '../components/Blogs/Hero';
import Help from '../components/Blogs/Help';
import Review from '../components/Blogs/Review';
import FeaturedEvents from '../components/Blogs/FeaturedEvents';

const Blogs = () => {
  return (
    <div className='bg-black flex flex-col items-center  '>
      <Hero />
      <Help />
      <Review />
      <hr className='bg-pink-700 mt-16 md:mt-24 w-10/12 mx-auto' />
      <FeaturedEvents />
    </div>
  );
}

export default Blogs;
