import React from 'react'
import EventCard from './EventCard'

const FeaturedEvents = () => {
  return (
    <div className=' mt-10 md:mt-16 lg:mt-24 font-cinzel text-white w-full'>
        <p className=' text-xl md:text-2xl lg:text-4xl font-semibold text-center'>recent featured events</p>
        <div className='mt-5'>
            <EventCard/>
        </div>
      
    </div>
  )
}

export default FeaturedEvents
