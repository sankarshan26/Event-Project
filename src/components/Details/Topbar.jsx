import React from "react";
import { Menu } from "lucide-react";
import logo from "../../assets/Home/Kartexa-logo.png";
import global from "../../assets/Home/global.png";
import scan from "../../assets/Home/scan.png";
import adminpannel from "../../assets/Home/speedometer.png";
import profilecircle from "../../assets/Home/profilecircle.png";
import log_out from "../../assets/Home/logout.png";
import { admin_dropdown } from "../../App";
import { small_header_open } from "../../App";
import { useAtom } from "jotai";
import { Link } from "react-router-dom";

function Header() {
  const [admin_drop, handleAdmin_drop] = useAtom(admin_dropdown);
  const [small_header, handlesmall_header] = useAtom(small_header_open);
  return (
    <>
      <div className="bg-transparent hidden  md:flex items-center font-cinzel font-bold text-white  px-3 py-2 ">
        <div> <Link to="/home">
          <img src={logo} alt="Kartexa logo" className="sm:h-[50px]" /></Link>
        </div>
        <ul className="flex flex-1 justify-end items-center font-semibold gap-4 lg:gap-[5%]">
          <li className="hover:cursor-pointer"><Link to="/home">HOME</Link></li>
          <li className="hover:cursor-pointer"><Link to="/venue">VENUE</Link></li>
          <li className="hover:cursor-pointer"><Link to="/categories">CATEGORIES</Link></li>
          <li className="hover:cursor-pointer">BLOGS</li>
          <li
            className="hover:cursor-pointer text-white px-6 py-2 rounded-xl"
            style={{
              background:
                "linear-gradient(90deg, rgba(216, 7, 250, 0.76) 0%, #FF0CBB 94.49%)",
            }}
          >
          <Link to="/login">  
              SIGN IN</Link>
          </li>
          <li className="flex flex-row items-center hover:cursor-pointer">
            <img src={global} alt="" className="w-[25px]" />
            <svg
              class="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </li>
        </ul>
      </div>
      <div className="bg-transparent md:hidden flex justify-between items-center font-cinzel font-bold text-white  px-3 py-2 ">
        <div><Link to="/home">
          <img src={logo} alt="Kartexa logo" className="h-[40px] sm:h-[50px]" /></Link>
        </div>

        <div onClick={()=>{handlesmall_header(!small_header)}}>
          <Menu />
        </div>

        {
          <div className="absolute top-12 right-4">
            {small_header && (
              <ul className="flex flex-col flex-1 justify-end items-start font-semibold gap-4 lg:gap-[5%]">
                <li className="relative">
                  <button
                    id="dropdownNavbarLink"
                    data-dropdown-toggle="dropdownNavbar"
                    className="flex items-center justify-between w-full py-2 pr-4  rounded bg-transparent  "
                    onClick={()=>{handleAdmin_drop(!admin_drop)}}
                  >
                    ADMIN
                    <svg
                      class="w-2.5 h-2.5 ml-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  {admin_drop && (
                    <div
                      class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none font-cinzel font-semibold text-black"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabindex="-1"
                    >
                      <div class="py-1" role="none">
                        <Link
                          to="/admindashboard"
                          className=" flex  px-4 py-2  gap-3"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-0"
                        >
                          {" "}
                          <img
                            src={adminpannel}
                            className="inline"
                            alt="admin-pannel"
                          />{" "}
                          <span>Admin Pannel</span>
                        </Link>
                        <Link
                          to="/adminprofile"
                          className=" flex  px-4 py-2  gap-3"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-1"
                        >
                          <img
                            src={profilecircle}
                            className="inline"
                            alt="profile "
                          />
                          <span>Profile</span>
                        </Link>
                        <a
                          href="#"
                          className=" flex  px-4 py-2  gap-3"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-2"
                        >
                          <img
                            src={scan}
                            className="inline"
                            alt="scan ticket"
                          />{" "}
                          <span>Scan Ticket</span>
                        </a>
                        <Link
                          to="/login"
                          className=" flex  px-4 py-2  gap-3"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-2"
                        >
                          <img src={log_out} alt="logout" className="inline" />{" "}
                          <span>LOGOUT</span>
                        </Link>
                      </div>
                    </div>
                  )}
                </li>
                <li className="hover:cursor-pointer"><Link to="/details">CREATE EVENT</Link></li>
                <li className="hover:cursor-pointer"><Link to="/venue">VENUE</Link></li>
                <li className="hover:cursor-pointer"><Link to="/categories">CATEGORIES</Link></li>
                <li className="hover:cursor-pointer">BLOGS</li>
                <li className="flex flex-row items-center hover:cursor-pointer">
                  <img src={global} alt="" className="w-[25px]" />
                  <svg
                    class="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </li>
              </ul>
            )}
          </div>
        }
      </div>
    </>
  );
}

export default Header;
