import React from 'react'
import EmbeddedVideo from './EmbeddedVideo'

const EventCard = () => {
  return (
    <div class="card w-10/12 bg-transparent text-white  m-auto px-2 md:px-4 py-2 border-1 border-pink-200 space-y-3">
            <p className='text-base sm:text-xl md:text-2xl text-center'>At a glance</p>
        <EmbeddedVideo/>
  <div class="card-body text-center">
    <h5 class="card-title text-base md:text-2xl font-semibold">intro to piano</h5>
    <p className='ml-32 -mt-2 text-sm sm:text-base md:text-lg font-semibold'>by sam</p>
    <p class="card-text text-center mt-3 text-sm sm:text-base line-clamp-5 md:line-clamp-none">Welcome to the captivating world of piano music at our "Introduction to Piano" event! Whether you're a complete beginner or have some basic knowledge, this event is designed to introduce you to the enchanting art of playing the piano. Join us for an immersive experience filled with exploration, hands-on learning, and the joy of creating beautiful melodies. Our expert instructors will guide you through the fundamentals of piano technique, note reading, and basic music theory, setting you on a path to unlock your musical potential. Discover the magic of the piano and embark on a musical journey that will inspire and delight you.</p>
  </div>
</div>
  )
}

export default EventCard
