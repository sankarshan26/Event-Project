import React, { useState } from "react";

const Navbar = () => {
  const [isNavbarOpen,setNavbarOpen]=useState(false)
  const [isCategoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [isLoginDropdownOpen, setLoginDropdownOpen] = useState(false);

  const toggleCategoryDropdown = () => {
    setCategoryDropdownOpen(!isCategoryDropdownOpen);
  };
  const toggleLoginDropdown = () => {
    setLoginDropdownOpen(!isLoginDropdownOpen);
  };

  const closeCategoryDropdown = () => {
    setCategoryDropdownOpen(false);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to open the menu
  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  let login = true;
  return (
    <nav class="fixed  w-full z-40 top-3 left-0 font-cinzel py-2 px-3  ">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto text-lg ">
        <a href="#" class="flex items-center">
          <img src="/logo.png" alt="" className=" w-24 md:w-32 lg:w-36" />
        </a>
        <div class="flex md:order-2">
          <div className="flex gap-2 lg:gap-3 items-center ">
            {!login ? (
              <button className="bg-gradient-to-r from-fuchsia-500 to-pink-600 w-fit py-2 px-4 text-sm font-medium rounded-xl text-white focus:outline-none ">
                LOG IN
              </button>
            ) : (
              <div className="flex gap-1 md:gap-2 lg:gap-3 items-center">
                <img
                  src="/navbarProfile.png"
                  alt=""
                  className="rounded-full w-9 md:w-10 lg:w-14"
                />
                <p className="text-white font-semibold font-cinzel text-sm sm:text-base md:text-lg lg:text-xl">
                  Martha
                </p>
              </div>
            )}
            <div className="flex  gap-1">
              <svg
                className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.66699 25C2.66699 12.6653 12.6656 2.66663 25.0003 2.66663C37.335 2.66663 47.3337 12.6653 47.3337 25C47.3337 37.3346 37.335 47.3333 25.0003 47.3333C12.6656 47.3333 2.66699 37.3346 2.66699 25ZM25.0003 5.66663C14.3225 5.66663 5.66699 14.3221 5.66699 25C5.66699 35.6778 14.3225 44.3333 25.0003 44.3333C35.6782 44.3333 44.3337 35.6778 44.3337 25C44.3337 14.3221 35.6782 5.66663 25.0003 5.66663Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M30.775 4.82722C31.5608 4.56491 32.4105 4.98929 32.6728 5.77509C36.8381 18.2533 36.8381 31.7468 32.6728 44.225C32.4105 45.0108 31.5608 45.4352 30.775 45.1729C29.9892 44.9106 29.5648 44.0609 29.8271 43.2751C33.7867 31.4134 33.7867 18.5867 29.8271 6.72499C29.5648 5.93919 29.9892 5.08953 30.775 4.82722ZM15.1666 6.25004C15.1666 5.42161 15.8382 4.75004 16.6666 4.75004H18.7499C19.2322 4.75004 19.6851 4.98193 19.967 5.37324C20.2489 5.76454 20.3255 6.26753 20.1728 6.72499C16.2132 18.5867 16.2132 31.4134 20.1728 43.2751C20.3255 43.7326 20.2489 44.2355 19.967 44.6268C19.6851 45.0182 19.2322 45.25 18.7499 45.25H16.6666C15.8382 45.25 15.1666 44.5785 15.1666 43.75C15.1666 42.9216 15.8382 42.25 16.6666 42.25H16.7051C13.3691 30.9926 13.3691 19.0075 16.7051 7.75004H16.6666C15.8382 7.75004 15.1666 7.07847 15.1666 6.25004Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M43.2755 20.1728C31.4138 16.2132 18.587 16.2132 6.72536 20.1728C5.93955 20.4351 5.08989 20.0107 4.82759 19.2249C4.56528 18.4391 4.98965 17.5894 5.77546 17.3271C18.2537 13.1618 31.7472 13.1618 44.2254 17.3271C45.0112 17.5894 45.4355 18.4391 45.1732 19.2249C44.9109 20.0107 44.0613 20.4351 43.2755 20.1728ZM5.3736 30.0329C5.76491 29.751 6.26789 29.6744 6.72536 29.8271C18.587 33.7867 31.4138 33.7867 43.2755 29.8271C43.7329 29.6744 44.2359 29.751 44.6272 30.0329C45.0185 30.3148 45.2504 30.7677 45.2504 31.2499V33.3333C45.2504 34.1617 44.5788 34.8333 43.7504 34.8333C42.922 34.8333 42.2504 34.1617 42.2504 33.3333V33.2948C30.993 36.6308 19.0078 36.6308 7.75041 33.2948V33.3333C7.75041 34.1617 7.07883 34.8333 6.25041 34.8333C5.42198 34.8333 4.75041 34.1617 4.75041 33.3333V31.2499C4.75041 30.7677 4.9823 30.3148 5.3736 30.0329Z"
                  fill="white"
                />
              </svg>
              <div className="relative inline-block text-left">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 cursor-pointer"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={toggleLoginDropdown}
                >
                  <path
                    d="M33.1998 14.9166L22.3331 25.7833C21.0498 27.0666 18.9498 27.0666 17.6665 25.7833L6.7998 14.9166"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {isLoginDropdownOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Customer
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Admin
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Organizer
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center m-1 p-2 w-8 h-8 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={openMenu}
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class={`"items-center justify-between  md:bg-transparent w-full text-sm md:text-lg lg:text-xl md:flex md:text-white md:w-auto md:order-1" ${isMenuOpen?'block transform transition-all duration-300 ease-in-out bg-white text-black rounded-lg':'hidden'}`}
          id="navbar-sticky"
        >
          <ul class="flex flex-col  md:p-0 font-semibold  rounded-lg  md:flex-row md:space-x-8 md:mt-0 ">
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4   md:p-0 hover:bg-pink-700/25 hover:text-black "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 md:p-0  hover:bg-pink-700/25 hover:text-black ">
                VENUE
              </a>
            </li>
            <li className="relative inline-block">
              <a
                href="#"
                className="block py-2 pl-3 pr-4 md:p-0 hover:bg-pink-700/25 hover:text-black "
                onMouseEnter={toggleCategoryDropdown}
                onMouseLeave={closeCategoryDropdown}
              >
                CATEGORIES
              </a>
              {isCategoryDropdownOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Category 1
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Category 2
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Category 3
                    </a>
                  </div>
                </div>
              )}
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4  md:p-0  hover:bg-pink-700/25 hover:text-black  ">
                BLOGS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
