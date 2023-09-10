import React from 'react'
import bookingsection from "../assets/Commission/Commission.png"
import Sidebar from "./Sidebar";
import notification from "../assets/Dashboard/notification.png"
import eye from "../assets/Categories/eye.png"
import edit from "../assets/Categories/edit.png"
import delete_ from "../assets/Categories/delete.png"
import arr2 from "../assets/Categories/arr2.png"

function Commission() {

    
  return (
    <div className="bg-black w-full" style={{ "text-transform": "none" }}>
      <div className="flex flex-row gap-4 sm:gap-10">
        <div className="w-[50px] sm:w-[80px] sidebar-icon relative">
          <Sidebar />
        </div>

        <div className="flex-1 flex flex-col mt-8 mr-4 overflow-x-auto sm:mt-8">
        <div className="flex justify-between flex-wrap gap-4 mb-5">
            <div className="flex flex-col gap-4" >
            <div className="flex items-center">
            <div className="text-white font-cinzel font-bold text-sm md:text-xl hover:cursor-pointer">
              COMMISSION
            </div>
            <img src={bookingsection} alt="category" className="w-[40px] sm:w-[80px] hover:cursor-pointer ml-2" />
            
            </div>
            {/* <div className="flex gap-4">
            <div className="text-black px-2 py-1 rounded-lg hover:cursor-pointer" style={{background: "rgba(10, 245, 20, 1)"}}>
                <img src={add_} alt="" className="w-[25px] inline"/>
                <div className="font-cinzel text-bold inline text-sm">ADD NEW</div>
            </div>
            <div className="text-white px-2 py-1 rounded-lg hover:cursor-pointer" style={{background: "rgba(245, 10, 10, 0.81)"}}>
                <img src={del_} alt="" className="w-[25px] inline"/>
                <div className="font-cinzel text-bold inline text-sm">BULK DELETE</div>
            </div>
            </div> */}
            </div>
            <div
              className="text-black font-semibold font-cinzel px-2 rounded-3xl text-center flex items-center h-[40px] text-sm md:text-lg hover:cursor-pointer"
              style={{
                background:
                  "linear-gradient(181deg, rgba(190, 7, 254, 0.74) 0.86%, rgba(246, 19, 210, 0.78) 160.18%)",
              }}
            >
              <img
                src={notification}
                alt="notification-icon"
                className="w-[20px] inline sm:w-[40px]"
              />
              NOTIFICATION
            </div>
          </div>
          <div className="realtive overflow-x-auto">
            <table className="w-full text-white table-auto font-cinzel text-sm sm:text-lg whitespace-nowrap font-bold border-collapse" >
                <thead className="w-full " style={{"border":"1px solid #D50AF5","border-radius":"20px"}}>
                    <tr style={{ width: "100%" }}>
                    <th scope="col" className="px-2 py-2">ORGANIZER</th>
                    <th scope="col" className="px-2 py-2 ">TOTAL BOOKING</th>
                    <th scope="col" className="px-2 py-2 ">CUSTOMER EMAIL</th>
                    <th scope="col" className="px-2 py-2">PAYMENT TYPE</th>
                    <th scope="col" className="px-2 py-2">ORGANIZERS EARNING</th>
                    <th scope="col" className="px-2 py-2 overflow-x-auto">ACTION</th></tr>
                </thead>

                <tbody className="w-full">
                <tr className="" style={{ width: "100%" , "border-bottom":"1px solid white"}}>
                <td className="text-center text-bold p-4">TONY GRAY</td>
                    <td className="text-center text-bold p-4">197.20 USD</td>
                    <td className="text-center  p-4">9.90 usd</td>
                    <td className="text-center p-4">4.80 USD</td>                    
                    <td className="text-center p-4">1.88USD</td>
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
                <td className="text-center text-bold p-4">TONY GRAY</td>
                    <td className="text-center text-bold p-4">197.20 USD</td>
                    <td className="text-center  p-4">9.90 usd</td>
                    <td className="text-center p-4">4.80 USD</td>                    
                    <td className="text-center p-4">1.88USD</td>
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
                <td className="text-center text-bold p-4">TONY GRAY</td>
                    <td className="text-center text-bold p-4">197.20 USD</td>
                    <td className="text-center  p-4">9.90 usd</td>
                    <td className="text-center p-4">4.80 USD</td>                    
                    <td className="text-center p-4">1.88USD</td>
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
                <td className="text-center text-bold p-4">TONY GRAY</td>
                    <td className="text-center text-bold p-4">197.20 USD</td>
                    <td className="text-center  p-4">9.90 usd</td>
                    <td className="text-center p-4">4.80 USD</td>                    
                    <td className="text-center p-4">1.88USD</td>
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
                <td className="text-center text-bold p-4">TONY GRAY</td>
                    <td className="text-center text-bold p-4">197.20 USD</td>
                    <td className="text-center  p-4">9.90 usd</td>
                    <td className="text-center p-4">4.80 USD</td>                    
                    <td className="text-center p-4">1.88USD</td>
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

          <div className="w-full flex justify-end mt-4">
              <button className="text-white font-cinzel font-bold text-sm sm:text-lg border border-white rounded-xl px-2 py-2 sm:px-4 sm:py-2 flex items-center">SHOW MORE <img src={arr2} alt="arrow" className="w-[20px] inline" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Commission;