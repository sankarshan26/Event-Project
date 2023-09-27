import React, {useState} from "react";
import Sidebar from "./Sidebar";
import edit from "../assets/Categories/edit.png";
import delete_ from "../assets/Categories/delete.png";
import { Link } from "react-router-dom";
function MenuBuilder() {

    const[lang_state, setlang_state] = useState("EN");
    const[new_item_state, setNew_item_state] = useState(false) ;
  return (
    <div className="bg-black w-full realtive" style={{ "text-transform": "none" }}>
      <div className={new_item_state ? "flex flex-row gap-4 sm:gap-10 opacity-25": "flex flex-row gap-4 sm:gap-10"} onClick={()=>{
        if(new_item_state) setNew_item_state(!new_item_state)
      }}>
        <div className="w-[50px] sm:w-[80px] sidebar-icon relative">
          <Sidebar />
        </div>

        <div className="flex-1 flex flex-col mt-8 mr-4 overflow-x-auto">
          <div className="flex justify-between flex-wrap gap-4 mb-5 ">
            <div className="flex items-center flex-wrap gap-2 sm:gap-8 lg:mt-8 lg:mb-8 lg:ml-14">
              <div className="text-white font-cinzel font-bold text-xl hover:cursor-pointer">
                MENU BUILDER (HEADER)
              </div>

              <div className="flex flex-row gap-3 whitespace-nowrap flex-wrap font-cinzel font-bold">
                <span onClick={()=>{setNew_item_state(!new_item_state)}}
                  className="rounded-lg px-4 py-2 mr-2 hover:cursor-pointer"
                  style={{ background: "#FFD363" }}
                >
                  <svg
                    className="mr-2 inline"
                    width="20"
                    height="20"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.334 20.0002H26.6673M20.0007 26.6668V13.3335M20.0007 36.6668C29.1673 36.6668 36.6673 29.1668 36.6673 20.0002C36.6673 10.8335 29.1673 3.3335 20.0007 3.3335C10.834 3.3335 3.33398 10.8335 3.33398 20.0002C3.33398 29.1668 10.834 36.6668 20.0007 36.6668Z"
                      stroke="black"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span className="text-black text-xs font-bold font-cinzel">
                    NEW MENU ITEMS
                  </span>
                </span>
              </div>
              
              <div className="flex flex-row flex-wrap text-white font-cinzel font-semibold gap-4">
                <div className={lang_state==="EN" ? "px-3 py-2 rounded-xl bg-[#D50AF5] text-black hover:cursor-pointer" : "px-3 py-2 rounded-xl border-white border hover:cursor-pointer"}
                onClick={()=>{
                    setlang_state("EN") 
                }}>EN</div>
                <div className={lang_state==="AR" ? "px-3 py-2 rounded-xl bg-[#D50AF5] text-black hover:cursor-pointer" : "px-3 py-2 rounded-xl border-white border hover:cursor-pointer"}
                onClick={()=>{
                    setlang_state("AR") 
                }}>AR</div>
                <div className={lang_state==="DE" ? "px-3 py-2 rounded-xl bg-[#D50AF5] text-black hover:cursor-pointer" : "px-3 py-2 rounded-xl border-white border hover:cursor-pointer"}
                onClick={()=>{
                    setlang_state("DE") 
                }}>DE</div>
                <div className={lang_state==="FR" ? "px-3 py-2 rounded-xl bg-[#D50AF5] text-black hover:cursor-pointer" : "px-3 py-2 rounded-xl border-white border hover:cursor-pointer"}
                onClick={()=>{
                    setlang_state("FR") 
                }}>FR</div>
                <div className={lang_state==="ES" ? "px-3 py-2 rounded-xl bg-[#D50AF5] text-black hover:cursor-pointer" : "px-3 py-2 rounded-xl border-white border hover:cursor-pointer"}
                onClick={()=>{
                    setlang_state("ES") 
                }}>ES</div>
                <div className={lang_state==="JN" ? "px-3 py-2 rounded-xl bg-[#D50AF5] text-black hover:cursor-pointer" : "px-3 py-2 rounded-xl border-white border hover:cursor-pointer"}
                onClick={()=>{
                    setlang_state("JN") 
                }}>JN</div>
              </div>
            
            </div>
          </div>

          <div className="flex flex-col lg:pl-14 text-white font-cinzel gap-4 lg:gap-8">
            <div className="border border-white flex flex-wrap gap-3 justify-between overflow-x-auto py-4 px-8 rounded-xl font-cinzel text-lg font-bold">
               <span>CUSTOM HEADER MENU I</span> 
               <span className="text-center min-w-fit whitespace-nowrap ">
                        <span className="rounded-lg px-4 py-1 mr-2 hover:cursor-pointer" style={{"background": "rgba(108, 99, 255, 1)"}}>
                            <img src={edit} alt="" className="mr-2 inline" />
                            <span className="text-black text-xs sm:text-base">EDIT</span> 
                        </span>
                        <span className="rounded-lg  px-4 py-1 hover:cursor-pointer" style={{"background": "#FF0B0B"}}>
                            <img src={delete_} alt="" className="mr-2 inline" />
                            <span className="text-black text-xs sm:text-base">DELETE</span> 
                        </span>
                    </span>
            </div>
            
            <div className="border border-white flex flex-wrap gap-3 justify-between overflow-x-auto py-4 px-8 rounded-xl font-cinzel text-lg font-bold">
               <span>CUSTOM HEADER MENU 2</span> 
               <span className="text-center min-w-fit whitespace-nowrap ">
                        <span className="rounded-lg px-4 py-1 mr-2 hover:cursor-pointer" style={{"background": "rgba(108, 99, 255, 1)"}}>
                            <img src={edit} alt="" className="mr-2 inline" />
                            <span className="text-black text-xs sm:text-base">EDIT</span> 
                        </span>
                        <span className="rounded-lg  px-4 py-1 hover:cursor-pointer" style={{"background": "#FF0B0B"}}>
                            <img src={delete_} alt="" className="mr-2 inline" />
                            <span className="text-black text-xs sm:text-base">DELETE</span> 
                        </span>
                    </span>
            </div>

            <div className="border border-white flex flex-wrap gap-3 justify-between overflow-x-auto py-4 px-8 rounded-xl font-cinzel text-lg font-bold">
               <span>DAILY MEDITATION CLASS</span> 
               <span className="text-center min-w-fit whitespace-nowrap ">
                        <span className="rounded-lg px-4 py-1 mr-2 hover:cursor-pointer" style={{"background": "rgba(108, 99, 255, 1)"}}>
                            <img src={edit} alt="" className="mr-2 inline" />
                            <span className="text-black text-xs sm:text-base">EDIT</span> 
                        </span>
                        <span className="rounded-lg  px-4 py-1 hover:cursor-pointer" style={{"background": "#FF0B0B"}}>
                            <img src={delete_} alt="" className="mr-2 inline" />
                            <span className="text-black text-xs sm:text-base">DELETE</span> 
                        </span>
                    </span>
            </div>

            <div className="border border-white flex flex-wrap gap-3 justify-between overflow-x-auto py-4 px-8 rounded-xl font-cinzel text-lg font-bold">
               <span>DIGITAL MARKETING SEMINAR</span> 
               <span className="text-center min-w-fit whitespace-nowrap ">
                        <span className="rounded-lg px-4 py-1 mr-2 hover:cursor-pointer" style={{"background": "rgba(108, 99, 255, 1)"}}>
                            <img src={edit} alt="" className="mr-2 inline" />
                            <span className="text-black text-xs sm:text-base">EDIT</span> 
                        </span>
                        <span className="rounded-lg  px-4 py-1 hover:cursor-pointer" style={{"background": "#FF0B0B"}}>
                            <img src={delete_} alt="" className="mr-2 inline" />
                            <span className="text-black text-xs sm:text-base">DELETE</span> 
                        </span>
                    </span>
            </div>
            
            <div className="border border-white flex flex-wrap gap-3 justify-between overflow-x-auto py-4 px-8 rounded-xl font-cinzel text-lg font-bold">
               <span>POPULAR EVENTS</span> 
               <span className="text-center min-w-fit whitespace-nowrap ">
                        <span className="rounded-lg px-4 py-1 mr-2 hover:cursor-pointer" style={{"background": "rgba(108, 99, 255, 1)"}}>
                            <img src={edit} alt="" className="mr-2 inline" />
                            <span className="text-black text-xs sm:text-base">EDIT</span> 
                        </span>
                        <span className="rounded-lg  px-4 py-1 hover:cursor-pointer" style={{"background": "#FF0B0B"}}>
                            <img src={delete_} alt="" className="mr-2 inline" />
                            <span className="text-black text-xs sm:text-base">DELETE</span> 
                        </span>
                    </span>
            </div>
            
            <div className="border border-white flex flex-wrap gap-3 justify-between overflow-x-auto py-4 px-8 rounded-xl font-cinzel text-lg font-bold">
               <span><Link to="/blog">POPULAR BLOGS</Link> </span> 
               <span className="text-center min-w-fit whitespace-nowrap ">
                        <span className="rounded-lg px-4 py-1 mr-2 hover:cursor-pointer" style={{"background": "rgba(108, 99, 255, 1)"}}>
                            <img src={edit} alt="" className="mr-2 inline" />
                            <span className="text-black text-xs sm:text-base">EDIT</span> 
                        </span>
                        <span className="rounded-lg  px-4 py-1 hover:cursor-pointer" style={{"background": "#FF0B0B"}}>
                            <img src={delete_} alt="" className="mr-2 inline" />
                            <span className="text-black text-xs sm:text-base">DELETE</span> 
                        </span>
                    </span>
            </div>

           

            {/* <div className=" flex justify-center mt-4 sm:mt-6 md:mt-8 ">
              <button
                type="submit"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(216, 7, 250, 0.76) 0%, #FF0CBB 94.49%)",
                }}
                className="w-fit px-8 py-3 rounded-2xl font-cinzel font-bold"
              >
                Save{" "}
              </button>
            </div> */}
          </div>
        </div>
      </div>

      {new_item_state && <div className="bg-white flex flex-col items-center max-w-[500px] absolute top-20 z-50 left-0 right-0 m-auto p-4 rounded-lg">
      <div className=" w-full flex flex-row flex-wrap text-black font-cinzel font-semibold justify-between">
                <div className={lang_state==="EN" ? "px-3 py-2 rounded-xl bg-[#D50AF5] text-black hover:cursor-pointer" : "px-3 py-2 rounded-xl border-black border hover:cursor-pointer"}
                onClick={()=>{
                    setlang_state("EN") 
                }}>EN</div>
                <div className={lang_state==="AR" ? "px-3 py-2 rounded-xl bg-[#D50AF5] text-black hover:cursor-pointer" : "px-3 py-2 rounded-xl border-black border hover:cursor-pointer"}
                onClick={()=>{
                    setlang_state("AR") 
                }}>AR</div>
                <div className={lang_state==="DE" ? "px-3 py-2 rounded-xl bg-[#D50AF5] text-black hover:cursor-pointer" : "px-3 py-2 rounded-xl border-black border hover:cursor-pointer"}
                onClick={()=>{
                    setlang_state("DE") 
                }}>DE</div>
                <div className={lang_state==="FR" ? "px-3 py-2 rounded-xl bg-[#D50AF5] text-black hover:cursor-pointer" : "px-3 py-2 rounded-xl border-black border hover:cursor-pointer"}
                onClick={()=>{
                    setlang_state("FR") 
                }}>FR</div>
                <div className={lang_state==="ES" ? "px-3 py-2 rounded-xl bg-[#D50AF5] text-black hover:cursor-pointer" : "px-3 py-2 rounded-xl border-black border hover:cursor-pointer"}
                onClick={()=>{
                    setlang_state("ES") 
                }}>ES</div>
                <div className={lang_state==="JN" ? "px-3 py-2 rounded-xl bg-[#D50AF5] text-black hover:cursor-pointer" : "px-3 py-2 rounded-xl border-black border hover:cursor-pointer"}
                onClick={()=>{
                    setlang_state("JN") 
                }}>JN</div>
              </div>
        <form className="font-cinzel font-bold text-BASE " >
            <div className="w-full mt-6">
                <label htmlFor="title-of-menu-item">TITLE OF THE MENU ITEM</label>
                <input type="text" name="title-of-menu-item" placeholder="CUSTOM HEADER MENU" className="font-medium text-base border border-slate-200 w-[90%] mt-2 py-2 px-3 rounded-lg"  />
            </div>
            <div className="w-full mt-6">
                <label htmlFor="url-of-menu-item">URL OF THE MENU ITEM</label>
                <input type="text" placeholder="#" name="url-of-menu-item" className="font-medium text-base border border-slate-200 w-[90%] mt-2 py-2 px-3 rounded-lg"  />
            </div>
            <div className="w-full mt-6">
                <label htmlFor="url-of-menu-item">FONT ICON CLASS FOR MENU ITEM</label>
                <input type="text" placeholder="FAS-DAST STAR" name="url-of-menu-item" className="font-medium text-base border border-slate-200 w-[90%] mt-2 py-2 px-3 rounded-lg"  />
            </div>
            <div className="w-full mt-6">
                <label htmlFor="opening-of-menu-item">OPEN IN</label>
                <br />
                <select name="opening-of-menu-item" id="opening-of-menu-item"  className="font-medium text-base border border-slate-200 w-[90%] mt-2 py-2 px-3 rounded-lg">
                    <option value="same tab">SAME TAB/WINDOW</option>
                    <option value="new tab">NEW TAB/WINDOW</option>
                </select>
            </div>

            <div className="w-full flex justify-end items-center gap-4 mt-4 mr-4">
                <button type="submit" className="text-white px-4 py-2 rounded-xl" style={{"background":"linear-gradient(90deg, rgba(216, 7, 250, 0.76) 0%, #FF0CBB 94.49%)"}} onClick={()=>{setNew_item_state(!new_item_state)}}>Update</button>
                <button type="reset" className="text-balck opacity-60 px-4 py-2 border border-pink-500 rounded-xl" onClick={()=>{setNew_item_state(!new_item_state)}}>Cancel</button>
            </div>
        </form>

        </div>}
    </div>
  );
}

export default MenuBuilder;
