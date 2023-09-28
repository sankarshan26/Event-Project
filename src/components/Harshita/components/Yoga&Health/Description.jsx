import React from "react";

const Description = () => {
  return (
    <div className="container mt-24 font-sans relative h-10/12 ">
      <img src="/yoga&health/descimg.png" alt="" className="w-full h-full z-10   " />
      <div className="bg-white rounded-xl px-3 py-3 h-fit md:h-72 -mt-9 md:-mt-12 w-11/12 mx-auto z-30 relative flex flex-col justify-between px-5   ">
        <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center ">
          <p className="font-semibold text-xl md:text-2xl">Description</p>
          <div className="flex  flex-wrap gap-2 md:gap-5 ms-auto text-xs sm:text-sm md:text-base font-semibold">
          <div className="flex gap-1 md:gap-3 ">
            <svg
              className="w-3 sm:w-5"
              viewBox="0 0 26 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.6665 6.26464C7.11984 6.26464 6.6665 5.79131 6.6665 5.22053V1.04411C6.6665 0.473328 7.11984 0 7.6665 0C8.21317 0 8.6665 0.473328 8.6665 1.04411V5.22053C8.6665 5.79131 8.21317 6.26464 7.6665 6.26464Z"
                fill="#2D9CDB"
              />
              <path
                d="M18.3335 6.26464C17.7868 6.26464 17.3335 5.79131 17.3335 5.22053V1.04411C17.3335 0.473328 17.7868 0 18.3335 0C18.8802 0 19.3335 0.473328 19.3335 1.04411V5.22053C19.3335 5.79131 18.8802 6.26464 18.3335 6.26464Z"
                fill="#2D9CDB"
              />
              <path
                d="M17 29.931H9C1.50667 29.931 0 26.2418 0 20.2834V11.6939C0 5.09516 2.13333 2.40833 7.61333 2.08813H18.3333H18.3867C23.8667 2.40833 26 5.09516 26 11.6939V20.2834C26 26.2418 24.4933 29.931 17 29.931ZM7.66667 4.17635C3.93333 4.39909 2 5.62417 2 11.6939V20.2834C2 25.6153 2.97333 27.8428 9 27.8428H17C23.0267 27.8428 24 25.6153 24 20.2834V11.6939C24 5.6381 22.08 4.39909 18.3067 4.17635H7.66667Z"
                fill="#2D9CDB"
              />
              <path
                d="M24.6668 23.806H1.3335C0.786829 23.806 0.333496 23.3327 0.333496 22.7619C0.333496 22.1911 0.786829 21.7178 1.3335 21.7178H24.6668C25.2135 21.7178 25.6668 22.1911 25.6668 22.7619C25.6668 23.3327 25.2135 23.806 24.6668 23.806Z"
                fill="#2D9CDB"
              />
              <path
                d="M12.9998 9.74487C11.3598 9.74487 9.97317 10.6776 9.97317 12.4874C9.97317 13.3505 10.3598 14.0048 10.9465 14.4225C10.1332 14.9236 9.6665 15.7311 9.6665 16.6777C9.6665 18.404 10.9332 19.4759 12.9998 19.4759C15.0532 19.4759 16.3332 18.404 16.3332 16.6777C16.3332 15.7311 15.8665 14.9097 15.0398 14.4225C15.6398 13.9909 16.0132 13.3505 16.0132 12.4874C16.0132 10.6776 14.6398 9.74487 12.9998 9.74487ZM12.9998 13.6986C12.3065 13.6986 11.7998 13.267 11.7998 12.5848C11.7998 11.8888 12.3065 11.4851 12.9998 11.4851C13.6932 11.4851 14.1998 11.8888 14.1998 12.5848C14.1998 13.267 13.6932 13.6986 12.9998 13.6986ZM12.9998 17.7497C12.1198 17.7497 11.4798 17.2903 11.4798 16.455C11.4798 15.6197 12.1198 15.1742 12.9998 15.1742C13.8798 15.1742 14.5198 15.6336 14.5198 16.455C14.5198 17.2903 13.8798 17.7497 12.9998 17.7497Z"
                fill="#2D9CDB"
              />
            </svg>

            <p className=" text-sky-400">20th Sept 2023</p>
          </div>
          <div className="flex gap-1 md:gap-3">
            <svg
              className="w-3 sm:w-5"
              viewBox="0 0 22 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9975 16.2175C8.49955 16.2175 6.45898 14.046 6.45898 11.3598C6.45898 8.67364 8.49955 6.51465 10.9975 6.51465C13.4955 6.51465 15.536 8.6862 15.536 11.3723C15.536 14.0585 13.4955 16.2175 10.9975 16.2175ZM10.9975 8.39749C9.47298 8.39749 8.2181 9.72804 8.2181 11.3723C8.2181 13.0167 9.46125 14.3472 10.9975 14.3472C12.5338 14.3472 13.7769 13.0167 13.7769 11.3723C13.7769 9.72804 12.5221 8.39749 10.9975 8.39749Z"
                fill="#E908B7"
              />
              <path
                d="M10.9964 27C9.26073 27 7.51333 26.2971 6.15295 24.9038C2.69337 21.3389 -1.12977 15.6527 0.312701 8.88703C1.61444 2.74895 6.62205 0 10.9964 0H11.0081C15.3824 0 20.39 2.74895 21.6918 8.89958C23.1225 15.6653 19.2994 21.3389 15.8398 24.9038C14.4794 26.2971 12.732 27 10.9964 27ZM10.9964 1.88285C7.58369 1.88285 3.19764 3.82845 2.03663 9.30125C0.77007 15.2134 4.24138 20.3096 7.38433 23.5356C9.41318 25.6318 12.5913 25.6318 14.6202 23.5356C17.7514 20.3096 21.2227 15.2134 19.9796 9.30125C18.8068 3.82845 14.4091 1.88285 10.9964 1.88285Z"
                fill="#E908B7"
              />
            </svg>

            <p className=" text-pink-600 ">
              Star Stadium, Kolkata
            </p>
          </div>
          </div>
        </div>
        <div>
          <p className=" text-sm sm:text-lg md:text-xl lg:text-2xl text-justify mt-2">
            With adopting yoga in life you acn get relief from daily stress,
            muscle pain, & all other problems in your life. Mental health & fit
            body is the key to success so be our guest to reduce all the
            problems from your lives & be a happy & fit person to conquer the
            world.
          </p>
        </div>
        <div className="flex justify-between items-center mt-3" >
            <div className="flex">
            <img src="/yoga&health/pf1.png" alt="" className="w-8 h-8 sm:w-10 sm:h-10  md:w-12 md:h-12 -mr-4 z-5 " />
          <img src="/yoga&health/pf2.png" alt="" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12  -mr-4 z-10" />
          <img src="/yoga&health/pf3.png" alt="" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12  -mr-4 z-20"/>
          <img src="/yoga&health/pf4.png" alt="" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12  -mr-4 z-30" />
          <div className="rounded-full bg-pink-600 text-black w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-center p-2 font-medium text-xs sm:text-sm md:text-lg z-40 relative" >7+</div>
            </div>
         <p className=" text-sm sm:text-base md:text-lg text-gray-600 font-semibold whitespace-nowrap">10 going</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
