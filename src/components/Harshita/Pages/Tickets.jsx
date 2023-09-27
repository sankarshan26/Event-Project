import React from "react";
import Months from "../components/tickets/Months";
import Dates from "../components/tickets/Dates";

const Tickets = () => {
  const style={
    height:'100%',
  }
  return (
    <div className="flex justify-center items-center bg-black w-full min-h-screen  overflow-x-hidden overflow-y-auto   font-cinzel py-5 " style={style}>
      <div className="flex flex-col justify-center items-center mt-auto  w-[80vw] gap-4 ">
      <div>
         <p className=" text-xl sm:text-2xl  md:text-3xl lg:text-4xl text-white font-medium mt-5 h-fit   ">
        get your tickets now
      </p>
      </div>
     
      <div className="flex flex-col sm:flex-row w-full   overflow-x-auto overflow-y-auto  items-center gap-3  ">
  <Months />
  <div className="flex flex-col gap-4 w-full">
    <Dates />
    <Dates />
    <Dates />
    <Dates />
    <Dates />
    <Dates />
  </div>
</div>
      </div>
     

    </div>
  );
};

export default Tickets;
