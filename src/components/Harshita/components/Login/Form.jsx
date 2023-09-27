import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send data to an API
    console.log("Form data submitted:", formData);
  };
  return (
    <div className="relative z-10 font-cinzel w-[60vw] sm:w-[50vw] lg:w-[30vw] h-[55vh] m-auto rounded-xl text-black border-l-4 border-b-4 border-pink-500 flex items-center justify-center bg-white px-4 lg:px-8">
      <div className="max-w-md w-full space-y-8 ">
        <div>
          <h2 className="mt-6  text-center text-base md:text-xl lg:text-2xl font-bold">
            FILL YOUR DETAILS
          </h2>
        </div>
        <form className="mt-8 space-y-6 text-sm sm:text-base " onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="username" className="font-semibold">
                Email ID
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className=" relative block w-full px-3 py-2 border-1 border-pink-600  rounded-2xl focus:outline-none focus:z-10 sm:text-sm"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="font-semibold ">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className=" relative block w-full px-3 py-2 border-1 border-pink-600 rounded-2xl focus:outline-none focus:z-10 sm:text-sm"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="group bg-gradient-to-r from-fuchsia-500 to-pink-600  relative w-fit flex  justify-center py-1 px-3 sm:py-2 sm:px-5 border border-transparent text-sm md:text-lg font-medium rounded-2xl text-white  focus:outline-none "
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
