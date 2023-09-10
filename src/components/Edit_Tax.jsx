import React from "react";
import Sidebar from "./Sidebar";
import edit from "../assets/Categories/edit.png"
import delete_ from "../assets/Categories/delete.png"

function Edit_tax() {

    
  return (
    <div className="bg-black w-full" style={{ "text-transform": "none" }}>
      <div className="flex flex-row gap-4 sm:gap-10">
        <div className="w-[50px] sm:w-[80px] sidebar-icon relative">
          <Sidebar />
        </div>

        <div className="flex-1 flex flex-col mt-8 mr-4 overflow-x-auto">
        <div className="flex justify-between flex-wrap gap-4 mb-5 ">
            <div className="flex items-center flex-wrap gap-2 sm:gap-8 lg:mt-8 lg:mb-8 lg:ml-14">
            <div className="text-white font-cinzel font-bold text-xl hover:cursor-pointer">
              EDIT TAX
            </div>

            <div className="flex flex-row gap-3 whitespace-nowrap flex-wrap font-cinzel font-bold">
            <span className="rounded-lg px-4 py-2 mr-2 hover:cursor-pointer " style={{"background": "rgba(108, 99, 255, 1)"}}>
                            <img src={edit} alt="" className="mr-2 inline" />
                            <span className="text-black">EDIT</span> 
                        </span>
                       
                        <span className="rounded-lg px-4 py-2  hover:cursor-pointer" style={{"background": "#FF0B0B"}}>
                            <img src={delete_} alt="" className="mr-2 inline" />
                            <span className="text-black">DELETE</span> 
                        </span> 

                        <span className="rounded-lg px-4 py-2 mr-2 hover:cursor-pointer" style={{"background": "#FFD363"}}>
                            <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 inline">
<path d="M16.25 18.75H8.75M8.75 18.75L11.25 21.25M8.75 18.75L11.25 16.25" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.5 12.5V18.75C27.5 25 25 27.5 18.75 27.5H11.25C5 27.5 2.5 25 2.5 18.75V11.25C2.5 5 5 2.5 11.25 2.5H17.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.5 12.5H22.5C18.75 12.5 17.5 11.25 17.5 7.5V2.5L22.5 7.5L27.5 12.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                            <span className="text-black text-xs font-bold font-cinzel">Return to list</span> 
                        </span>
            </div>
            
            </div>
          </div>
          
          <div className="flex flex-col lg:pl-14 text-white font-cinzel gap-4 lg:gap-8">
            <div className="border border-white flex flex-col py-2 px-8 rounded-xl">
              <span className="pl-3 text-lg font-bold">Title</span>
              <span className="pl-6 text-sm font-bold">Admin Handling FEE</span>
            </div>
            <div className="border border-white flex flex-col py-2 px-8 rounded-xl">
              <span className="pl-3 text-lg font-bold">RATE TYPE</span>
              <span className="pl-6 text-sm font-bold">PERCENT</span>
            </div>
            <div className="border border-white flex flex-col py-2 px-8 rounded-xl">
              <span className="pl-3 text-lg font-bold">RATE</span>
              <span className="pl-6 text-sm font-bold">3.00</span>
            </div>

            <div className="border border-white flex flex-col py-2 px-8 rounded-xl">
              <span className="pl-3 text-lg font-bold">NET PRICE</span>
              <span className="pl-6 text-sm font-bold">EXCLUDING</span>
            </div>

            <div className="border border-white flex flex-col py-2 px-8 rounded-xl">
              <span className="pl-3 text-lg font-bold">STATUS</span>
              <span className="pl-6 text-sm font-bold">ENABLED</span>
            </div>

            <div className="border border-white flex flex-col py-2 px-8 rounded-xl">
              <span className="pl-3 text-lg font-bold">CREATED AT</span>
              <span className="pl-6 text-sm font-bold">20/june-2023{'\u00A0'}{'\u00A0'}{'\u00A0'}2:30 pm</span>
            </div>

            <div className="border border-white flex flex-col py-2 px-8 rounded-xl">
              <span className="pl-3 text-lg font-bold">UPDATED AT</span>
              <span className="pl-6 text-sm font-bold">20/june-2023{'\u00A0'}{'\u00A0'}{'\u00A0'}2:30 pm</span>
            </div>

            <div className="border border-white flex flex-col py-2 px-8 rounded-xl">
              <span className="pl-3 text-lg font-bold">ADMIN</span>
              <span className="pl-6 text-sm font-bold">YES</span>
            </div>


            <div className=" flex justify-center mt-4 sm:mt-6 md:mt-8 ">
              <button
                type="submit"
                style={{background:"linear-gradient(90deg, rgba(216, 7, 250, 0.76) 0%, #FF0CBB 94.49%)",}}
                className="w-fit px-8 py-3 rounded-2xl font-cinzel font-bold">Save </button>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default Edit_tax;
