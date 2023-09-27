import React from 'react'
import Hero from '../components/HomeCustomers/Hero'
import Sponcers from '../components/HomeCustomers/Sponcers'
import FeaturedEvents from '../components/HomeCustomers/FeaturedEvents'
import Booking from '../components/HomeCustomers/Booking'
import EventCategories from '../components/HomeCustomers/EventCategories'
import Cities from '../components/HomeCustomers/Cities'
import Organizers from '../components/HomeCustomers/Organizers'
import Perks from '../components/HomeCustomers/Perks'
import Events from '../components/HomeCustomers/Events'

const HomeCustomers = () => {
  return (
   <div className='bg-black'>
  <Hero/>
  <Sponcers/>
  <FeaturedEvents/>
  <Booking/>
  <EventCategories/>
  <Cities/>
  <Organizers/>
  <Perks/>
  <Events/>
   </div>
  )
}

export default HomeCustomers
