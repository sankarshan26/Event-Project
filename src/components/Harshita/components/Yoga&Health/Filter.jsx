import React from "react";

const Filter = () => {
  return (
    <div className="border-2 border-pink-700  w-fit min-h-screen  p-4 text-white font-cinzel text-xl flex flex-col gap-4 rounded-xl">
        <Input field={'search event'} placeholder={'Type Event Name/Venue/City/State'}/>
      

      <Input field={'category'} placeholder={'choose category'}/>
      <div className="space-y-3 flex flex-col">
        <label for="date" className="text-sm sm:text-base lg:text-lg">Choose a car:</label>

        <select name="date" id="date" className="text-gray-900 border-0 outline-none rounded-xl text-xs md:text-sm p-2  md:px-4 m:py-3">
          <option value="" disabled selected >
            Select your option
          </option>
          <option value="">date1</option>
          <option value="">date2</option>
          <option value="">date3</option>
        </select>
      </div>
      <Input field={'price'} placeholder={'any price'}/>
      <Input field={'city'} placeholder={'Type Event Name/Venue/City/State'}/>
      <Input field={'country'} placeholder={'Type Event Name/Venue/City/State'}/>

<button className="flex justify-center items-center mt-5 p-2 md:px-4 md:py-2 bg-gradient-to-r from-fuchsia-600  to-pink-600 text-center rounded-full border-2 border-sky-400 font-medium gap-3 text-sm md:text-base"><p>result filter</p>
<svg className=" w-3 md:w-5" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.0832 16.5001C31.0832 24.5501 24.5498 31.0834 16.4998 31.0834C8.44984 31.0834 3.53525 22.9751 3.53525 22.9751M3.53525 22.9751H10.1269M3.53525 22.9751V30.2667M1.9165 16.5001C1.9165 8.45008 8.3915 1.91675 16.4998 1.91675C26.2269 1.91675 31.0832 10.0251 31.0832 10.0251M31.0832 10.0251V2.73341M31.0832 10.0251H24.6082" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>

    </div>
  );
};
const Input=({field,placeholder})=>{
  return(
    <div className="space-y-3 flex flex-col">
        <label htmlFor={field} className="text-sm sm:text-base lg:text-lg">{field}</label >
        <input
          type="text"
          id={field}
          placeholder={placeholder}
          className="border-0 outline-none rounded-xl text-xs md:text-sm p-2 md:px-4 md:py-3"
        />
        </div>
  )
}
export default Filter;
