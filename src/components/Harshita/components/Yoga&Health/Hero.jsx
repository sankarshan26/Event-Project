import React from "react";

const Hero = () => {
  return (
    <div className="relative h-[80vh]  bg-black font-cinzel">
      <div class="absolute -top-5  card bg-black  text-white w-full h-full ">
        <img
          class="card-img h-full w-full"
          src={"/yoga&health/hero.png"}
          alt="Card image"
        />
        <div class="card-img-overlay flex flex-col justify-center  items-center  ">
          <div className="flex flex-col justify-center gap-5  items-center h-full">
            <div className="text-center  ">
            <h5 class="card-title text-2xl md:text-3xl lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-800 to-pink-600 tracking-widest">yoga & health</h5>
            <p class="card-text text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-800 to-pink-600 tracking-widest">
              calmness & tranquility in one place
            </p>
            </div>
      
            <button className="text-sm sm:text-base md:text-lg font-semibold bg-gradient-to-r from-fuchsia-700 to-pink-600 text-black p-2 md:p-3 rounded-lg ">book your seats now</button>
          </div>
          <div className="flex mt-auto  gap-3 sm:w-1/2  md:w-6/12 items-center bg-white rounded-full p-2 md:p-3">
            <svg
              className="w-7 h-7"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.917 41.6667C27.8898 41.6667 32.6589 39.6913 36.1752 36.175C39.6916 32.6587 41.667 27.8896 41.667 22.9167C41.667 17.9439 39.6916 13.1748 36.1752 9.6585C32.6589 6.14219 27.8898 4.16675 22.917 4.16675C17.9442 4.16675 13.175 6.14219 9.65874 9.6585C6.14243 13.1748 4.16699 17.9439 4.16699 22.9167C4.16699 27.8896 6.14243 32.6587 9.65874 36.175C13.175 39.6913 17.9442 41.6667 22.917 41.6667ZM39.4378 43.1042C40.542 46.4376 43.0628 46.7709 45.0003 43.8542C46.7712 41.1876 45.6045 39.0001 42.3962 39.0001C40.0212 38.9792 38.6878 40.8334 39.4378 43.1042Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input
              type="text"
              name=""
              id=""
              className="focus:outline-none w-full text-xs sm:text-sm"
              placeholder="SEARCH FOR MUSICAL EVENTS"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
