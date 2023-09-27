import React from "react";
import EventCard from "./EventCard";

const Events = () => {
  return (
    <div className="w-10/12 mx-auto mt-24 flex flex-col md:flex-row justify-center items-center gap-3 md:gap-5 font-cinzel">
      <div>
        <p className="text-white text-xl  md:text-3xl text-center font-semibold ">For Oganizers</p>
        <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row justify-center items-center mt-3">
          <div className="h-fit space-y-2">
              <EventCard bg={"/HomeCustomers/createEvent.png"} desc={'create event'} />
              <EventCard bg={"/HomeCustomers/selling.png"} desc={'start selling'}/>
  
          </div>
          <div className=" h-fit">
                <EventCard bg={"/HomeCustomers/fireworks.png"} desc={'publish events'}/>

            </div>
        </div>
      </div>
      <img src="/HomeCustomers/eventbg.png" alt="" className="w-1/2 md:w-1/5 mt-auto  " />

      <div>
        <p className="text-white text-xl md:text-3xl text-center font-semibold">For Customers</p>
        <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row justify-center  items-center mt-3  ">
          <div className="h-fit space-y-2">
              <EventCard bg={"/HomeCustomers/favEvent.png"} desc={'choose your favourite event'} />
              <EventCard bg={"/HomeCustomers/attendEvent.png"} desc={'attend events'}/>
  
          </div>
          <div className=" h-fit">
                <EventCard bg={"/HomeCustomers/tickets.png"} desc={'get tickets for your event'}/>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
