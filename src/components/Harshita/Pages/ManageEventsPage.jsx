import React from "react";
import Hero from "../components/ManageEvents/Hero";
import Sidebar from "../components/ManageEvents/Sidebar";
import ManageEvents from "../components/ManageEvents/ManageEvents";
const ManageEventsPage = () => {
  return (
    <div className="  bg-black font-cinzel w-full overflow-x-hidden overflow-y-auto ">
      <Hero />
      <button className="m-4 w-fit flex gap-2 items-center ms-auto  bg-gradient-to-r from-purple-500 to-pink-600  px-3 py-2 me-5 rounded-full font-semibold">
        <svg
          className="w-5 md:w-8 "
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.0417 6.0625C18.1459 6.0625 12.5417 11.6667 12.5417 18.5625V24.5833C12.5417 25.8542 12.0001 27.7917 11.3542 28.875L8.95839 32.8542C7.47923 35.3125 8.50006 38.0417 11.2084 38.9583C20.1876 41.9583 29.8751 41.9583 38.8542 38.9583C41.3751 38.125 42.4792 35.1458 41.1042 32.8542L38.7084 28.875C38.0834 27.7917 37.5417 25.8542 37.5417 24.5833V18.5625C37.5417 11.6875 31.9167 6.0625 25.0417 6.0625Z"
            stroke="black"
            stroke-width="3"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
          <path
            d="M28.8958 6.66699C26.3765 5.94947 23.7069 5.94947 21.1875 6.66699C21.7917 5.12533 23.2917 4.04199 25.0417 4.04199C26.7917 4.04199 28.2917 5.12533 28.8958 6.66699Z"
            stroke="black"
            stroke-width="3"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M31.2915 39.708C31.2915 43.1455 28.479 45.958 25.0415 45.958C23.3332 45.958 21.7498 45.2497 20.6248 44.1247C19.4543 42.9524 18.7952 41.3646 18.7915 39.708"
            stroke="black"
            stroke-width="3"
            stroke-miterlimit="10"
          />
        </svg>

        <p className=" text-sm sm:text-lg ">Notifications</p>
      </button>
      <div className="flex  relative   ">
        <Sidebar/>
        <ManageEvents />
      </div>
    </div>
  );
};

export default ManageEventsPage;
