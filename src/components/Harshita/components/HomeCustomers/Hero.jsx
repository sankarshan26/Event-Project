import React from "react";

const Hero = () => {
  return (
    <div className="relative z-10 w-screen h-screen font-cinzel  ">
      <div
        className="absolute -top-5  flex flex-col justify-center text-white  items-start bg-center bg-cover bg-no-repeat w-full h-full"
        style={{ backgroundImage: "url(/HomeCustomers/homecustomersbg.png)" }}
      >
        <div className="space-y-5  w-1/3 flex flex-col justify-center items-center ml-28 ">
        <p className=" text-xl sm:text-2xl md:text-3xl lg:text-5xl text-center font-semibold">
          Embrace the Spectacular Unlaeash your Eventful Journey
          </p>
          <button className="bg-gradient-to-r from-fuchsia-500 to-pink-600 px-4 py-2 rounded-xl text-sm sm:text-base md:text-xl lg:text-3xl font-medium">
            Explore 
          </button>
        </div>
          
      </div>
    
    </div>
  );
};

export default Hero;
