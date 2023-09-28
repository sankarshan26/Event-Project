import React from 'react';

const ManageEventsTable = ({ events, onPublish, onDelete,onEdit }) => {
    const data= [
        {
          id: 1,
          name: 'Event 1',
          date: '2023-09-10',
          time: '15:00 - 17:00',
          isPublished: true,
        },
        {
          id: 2,
          name: 'Event 2',
          date: '2023-09-15',
          time: '10:00 - 12:00',
          isPublished: false,
        },
        {
          id: 3,
          name: 'Event 3',
          date: '2023-09-20',
          time: '14:00 - 16:00',
          isPublished: true,
        },
        {
          id: 4,
          name: 'Event 4',
          date: '2023-09-10',
          time: '15:00 - 17:00',
          isPublished: true,
        },
        {
          id: 5,
          name: 'Event 5',
          date: '2023-09-15',
          time: '10:00 - 12:00',
          isPublished: false,
        },
        {
          id: 6,
          name: 'Event 6',
          date: '2023-09-20',
          time: '14:00 - 16:00',
          isPublished: true,
        },
        // Add more dummy data as needed
      ];
  return (
    <div className="overflow-x-auto min-w-screen ">
      <table className="min-w-full border-collapse table-auto text-white">
        <thead className="border-1 border-pink-700 rounded-xl ">
          <tr >
            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Event</th>
            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Time</th>
            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="text-sm divide-y divide-gray-200">
          {data.map((event,index) => (
            <tr key={event.id}>
              <td className="px-6 py-4 whitespace-nowrap font-semibold">{index+1}. {event.name}</td>
              <td className="px-6 py-4 whitespace-nowrap font-semibold">{event.date}</td>
              <td className="px-6 py-4 whitespace-nowrap">{event.time}</td>
              <td className="px-6 py-4 whitespace-nowrap ">
                {event.isPublished ? (
                  <span className="">Published</span>
                ) : (
                  <span className="">Draft</span>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap flex items-center ">
                <div className='flex flex-col items-center gap-3'>
                {event.isPublished ? (
                  <>
                    <button
                      onClick={() => onEdit(event.id)}
                      className="ml-2 bg-green-700 text-white px-3 py-1 rounded-xl  focus:outline-none"
                    >
                      Edit
                    </button>
                    
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => onPublish(event.id)}
                      className="bg-sky-500 px-3 py-1 rounded-xl focus:outline-none"
                    >
                      Publish
                    </button>
                   
                  </>
                )}
                 <button
                      onClick={() => onDelete(event.id)}
                      className="ml-2 bg-red-600 px-3 py-1 rounded-xl focus:outline-none"
                    >
                      Delete
                    </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageEventsTable;
