import React from "react";

const Hero = () => {
  return (
    <div className="relative z-10 w-screen h-screen font-cinzel  ">
      <div
        className="absolute -top-20 flex flex-col justify-center items-center bg-center bg-cover bg-no-repeat w-full h-full"
        style={{ backgroundImage: "url(/Blogs/blogsbg.png)" }}
      >
        <div className="flex flex-col justify-between w-full h-4/5  text-white text-base md:text-lg lg:text-2xl font-bold text-center ">
          <div className="flex flex-col my-auto self-center items-center justify-center w-3/5 ">
          <p>BLOGS</p>
          <p>
            Unlocking Insights, Empowering Minds: Explore the World of Knowledge
            through our Engaging Blog."
          </p>
          </div>
          <div className="mx-auto  flex gap-1 sm:gap-3 w-10/12 text-xs sm:text-sm  sm:w-6/12 items-center bg-white rounded-full p-3">
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
          className="focus:outline-none w-full "
          placeholder="SEARCH FOR MUSICAL EVENTS"
        />
        <button className="flex bg-gradient-to-r from-fuchsia-500  to-pink-600 rounded-xl px-2 py-1 sm:px-4 sm:py-2  font-semibold  gap-2 text-white items-center">
          <span>FILTER</span>
          <svg
            className="w-6 h-6"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.58314 3.33325H20.4165C21.6498 3.33325 22.6665 4.34992 22.6665 5.58325V8.04992C22.6665 8.94992 22.0998 10.0666 21.5498 10.6333L16.7165 14.8999C16.0498 15.4666 15.5998 16.5833 15.5998 17.4833V22.3166C15.5998 22.9833 15.1498 23.8833 14.5831 24.2333L13.0165 25.2499C11.5498 26.1499 9.53314 25.1333 9.53314 23.3333V17.3833C9.53314 16.5999 9.08314 15.5833 8.63314 15.0166L4.36648 10.5166C3.79981 9.94992 3.34981 8.94992 3.34981 8.26659V5.68325C3.33314 4.34992 4.34981 3.33325 5.58314 3.33325Z"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.33301 20.0001V25.0001C3.33301 33.3334 6.66634 36.6667 14.9997 36.6667H24.9997C33.333 36.6667 36.6663 33.3334 36.6663 25.0001V15.0001C36.6663 9.80007 35.3663 6.5334 32.3497 4.8334C31.4997 4.35007 29.7997 3.9834 28.2497 3.7334M21.6663 21.6667H29.9997M18.333 28.3334H29.9997"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
        </div>
      </div>
    
    </div>
  );
};

export default Hero;
