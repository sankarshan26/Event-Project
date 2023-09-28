import React, { useState } from "react";
const Checkout = () => {
  const [selectedTickets,setSelectedTickets]=useState(0)
  return (
    
      <div className="font-cinzel bg-white text-black w-[70vw] sm:w-fit  mt-5 rounded-lg text-sm py-3 relative z-10 ">
        <button className="border-1 border-black rounded-full w-5 h-5 sm:w-7 sm:h-7 absolute right-5 ">X</button>
      <p className="text-lg sm:text-xl font-bold text-center py-4"> Checkout</p>
      <div className="border-1 border-pink-700 flex flex-col sm:flex-row justify-between gap-3 px-3 py-3 ">
        <div className="flex flex-col justify-between gap-2 ">
          <div className="space-y-2">
            <p className="font-semibold text-base">Event History:</p>
            <p >Mental health yoga ( yoga & health)</p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-base">venue</p>
            <p>la grande’ , paris</p>
          </div>
         
        </div>
        <div className="flex flex-col justify-between sm:text-center sm:items-center gap-2">
        <div className="space-y-2">
            <p className="font-semibold text-base">start day</p>
            <p>sunday 16 july 2023</p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-base">timing</p>
            <p>10 a.m</p>
          </div>
        </div>
      </div>
      <div className="border-1 border-pink-700 h-24  flex items-center justify-center">
        <p className="font-semibold text-base sm:text-lg"> Tickets Booked</p>
      </div>
      <div className="font-semibold">
        <div className="flex flex-col items-center text-center gap-3 sm:flex-row sm:justify-between sm:gap-0  px-4 border-1 border-pink-700 py-3">
          <div>
          <p className="flex flex-col ">
              <span>Price</span>
              <span>$5.54</span>{" "}
            </p>
            <p className="text-xs">payed online</p>
          </div>
          <select name="tickets" id="tickets" className="w-20 h-fit py-2 border-1 border-pink-700 rounded-xl outline-none" onChange={(e)=>setSelectedTickets(e.target.value)}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>{" "}
          <p>{selectedTickets*5.54} usd</p>
        </div>
        <div className="flex flex-col items-center text-center gap-3 sm:flex-row sm:justify-between sm:gap-0 px-4 border-1 border-pink-700 py-3">
          <div>
            <p className="flex flex-col">
              <span>Price</span>
              <span>$5.54</span>
            </p>
            <p className="text-xs">payed online</p>
          </div>
          <select name="tickets" id="tickets" className="w-20 border-1 border-pink-700 rounded-xl h-fit py-2 outline-none" onChange={(e)=>setSelectedTickets(e.target.value)}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>{" "}
          <p>{selectedTickets*5.54} usd</p>
        </div>
        <div className="flex flex-col items-center text-center gap-3 sm:flex-row sm:justify-between sm:gap-0 px-4 border-1 border-pink-700 py-3">
          <div>
          <p className="flex flex-col">
              <span>Price</span>
              <span>$5.54</span>{" "}
            </p>
            <p className="text-xs">payed online</p>
          </div>
          <select name="tickets" id="tickets" className="w-20 border-1 border-pink-700 rounded-xl outline-none h-fit py-2" onChange={(e)=>setSelectedTickets(e.target.value)}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>{" "}
          <p>{selectedTickets*5.54} usd</p>
        </div>
        
      </div>
      </div>
      
  );
};

export default Checkout;
