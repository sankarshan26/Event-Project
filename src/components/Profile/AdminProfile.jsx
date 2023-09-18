import React,{useState} from 'react'
import Header from "../Header";
import profile from "../../assets2/Profile/profile.png";

function AdminProfile() {

    const [currstate, setCurrstate] = useState("Personal Details");
  return (
    <div className='bg-black min-h-screen'>
        <Header />

        <div className="content text-white flex font-cinzel flex-col sm:flex-row sm:gap-4 lg:gap-8">
        <div className="sidebar text-black font-semibold mt-4 flex justify-center sm:block ">
          <ul
            className="mt-6 flex flex-col items-center pt-4 sm:pt-24 pb-4 sm:pb-24 gap-4 w-[80%] sm:w-fit px-4 rounded-[1.5rem] sm:px-0 sm:rounded-none"
            style={{background:"linear-gradient(180deg, #FF5DEF 0%, rgba(185, 82, 247, 0.41) 100%)" ,"border-top-right-radius":"1.5rem"
            ,"border-bottom-right-radius":"1.5rem"}}
          >
            <li
              className="hover:cursor-pointer w-full py-3 text-xl sm:py-4 sm:px-12 text-center rounded-xl "
              style={
                currstate === "Personal Details"
                  ? {
                      color: "white",
                      background:
                        "linear-gradient(179.07deg, rgba(244, 138, 14, 0.48) 0.8%, rgba(244, 14, 207, 0.3744) 155.29%)",
                    }
                  : {}
              }
              onClick={() => {
                setCurrstate("Personal Details");
              }}
            >
              Personal Details
            </li>
            <li
              className="hover:cursor-pointer w-full py-3 text-xl sm:py-4 sm:px-12 text-center rounded-xl "
              style={
                currstate === "Security"
                  ? {
                      color: "white",
                      background:
                        "linear-gradient(179.07deg, rgba(244, 138, 14, 0.48) 0.8%, rgba(244, 14, 207, 0.3744) 155.29%)",
                    }
                  : {}
              }
              onClick={() => {
                setCurrstate("Security");
              }}
            >
              Security
            </li>
            <li
              className="hover:cursor-pointer w-full py-3 text-xl sm:py-4 sm:px-12 text-center rounded-xl "
              style={
                currstate === "UPDATE BANK DETAILS"
                  ? {
                      color: "white",
                      background:
                        "linear-gradient(179.07deg, rgba(244, 138, 14, 0.48) 0.8%, rgba(244, 14, 207, 0.3744) 155.29%)",
                    }
                  : {}
              }
              onClick={() => {
                setCurrstate("UPDATE BANK DETAILS");
              }}
            >
              UPDATE BANK DETAILS
            </li>
            <li
              className="hover:cursor-pointer w-full py-3 text-xl sm:py-4 sm:px-12 text-center rounded-xl "
              style={
                currstate === "ORGANIZER"
                  ? {
                      color: "white",
                      background:
                        "linear-gradient(179.07deg, rgba(244, 138, 14, 0.48) 0.8%, rgba(244, 14, 207, 0.3744) 155.29%)",
                    }
                  : {}
              }
              onClick={() => {
                setCurrstate("ORGANIZER");
              }}
            >
              ORGANIZER
            </li>
           
          </ul>
        </div>

        <div className="content pb-8 flex-1 mt-4 overflow-x-auto">
            {currstate==="Personal Details" && <form className='flex flex-col p-6'>
              <div className='flex justify-center w-full' > <img src={profile} alt="profile-img" className='w-[125px]'/></div>

              <div className='flex flex-col items-start md:flex-row mt-6 md:items-center gap-2 md:gap-4 lg:gap-6'>
                <label htmlFor="Avatar" className='font-cinzel font-bold text-xl text-center md:min-w-[100px]'>Avatar</label>
                <div className="border border-white flex-1 rounded-xl min-h-fit px-4 py-4 text-right w-full md:flex-1 " >
                <input id='upload-file' type="file" hidden /> <label htmlFor="upload-file" className='opacity-60 hover:cursor-pointer border border-white py-2 px-4 rounded-lg'>Choose file</label></div>
              </div>
              <div className='flex flex-col items-start md:flex-row mt-6 md:items-center gap-2 md:gap-4 lg:gap-6'>
                <label htmlFor="Avatar" className='font-cinzel font-bold text-xl text-center md:min-w-[100px]'>Name</label>
                <input name='name' type="text"  className='bg-black border border-white flex-1 rounded-xl min-h-fit px-4 py-4 w-full md:flex-1 '/> 
              </div>
              <div className='flex flex-col items-start md:flex-row mt-6 md:items-center gap-2 md:gap-4 lg:gap-6'>
                <label htmlFor="Avatar" className='font-cinzel font-bold text-xl text-center md:min-w-[100px]'>Email</label>
                <input name='email' type="email"  className='bg-black border border-white flex-1 rounded-xl min-h-fit px-4 py-4 w-full md:flex-1 '/> 
              </div>
              <div className='flex flex-col items-start md:flex-row mt-6 md:items-center gap-2 md:gap-4 lg:gap-6'>
                <label htmlFor="Avatar" className='font-cinzel font-bold text-xl text-center md:min-w-[100px]'>Address</label>
                <input name='address' type="text"  className='bg-black border border-white flex-1 rounded-xl min-h-fit px-4 py-4 w-full md:flex-1 '/> 
              </div>
              <div className='flex flex-col items-start md:flex-row mt-6 md:items-center gap-2 md:gap-4 lg:gap-6'>
                <label htmlFor="Avatar" className='font-cinzel font-bold text-xl text-center md:min-w-[100px]'>Phone</label>
                <input name='phone' type="tel"  className='bg-black border border-white flex-1 rounded-xl min-h-fit px-4 py-4 w-full md:flex-1 '/> 
              </div>

              <div className=" flex justify-center mt-4 sm:mt-6 md:mt-8 ">
              <button
                type="submit"
                style={{background:"linear-gradient(90deg, rgba(216, 7, 250, 0.76) 0%, #FF0CBB 94.49%)",}}
                className="w-fit px-8 py-3 rounded-2xl mt-4 font-cinzel font-semibold text-lg">Save</button>
            </div>
            </form> }

            {currstate==="Security" && <form className='flex flex-col p-6'>
              <div className='flex justify-center w-full' > <img src={profile} alt="profile-img" className='w-[125px]'/></div>
              <div className='flex flex-col items-start md:flex-row mt-6 md:items-center gap-2 md:gap-4 lg:gap-6'>
                <label htmlFor="Avatar" className='font-cinzel font-bold text-xl text-center'>CURRENT <br />Password</label>
                <input name='name' type="text"  className='bg-black border border-white flex-1 rounded-xl min-h-fit px-4 py-4 w-full md:flex-1 '/> 
              </div>
              
              <div className='flex flex-col items-start md:flex-row mt-6 md:items-center gap-2 md:gap-4 lg:gap-6'>
                <label htmlFor="Avatar" className='font-cinzel font-bold text-xl text-center'>NEW <br />Password</label>
                <input name='name' type="text"  className='bg-black border border-white flex-1 rounded-xl min-h-fit px-4 py-4 w-full md:flex-1 '/> 
              </div>
              <div className='flex flex-col items-start md:flex-row mt-6 md:items-center gap-2 md:gap-4 lg:gap-6'>
                <label htmlFor="Avatar" className='font-cinzel font-bold text-xl text-center'>Confirm<br />Password</label>
                <input name='address' type="text"  className='bg-black border border-white flex-1 rounded-xl min-h-fit px-4 py-4 w-full md:flex-1 '/> 
              </div>

              <div className=" flex justify-center mt-4 sm:mt-6 md:mt-12 ">
              <button
                type="submit"
                style={{background:"linear-gradient(90deg, rgba(216, 7, 250, 0.76) 0%, #FF0CBB 94.49%)",}}
                className="w-fit px-8 py-3 rounded-2xl mt-4 font-cinzel font-semibold text-lg">Save </button>
            </div>
            </form> }

            {currstate==="UPDATE BANK DETAILS" && <form className='flex flex-col p-6'>
              <div className='flex justify-center w-full' > <img src={profile} alt="profile-img" className='w-[125px]'/></div>

              <div className='flex flex-col items-start md:flex-row mt-6 md:items-center gap-2 md:gap-4 lg:gap-6'>
                <label htmlFor="Avatar" className='font-cinzel font-bold text-xl text-center md:min-w-[100px]'>BANK<br />CODE</label>
                <input name='name' type="text"  className='bg-black border border-white flex-1 rounded-xl min-h-fit px-4 py-4 w-full md:flex-1 '/> 
              </div>
              <div className='flex flex-col items-start md:flex-row mt-6 md:items-center gap-2 md:gap-4 lg:gap-6'>
                <label htmlFor="Avatar" className='font-cinzel font-bold text-xl text-center md:min-w-[100px]'>BANK<br />CODE</label>
                <input name='name' type="text"  className='bg-black border border-white flex-1 rounded-xl min-h-fit px-4 py-4 w-full md:flex-1 '/> 
              </div>
              <div className='flex flex-col items-start md:flex-row mt-6 md:items-center gap-2 md:gap-4 lg:gap-6'>
                <label htmlFor="Avatar" className='font-cinzel font-bold text-xl text-center md:min-w-[100px]'>BRANCH<br />NAME</label>
                <input name='address' type="text"  className='bg-black border border-white flex-1 rounded-xl min-h-fit px-4 py-4 w-full md:flex-1 '/> 
              </div>
              <div className='flex flex-col items-start md:flex-row mt-6 md:items-center gap-2 md:gap-4 lg:gap-6'>
                <label htmlFor="Avatar" className='font-cinzel font-bold text-xl text-center md:min-w-[100px]'>BRANCH<br />CODE</label>
                <input name='address' type="text"  className='bg-black border border-white flex-1 rounded-xl min-h-fit px-4 py-4 w-full md:flex-1 '/> 
              </div>
              <div className='flex flex-col items-start md:flex-row mt-6 md:items-center gap-2 md:gap-4 lg:gap-6'>
                <label htmlFor="Avatar" className='font-cinzel font-bold text-xl text-center md:min-w-[100px]'>bank a/c<br />name</label>
                <input name='address' type="text"  className='bg-black border border-white flex-1 rounded-xl min-h-fit px-4 py-4 w-full md:flex-1 '/> 
              </div>

              <div className=" flex justify-center mt-4 sm:mt-6 md:mt-12 ">
              <button
                type="submit"
                style={{background:"linear-gradient(90deg, rgba(216, 7, 250, 0.76) 0%, #FF0CBB 94.49%)",}}
                className="w-fit px-8 py-3 rounded-2xl mt-4 font-cinzel font-semibold text-lg">Save</button>
            </div>
            </form> }

            {currstate==="ORGANIZER" && <form className='flex flex-col p-6'>
              <div className='flex justify-center w-full' > <img src={profile} alt="profile-img" className='w-[125px]'/></div>

              <div className='flex flex-col items-start md:flex-row mt-6 md:items-center gap-2 md:gap-4 lg:gap-6'>
                <label htmlFor="Avatar" className='font-cinzel font-bold text-xl text-center '>ORGANIZATION<br />NAME</label>
                <input name='name' type="text"  className='bg-black border border-white flex-1 rounded-xl min-h-fit px-4 py-4 w-full md:flex-1 '/> 
              </div>

              <div className=" flex justify-center mt-4 sm:mt-6 md:mt-12 ">
              <button
                type="submit"
                style={{background:"linear-gradient(90deg, rgba(216, 7, 250, 0.76) 0%, #FF0CBB 94.49%)",}}
                className="w-fit px-8 py-3 rounded-2xl mt-4 md:mt-8 font-cinzel font-semibold text-lg">Save</button>
            </div>
            </form> }
        </div>
      </div>
    </div>
  )
}

export default AdminProfile ;