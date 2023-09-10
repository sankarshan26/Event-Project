import React from "react";
import Sidebar from "./Sidebar";
import eye from "../assets/Categories/eye.png"
import edit from "../assets/Categories/edit.png"
import delete_ from "../assets/Categories/delete.png"

function Venues() {

    
  return (
    <div className="bg-black w-full" style={{ "text-transform": "none" }}>
      <div className="flex flex-row gap-4 sm:gap-10">
        <div className="w-[50px] sm:w-[80px] sidebar-icon relative">
          <Sidebar />
        </div>

        <div className="flex-1 flex flex-col mt-8 mr-4 overflow-x-auto">
        <div className="flex justify-between flex-wrap gap-4 mb-5 ">
            {/* <div className="flex flex-col gap-4" > */}
            <div className="flex items-center flex-wrap gap-2 sm:gap-8 lg:mt-8 lg:mb-8 lg:ml-14">
            <div className="text-white font-cinzel font-bold text-xl hover:cursor-pointer">
              VENUE
            </div>

            <div className="flex flex-row gap-3 whitespace-nowrap flex-wrap font-cinzel font-bold">
            <span className="rounded-lg px-4 py-2 mr-2 hover:cursor-pointer " style={{"background": "rgba(108, 99, 255, 1)"}}>
                            <img src={edit} alt="" className="mr-2 inline" />
                            <span className="text-black">EDIT</span> 
                        </span>
                        <span className="rounded-lg px-4 py-2 mr-2 hover:cursor-pointer" style={{"background": "#FFD80D"}}>
                            <img src={eye} alt="" className="mr-2 inline" />
                            <span className="text-black">VIEW</span> 
                        </span>
                        <span className="rounded-lg px-4 py-2  hover:cursor-pointer" style={{"background": "#FF0B0B"}}>
                            <img src={delete_} alt="" className="mr-2 inline" />
                            <span className="text-black">DELETE</span> 
                        </span> 
            </div>
            
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
            {/* </div> */}
            {/* <div
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
            </div> */}
          </div>
          <div className="realtive overflow-x-auto">
            <table className="w-full text-white table-auto font-cinzel text-sm sm:text-lg whitespace-nowrap font-bold border-collapse" >
                <thead className="w-full " style={{"border":"1px solid #D50AF5","border-radius":"20px"}}>
                    <tr style={{ width: "100%" }}>
                    <th scope="col" className="px-2 py-2">TITLE</th>
                    <th scope="col" className="px-2 py-2 ">VENUE TYPE</th>
                    <th scope="col" className="px-2 py-2 ">SHOW QUOTATION FROM</th>
                    <th scope="col" className="px-2 py-2">STATUS</th>
                    <th scope="col" className="px-2 py-2 overflow-x-auto">ACTION</th></tr>
                </thead>

                <tbody className="w-full">
                <tr className="" style={{ width: "100%" , "border-bottom":"1px solid white"}}>
                <td className="text-center text-bold whitespace-wrap">Australia grand hawk view</td>
                    <td className="text-center py-4 md:py-12">CINEMA</td>
                    <td className="text-center ">YES</td>
                    <td className="text-center">ENABLED</td>
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
                <td className="text-center text-bold">metro glam max</td>
                    <td className="text-center py-4 md:py-12">CINEMA</td>
                    <td className="text-center ">YES</td>
                    <td className="text-center">ENABLED</td>
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
                <td className="text-center text-bold">lemma valley hall</td>
                    <td className="text-center py-4 md:py-12">CINEMA</td>
                    <td className="text-center ">YES</td>
                    <td className="text-center">ENABLED</td>
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
                <td className="text-center text-bold">lso pepe fusion</td>
                    <td className="text-center py-4 md:py-12">CINEMA</td>
                    <td className="text-center ">YES</td>
                    <td className="text-center">ENABLED</td>
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

export default Venues;
