import React from 'react'
import Sidebar from "./Sidebar";
import eye from "../assets/Categories/eye.png"
import edit from "../assets/Categories/edit.png"
import delete_ from "../assets/Categories/delete.png"
import menu from "../assets/Sidebar/menu.png"
import add_ from "../assets/Categories/addcircle.png"
import banner1 from "../assets2/Banner/banner1.png"
import banner2 from "../assets2/Banner/banner2.png"

function Blogs() {

    
  return (
    <div className="bg-black w-full" style={{ "text-transform": "none" }}>
      <div className="flex flex-row gap-4 sm:gap-10">
        <div className="w-[50px] sm:w-[80px] sidebar-icon relative">
          <Sidebar />
        </div>

        <div className="flex-1 flex flex-col mt-8 mr-4 overflow-x-auto sm:mt-8">
        <div className="flex justify-between flex-wrap gap-4 mb-5">
            <div className="flex flex-col gap-4" >
            <div className="flex items-center flex-wrap mb-8">
            <div className="text-white font-cinzel font-bold text-sm md:text-xl hover:cursor-pointer mr-5">
              POST
            </div>
            <div className='flex gap-2 flex-wrap'>
            <button className='bg-[#12ED35] whitespace-nowrap text-md font-medium font-cinzel flex items-center justify-center px-2 py-1 rounded-xl'>
                 <img src={add_} alt="icon" className='w-[20px] inline mr-1' /><span className='font-cinzel font-bold text-xs sm:text-md'>ADD</span></button>
            
                 <button className='bg-[#0DFFF0] whitespace-nowrap text-md font-medium font-cinzel flex items-center justify-center px-2 py-1 rounded-xl'>
                 <img src={menu} alt="icon" className='w-[20px] inline mr-1' /><span className='font-cinzel font-bold text-xs sm:text-md'>ORDER</span></button>
                 <button className='bg-[#FF0B0B] whitespace-nowrap  font-medium font-cinzel flex items-center justify-center px-2 py-1 rounded-xl'>
                 <img src={delete_} alt="icon" className='w-[20px] inline mr-1' /><span className='font-cinzel text-xs sm:text-md font-bold'>DELETE</span></button>
                 </div>
            </div>
            </div>
          </div>
          <div className="realtive overflow-x-auto">
            <table className="w-full text-white table-auto font-cinzel text-sm sm:text-lg whitespace-nowrap font-bold border-collapse" >
                <thead className="w-full " style={{"border":"1px solid #D50AF5","border-radius":"20px"}}>
                    <tr style={{ width: "100%" }}>
                    <th scope="col" className="px-2 py-2">TITLE</th>
                    <th scope="col" className="px-2 py-2 ">POST IMAGE</th>
                    <th scope="col" className="px-2 py-2 ">STATUS</th>
                    <th scope="col" className="px-2 py-2">UPDATED AT</th>
                    <th scope="col" className="px-2 py-2 overflow-x-auto">ACTION</th></tr>
                </thead>

                <tbody className="w-full">
                <tr className="" style={{ width: "100%" , "border-bottom":"1px solid white"}}>
                <td className="text-center text-bold p-4">HOW TO SELL TICKETS <br/>ONLINE</td>
                    <td className="text-center text-bold p-4"><img src={banner1} alt="" /></td>
                    <td className="text-center  p-4">ACTIVE</td>
                    <td className="text-center p-4">23- june-2023<br/> 2:00 pm</td>                    
                    <td className="text-center min-w-fit whitespace-nowrap overflow-x-auto">
                        <span className="rounded-lg px-4 py-2 mr-2 hover:cursor-pointer" style={{"background": "rgba(108, 99, 255, 1)"}}>
                            <img src={edit} alt="" className="mr-2 inline" />
                            <span className="text-black">EDIT</span> 
                        </span>
                        <span className="rounded-lg px-4 py-2 mr-2 hover:cursor-pointer" style={{"background": "#FFD80D"}}>
                            <img src={eye} alt="" className="mr-2 inline" />
                            <span className="text-black">VIEW</span> 
                        </span>
                        <span className="rounded-lg px-4 py-2 hover:cursor-pointer" style={{"background": "#FF0B0B"}}>
                            <img src={delete_} alt="" className="mr-2 inline" />
                            <span className="text-black">DELETE</span> 
                        </span>
                    </td>
                </tr>

                <tr className="" style={{ width: "100%" , "border-bottom":"1px solid white"}}>
                <td className="text-center text-bold p-4">HOW TO SELL TICKETS <br/>ONLINE</td>
                    <td className="text-center text-bold p-4"><img src={banner2} alt="" /></td>
                    <td className="text-center  p-4">ACTIVE</td>
                    <td className="text-center p-4">23- june-2023<br/> 2:00 pm</td>                    
                    <td className="text-center min-w-fit whitespace-nowrap overflow-x-auto">
                        <span className="rounded-lg px-4 py-2 mr-2 hover:cursor-pointer" style={{"background": "rgba(108, 99, 255, 1)"}}>
                            <img src={edit} alt="" className="mr-2 inline" />
                            <span className="text-black">EDIT</span> 
                        </span>
                        <span className="rounded-lg px-4 py-2 mr-2 hover:cursor-pointer" style={{"background": "#FFD80D"}}>
                            <img src={eye} alt="" className="mr-2 inline" />
                            <span className="text-black">VIEW</span> 
                        </span>
                        <span className="rounded-lg px-4 py-2 hover:cursor-pointer" style={{"background": "#FF0B0B"}}>
                            <img src={delete_} alt="" className="mr-2 inline" />
                            <span className="text-black">DELETE</span> 
                        </span>
                    </td>
                </tr>
                
                </tbody>

            </table>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;