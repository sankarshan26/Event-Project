import React from "react";
import { useState } from "react";
import sideicon from "../assets/Dashboard/sidebar1.png";
import man from "../assets/Sidebar/Man.png";
import banner from "../assets/Sidebar/banner.png";
import user from "../assets/Sidebar/user.png";
import taxes from "../assets/Sidebar/taxes.png";
import menu from "../assets/Sidebar/menu.png";
import events from "../assets/Sidebar/events.png";
import dashboard from "../assets/Sidebar/dashboard.png";
import contact from "../assets/Sidebar/contact.png";
import categories from "../assets/Sidebar/categories.png";
import bookings from "../assets/Sidebar/bookings.png";
import blogpost from "../assets/Sidebar/blogpost.png";
import commission from "../assets/Sidebar/commission.png";
import { Link } from "react-router-dom";

function Sidebar() {
  const [side_bar, setSide_bar] = useState(false);
  function handleSide_bar() {
    setSide_bar(!side_bar);
  }

  const [act_state, setAct_state] = useState("Dashboard");
  function handleAct_state(s) {
    setAct_state(s);
    console.log(act_state);
  }
  return (
    <div style={{"background":"black",}}>
      {!side_bar && <img src={sideicon} alt="" onClick={handleSide_bar} />}
      {side_bar && (
        <>
          <div
            className="flex flex-col absolute font-cinzel w-[200px]"
            style={{
              background:
                "linear-gradient(179.77deg, #FFFCFF 0.2%, #FF0FCA 136.65%)",
              "z-index": "100",
            }}
          >
            <ul className="w-[200px] pb-10">
              <li
                className="mt-8 pl-6 flex justify-start items-center gap-5 pb-4"
                style={{ "border-bottom": "1px solid pink" }}
              >
                <img src={man} alt="man" className="inline w-[50px]" />
                <span className="font-bold">ADMIN</span>
              </li>

              <li
                
                onClick={() => {
                  handleAct_state("CATEGORIES");
                  handleSide_bar();
                }}
              ><Link to="/categories" className=" pl-6 flex gap-4 items-center mt-8 pr-2 hover:cursor-pointer">
                <img src={categories} alt="cat" className="inline w-[20px]" />
                <span className="font-semibold">CATEGORIES</span></Link>
              </li>
              <li
               
                onClick={() => {
                  handleAct_state("DASHBOARD");
                  handleSide_bar();
                }}
              ><Link to="/admindashboard" className=" pl-6 flex gap-4 items-center mt-8 pr-2 hover:cursor-pointer">
                <img src={dashboard} alt="cat" className="inline w-[20px]" />
                <span className="font-semibold">DASHBOARD</span></Link>
              </li>
              <li
                onClick={() => {
                  handleAct_state("EVENTS");
                  handleSide_bar();
                }}
              ><Link to="/events"
              className=" pl-6 flex gap-4 items-center mt-8 pr-2 hover:cursor-pointer">
                <img src={events} alt="cat" className="inline w-[20px]" />
                <span className="font-semibold">EVENTS</span></Link>
              </li>
              <li
                
                onClick={() => {
                  handleAct_state("BOOKINGS");
                  handleSide_bar();
                }}
              ><Link to="/booking" className=" pl-6 flex gap-4 items-center mt-8 pr-2 hover:cursor-pointer">
                <img src={bookings} alt="cat" className="inline w-[20px]" />
                <span className="font-semibold">BOOKINGS</span></Link>
              </li>
              <li
                
                onClick={() => {
                  handleAct_state("COMMISSION");
                  handleSide_bar();
                }}
              > <Link to="/commission" className=" pl-6 flex gap-4 items-center mt-8 pr-2 hover:cursor-pointer">
                <img src={commission} alt="cat" className="inline w-[20px]" />
                <span className="font-semibold">COMMISSION</span></Link>
              </li>
              <li
                
                onClick={() => {
                  handleAct_state("TAXES");
                  handleSide_bar();
                }}
              ><Link to="/taxes" className=" pl-6 flex gap-4 items-center mt-8 pr-2 hover:cursor-pointer">
                <img src={taxes} alt="cat" className="inline w-[20px]" />
                <span className="font-semibold">TAXES</span></Link>
              </li>
              <li
                onClick={() => {
                  handleAct_state("VIEWING TAXES");
                  handleSide_bar();
                }}
              > <Link to="/view-tax" className=" pl-6 flex gap-4 items-center mt-8 pr-2 hover:cursor-pointer">
                <img src={taxes} alt="cat" className="inline w-[20px]" />
                <span className="font-semibold">VIEWING TAXES</span></Link>
              </li>
              <li
                onClick={() => {
                  handleAct_state("EDIT TAXES");
                  handleSide_bar();
                }}
                > <Link to="/edit-tax" className=" pl-6 flex gap-4 items-center mt-8 pr-2 hover:cursor-pointer">
                <img src={taxes} alt="cat" className="inline w-[20px]" />
                <span className="font-semibold">EDIT TAXES</span></Link>
              </li>
              <li
                onClick={() => {
                  handleAct_state("USERS");
                  handleSide_bar();
                }}
              ><Link to="/users" className=" pl-6 flex gap-4 items-center mt-8 pr-2 hover:cursor-pointer">
                <img src={user} alt="cat" className="inline w-[20px]" />
                <span className="font-semibold">USERS</span></Link>
              </li>
              <li
                onClick={() => {
                  handleAct_state("CONTACTS");
                  handleSide_bar();
                }}
              ><Link to="/contacts" className=" pl-6 flex gap-4 items-center mt-8 pr-2 hover:cursor-pointer">
                <img
                  src={contact}
                  alt="cat"
                  className="inline w-[20px] p-[2px] border border-black rounded-sm"
                />
                <span className="font-semibold">CONTACTS</span></Link>
              </li>
              <li
                onClick={() => {
                  handleAct_state("BANNER");
                  handleSide_bar();
                }}
              ><Link to="/banner" className=" pl-6 flex gap-4 items-center mt-8 pr-2 hover:cursor-pointer">
                <img
                  src={banner}
                  alt="cat"
                  className="inline w-[20px] border border-black rounded-[2px] p-[1px]"
                />
                <span className="font-semibold">BANNER</span></Link>
              </li>
              <li
                onClick={() => {
                  handleAct_state("BLOG POST");
                  handleSide_bar();
                }}
              ><Link to="/blog-post" className=" pl-6 flex gap-4 items-center mt-8 pr-2 hover:cursor-pointer">
                <img src={blogpost} alt="cat" className="inline w-[20px]" />
                <span className="font-semibold">BLOG POST</span></Link>
              </li>
              <li 
                onClick={() => {
                  handleAct_state("HEADER MENU");
                  handleSide_bar();
                }}
              ><Link to="/header-menu" className=" pl-6 flex gap-4 items-center mt-8 pr-2 hover:cursor-pointer">
                <img src={menu} alt="cat" className="inline w-[20px]" />
                <span className="font-semibold">HEADER MENU</span></Link>
              </li>
              <li 
                onClick={() => {
                  handleAct_state("FOOTER MENU");
                  handleSide_bar();
                }}
              ><Link to="/footer-menu" className=" pl-6 flex gap-4 items-center mt-8 pr-2 hover:cursor-pointer">
                <img src={menu} alt="cat" className="inline w-[20px]" />
                <span className="font-semibold">FOOTER MENU</span></Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default Sidebar;
