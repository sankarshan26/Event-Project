import React from "react";

const EventCard = ({ bg, title, desc }) => {
 

  return (
    <div className="card text-white font-cinzel w-72  md:w-fit bg-transparent cursor-pointer" >
      <img src={bg} className="card-img rounded-2xl" alt="..."  />
      <div className="card-img-overlay text-center w-full px-0 py-0 flex flex-col justify-end gap-2">
        <h5 className="card-title text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold">{title}</h5>
        <div className="bg-black/25 w-full h-24 flex items-center justify-center ">
        <p className="card-text text-sm sm:text-base md:text-lg lg:text-xl font-medium">{desc}</p>

        </div>
      </div>
    </div>
  );
};

export default EventCard;
