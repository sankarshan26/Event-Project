import React from 'react'
import ManageEventsTable from './MangeEventsTable'
const ManageEvents = () => {
  return (
    <div className='font-cinzel  px-2 text-white space-y-4 w-full overflow-x-hidden overflow-y-auto '>
        <div className='flex items-center gap-3'>
            <p className='text-xl md:text-2xl text-white font-semibold '>My events</p>
            <img src='/ManageEvents/event.png' className='w-28 md:w-32 '/>
        </div>
        <div className='w-full'>
        <ManageEventsTable/>

        </div>

    </div>
  )
}

export default ManageEvents;
