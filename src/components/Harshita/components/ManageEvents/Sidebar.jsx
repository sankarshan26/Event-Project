import React, { useState } from "react";

const Sidebar = () => {
  const sideImg = [
    {
      img: "/ManageEvents/Man.png",
    },
    {
      img: "/ManageEvents/grid.png",
    },
    {
      img: "/ManageEvents/speedometer.png",
    },
    {
      img: "/ManageEvents/calendar.png",
    },
    {
      img: "/ManageEvents/ticket.png",
    },
    {
      img: "/ManageEvents/emptywallet.png",
    },
    {
      img: "/ManageEvents/book.png",
    },
    {
      img: "/ManageEvents/book.png",
    },
    {
      img: "/ManageEvents/book.png",
    },
    {
      img: "/ManageEvents/messagesquare.png",
    },
    {
      img: "/ManageEvents/gallery.png",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative w-24 min-h-screen overflow-y-auto overflow-x-auto z-10  no-scrollbar  ">
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={toggleSidebar}

      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="logo-sidebar"
        className={`absolute top-0 left-0 z-40 w-full min-h-screen transition-transform -translate-x-full sm:translate-x-0 ${isOpen ? 'translate-x-0 ' : '-translate-x-full  '}`}
        aria-label="Sidebar"
        
      >
        <div class=" px-3 py-4 overflow-y-auto min-h-screen  bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl ">
          <a href="#" class="flex items-center pl-2.5 mb-5">
            <img src="/logo.png" class="h-6 mr-3 sm:h-7" alt="Flowbite Logo" />
          </a>
          <ul class="space-y-2 font-medium flex flex-col gap-3 items-center ">
            {sideImg.map((btn) => (
              <li>
                <img src={btn.img} alt="" className="w-7 md:w-9 mb-3  md:mb-2" />
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
