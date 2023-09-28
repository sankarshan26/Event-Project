import React from 'react'
import Exercises from './Exercises'
import Filter from './Filter'

const YogaSection = () => {
  return (
    <div className='bg-black w-10/12 flex flex-col md:flex-row gap-5  mx-auto mt-16 overflow-x-auto '>
        <Filter/>
        <Exercises/>

    </div>
  )
}

export default YogaSection
