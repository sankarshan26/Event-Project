import React from 'react'
import ManageEarningTable from './ManageEarningsTable'

const ManageEarnings = () => {
  return (
    <div className='font-cinzel w-full px-2 text-white space-y-4 w-full overflow-x-hidden overflow-y-auto '>
        <div className='flex items-center'>
        <p className='text-xl md:text-2xl text-white font-semibold'> My Earnings</p>
<img src="/MangeEarnings/earnings.png" alt="" className='w-28 md:w-32' />
        </div>
      <hr className='bg-purple-700 ' />

      <div className='flex flex-wrap  gap-2 justify-around items-center mt-5  px-3'>
        <div className='flex gap-3 overflow-x-auto'>
        <div className='bg-purple-600 px-4 py-4 rounded-xl text-sm sm:text-base'><p>Total Earnings: Rs.45,000</p></div>
        <div className='bg-purple-600 px-4 py-4 rounded-xl text-sm sm:text-base'><p>expenses and losses : Rs.15,000 </p></div>
        <div className='bg-purple-600 px-4 py-4 rounded-xl text-sm sm:text-base'><p>Total profit : 30,000</p></div>
        </div>
       
        <button className='bg-green-800 h-fit w-fit px-3 py-2 rounded-xl text-sm sm:text-base'>Access Account</button>
      </div>
      <div className='mt-5  w-full '>
        <ManageEarningTable/>
      </div>
    </div>
  )
}

export default ManageEarnings
