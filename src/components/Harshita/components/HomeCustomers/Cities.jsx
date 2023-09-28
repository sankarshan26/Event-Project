import React from "react";

const Cities = () => {
  return (
    <div className=" mt-24 text-center">
      <p className="text-white text-xl sm:text-2xl lg:text-3xl font-medium text-center font-cinzel">Explore Best ciities</p>
      <div className="mt-8">
        <div class="card bg-dark text-white">
          <img class="card-img" src={'/HomeCustomers/london.png'} alt="Card image" />
          <div class="card-img-overlay flex justify-center items-center">
            <h5 class="card-title text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold">London</h5>
          </div>
        </div>
      </div>
      <button className="mt-4 md:mt-8">
      <svg className="w-7 h-7 md:w-10 md:h-10" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.78598 20.9608C9.56703 20.1797 10.8334 20.1797 11.6144 20.9608L27.9144 37.2608C29.0584 38.4047 30.942 38.4047 32.086 37.2608L48.386 20.9608C49.167 20.1797 50.4334 20.1797 51.2144 20.9608C51.9955 21.7418 51.9955 23.0082 51.2144 23.7892L34.9144 40.0892C32.2084 42.7953 27.792 42.7953 25.086 40.0892L8.78598 23.7892C8.00493 23.0082 8.00493 21.7418 8.78598 20.9608Z" fill="white"/>
</svg>

      </button>
    </div>
  );
};

export default Cities;
