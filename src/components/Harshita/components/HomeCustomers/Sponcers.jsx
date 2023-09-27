import React from 'react'

const Sponcers = () => {
    const sponcerlist=[
        {
            img:'/HomeCustomers/sponcer1.png'
        },
        {
            img:'/HomeCustomers/sponcer2.png'
        },
        {
            img:'/HomeCustomers/sponcer3.png'
        },
        {
            img:'/HomeCustomers/sponcer4.png'
        },

    ]
  return (
    <div className='text-white font-cinzel text-center mt-24 '>
      <p className='text-xl md:text-2xl lg:text-3xl font-semibold'>Welcome to Kartexa</p>
      <p className='text-base md:text-xl mt-2'>Our top Sponcers</p>
      <div className="container mt-5 flex flex-grow px-5 overflow-x-auto no-scrollbar">
        <div className="flex flex-row gap-5 ">
          {sponcerlist.map((sponcer) => (
        <img src={sponcer.img} alt='sponcer-img' className='w-52 sm:w-64 md:w-72 lg:w-80'/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sponcers
