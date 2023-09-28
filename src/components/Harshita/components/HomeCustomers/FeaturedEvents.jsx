import React from "react";
import EventCard from "./EventCard";

const FeaturedEvents = () => {
  const eventList = [
    {
      bg: "/HomeCustomers/winenights.png",
      title: "Winter wine nigths",
      desc: "Embrace the Chill,Sip & Drink",
    },
    {
      bg: "/HomeCustomers/yoga.png",
      title: "Yoga & Health",
      desc: "",
    },
    {
      bg: "/HomeCustomers/concert.png",
      title: "music&concert",
      desc: "Unleash the sound, ignite the night",
    },
    {
      bg: "/HomeCustomers/cooking.png",
      title: "",
      desc: "Italian cooking classes",
    },
  ];
  return (
    <div className="font-cinzel container w-10/12 h-10/12 mt-20">
      <p className="text-white text-xl md:text-2xl lg:text-3xl text-center font-medium">
        Featured Events of the Week
      </p>
      <div className=" mt-5 flex flex-col md:flex-row justify-center items-center gap-3">
        <div className="flex flex-col gap-2">
        <div className="  ">
          <EventCard
            bg={eventList[0].bg}
            title={eventList[0].title}
            desc={eventList[0].desc}
          />
        </div>
        <div className=" ">
          <EventCard
            bg={eventList[1].bg}
            title={eventList[1].title}
            desc={eventList[1].desc}
          />
        </div>
        </div>
       <div>
       <div className="flex flex-col gap-2">
          <EventCard
            bg={eventList[2].bg}
            title={eventList[2].title}
            desc={eventList[2].desc}
          />
        </div>
        <div className="">
          <EventCard
            bg={eventList[3].bg}
            title={eventList[3].title}
            desc={eventList[3].desc}
          />
        </div>
       </div>
        
      </div>
    </div>
  );
};

export default FeaturedEvents;
