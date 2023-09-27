import React from 'react'

const Perks = () => {
    const perks=[
        {
            img:'/HomeCustomers/users.svg',
            numbers:'100+',
            type:'Organizers & Speaker'
        },
        {
            img:'/HomeCustomers/flag.svg',
            numbers:'300+',
            type:'Ideal Events'
        },
        {
            img:'/HomeCustomers/grid.svg',
            numbers:'30+',
            type:'New schedules'
        },
        {
            img:'/HomeCustomers/profile.svg',
            numbers:'3000+',
            type:'Satisfied clients'
        },
    ]
  return (
    <div className='mt-24 '>
      <p className='text-xl sm:text-2xl lg:text-3xl font-cinzel text-center font-medium text-white px-2'>
      What you will get after being a part of our community
      </p>
      <div className='bg-gradient-to-r from-purple-600 to-pink-600 flex flex-col sm:flex-row justify-evenly gap-4 sm:gap-0 h-fit sm:h-48 py-3 items-center mt-4 text-black'>
        {
            perks.map(perk=>(
                <div className='font-bold font-cinzel text-center space-y-2'>
                    <img src={perk.img} alt="" className='mx-auto w-7 h-7 md:w-9 md:h-10' />
                    <p className='text-xl sm:text-2xl lg:text-3xl'>{perk.numbers}</p>
                    <p className='text-sm sm:text-base md:text-xl'>{perk.type}</p>
                </div>
            ))
        }
        
      </div>
    </div>
  )
}

export default Perks
