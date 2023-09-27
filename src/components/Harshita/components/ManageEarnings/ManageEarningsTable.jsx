import React from 'react';

const ManageEarningTable = ({ earnings }) => {

    const dummyEarnings = [
        {
          id: 1,
          event: 'Event 1',
          date: '2023-09-10',
          bookings: 50,
          commission: 500,
          profit: 1000,
          status: 'paid',
        },
        {
          id: 2,
          event: 'Event 2',
          date: '2023-09-15',
          bookings: 30,
          commission: 300,
          profit: 600,
          status: 'paid',
        },
        {
          id: 3,
          event: 'Event 3',
          date: '2023-09-20',
          bookings: 40,
          commission: 400,
          profit: 800,
          status: 'pending',
        },
        {
            id: 4,
            event: 'Event 4',
            date: '2023-09-20',
            bookings: 40,
            commission: 400,
            profit: 800,
            status: 'pending',
          },
          {
            id: 5,
            event: 'Event 5',
            date: '2023-09-20',
            bookings: 40,
            commission: 400,
            profit: 800,
            status: 'pending',
          },
      ];
      
      
  return (
    <div className="overflow-x-auto ">
      <table className="min-w-full border-collapse table-auto text-white">
        <thead className="border-1 border-pink-700">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Event</th>
            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Bookings</th>
            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Commission</th>
            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Profit</th>
            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody className="text-sm divide-y divide-gray">
          {dummyEarnings.map((earning,index) => (
            <tr key={earning.id} >
              <td className="px-6 py-4 whitespace-nowrap flex gap-2"><p>{index+1}. </p><p>{earning.event}</p></td>
              <td className="px-6 py-4 whitespace-nowrap">{earning.date}</td>
              <td className="px-6 py-4 whitespace-nowrap">{earning.bookings}</td>
              <td className="px-6 py-4 whitespace-nowrap">{earning.commission}</td>
              <td className="px-6 py-4 whitespace-nowrap">{earning.profit}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {earning.status === 'paid' ? (
                  <span className="bg-green-700 px-3 py-1 rounded-full">Paid</span>
                ) : (
                  <span className="bg-red-600 px-2 py-1 rounded-full">Pending</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageEarningTable;
