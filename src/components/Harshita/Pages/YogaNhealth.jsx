import React from 'react'
import Hero from '../components/Yoga&Health/Hero'
import YogaSection from '../components/Yoga&Health/YogaSection'
import Description from '../components/Yoga&Health/Description'
import Location from '../components/Yoga&Health/Location'
import Contact from '../components/Yoga&Health/Contact'

const YogaNhealth = () => {
  return (
    <div className='bg-black'>
      <Hero/>
      <YogaSection/>
      <Description/>
      <Location/>
      <Contact/>
    </div>
  )
}

export default YogaNhealth
