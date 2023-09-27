import React, { useEffect } from "react";

const Location = () => {
  return (
    <div className="font-cinzel mt-24 container w-11/12">
      <button className="bg-gradient-to-r from-fuchsia-500 to-pink-600 p-2 md:p-3 rounded-xl  text-sm sm:text-base md:text-xl font-semibold ">
        Location
      </button>
      <div className="mt-3 w-full h-[500px] ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563977.26035309!2d73.39696173489014!3d29.26921549754514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db00b8670400b%3A0x732eaab4aaa6c143!2sHaryana!5e0!3m2!1sen!2sin!4v1694282916981!5m2!1sen!2sin"
          className="w-full h-full rounded-xl"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
