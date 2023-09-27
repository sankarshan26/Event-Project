import React from "react";

const Organizers = () => {
  const organizers = [
    {
      img: "/HomeCustomers/andrew.png",
      name: "chef andrew",
      profession: "Head Chef at GA Bangkok",
    },
    {
      img: "/HomeCustomers/ajay.png",
      name: "ajay gupta",
      profession: "Muisc Producer & DJ",
    },
    {
      img: "/HomeCustomers/merry.png",
      name: "mary ray",
      profession: "Yoga Instructor at Yoga Works",
    },
    {
      img: "/HomeCustomers/jenny.png",
      name: "jeny mark",
      profession: "Perk & Love CEO",
    },
  ];
  return (
    <div className="text-center mt-24">
      <p className="font-cinzel text-white text-xl sm:text-2xl lg:text-3xl font-medium">
        Meet Our top organizers
      </p>
      <div className="container mt-5 flex flex-grow px-5 overflow-x-auto no-scrollbar">
        <div className="flex flex-row gap-5">
          {organizers.map((organizer) => (
            <div class="card bg-dark text-white w-64 h-80 md:w-72 md:h-96 flex ">
              <img
                class="card-img h-full"
                src={organizer.img}
                alt="Card image"
              />
              <div class="card-img-overlay  border h-fit text-black bg-white w-3/5 px-0 py-2 mt-auto mx-auto">
                <h5 class="card-title font-cinzel text-base md:text-xl font-bold">
                  {organizer.name}
                </h5>
                <p class="card-text font-medium text-sm md:text-base">{organizer.profession}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Organizers;
