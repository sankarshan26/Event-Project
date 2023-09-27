import React from "react";

const Booking = () => {
  return (
    <div className="mt-32 relative font-cinzel">
      <img src="/HomeCustomers/bookings.png" alt="" className="w-52  md:w-72 absolute z-20 left-2  md:left-8 transform -translate-y-20 md:-translate-y-28 " />

      <div className="relative z-10 top-4 w-10/12 h-fit  py-5 mx-auto  border-1 border-pink-300 mt-24 font-cinzel  flex flex-col space-y-8 items-center justify-center rounded-lg">
      <p className="w-min md:text-2xl whitespace-wrap absolute top-0 ml-2 left-16   font-semibold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-700 to-pink-600 ">Grab your tickets now</p>

        <div className="text-white flex  justify-center   md:flex-row items-center text-center mt-5 ">
          <p className="w-7/12 mx-auto text-xl sm:text-2xl lg:text-3xl  font-semibold mt-auto ">our next event booking will start  in:</p>
        </div>
        <div className="flex flex-col space-y-5 sm:space-y-0 sm:flex-row sm:flex-wrap  justify-center items-center sm:space-x-10 md:space-x-16 lg:space-x-24 text-lg md:text-2xl text-black font-bold">
          <div className="bg-gradient-to-r from-fuchsia-700 to-pink-600 w-36 h-32 lg:w-48 lg:h-40 flex items-center justify-center rounded-2xl  ">
            <p>4 days</p>
          </div>
          <div className="bg-gradient-to-r from-fuchsia-700 to-pink-600 w-36 h-32 lg:w-48 lg:h-40 flex items-center justify-center rounded-2xl">
            <p>2 hours</p>
          </div>
          <div className="bg-gradient-to-r from-fuchsia-700 to-pink-600 w-36 h-32 lg:w-48 lg:h-40 flex items-center justify-center rounded-2xl">
            <p>36 minutes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
