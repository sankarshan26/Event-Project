import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
import newyork from "../assets/LuxeView/newyork.png";
import cafe from "../assets/LuxeView/Cafes.png"
import games from "../assets/LuxeView/Games.png"
import parking from "../assets/LuxeView/Parking.png"
import tree from "../assets/LuxeView/tree.png"
import breakfast1 from "../assets/LuxeView/breakfast.png"
import breakfast2 from "../assets/LuxeView/breakfast2.png"

function Luxeview() {
  return (
    <div className='bg-black' style={{"text-transform":"none"}}>
        <Header/>

        <div className='flex flex-col text-white font-cinzel'>
            <div className=' flex justify-center '><img src={newyork} alt="" className=' w-[90%] max-w-[1000px]' /></div>
            <div className='text-center px-4 lg:px-24 flex justify-center text-[16px] md:text-[20px]  '>
                <div className='w-[90%] max-w-[1000px]'>The Grand Lema View stands as a breathtaking testament to architectural ingenuity, inspiring awe and wonder in all who lay eyes upon its remarkable presence. This visionary structure, meticulously crafted as a mock representation of the renowned Grand Lema View, captures the essence of grandeur and elegance while offering a unique and immersive experience.</div>
            
            </div>
        </div>

        <div className='text-white font-semibold mt-24 text-center mb-8 text-lg font-cinzel'>Facilities</div>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-16 lg:gap-20 ">
            <div className='flex flex-col items-center justify-center p-4 gap-2 rounded-xl' style={{background:"linear-gradient(90deg, rgba(216, 7, 250, 0.76) 0%, #FF0CBB 94.49%)",}}>
                <img src={parking} alt="" className='w-[40px]' />
                <div className='text-black font-extrabold font-cinzel text-xl text-center w-[90px] h-[40px]'>PARKING</div>
            </div>

            <div className='flex flex-col items-center justify-center p-4 gap-2 rounded-xl' style={{background:"linear-gradient(90deg, rgba(216, 7, 250, 0.76) 0%, #FF0CBB 94.49%)",}}>
                <img src={cafe} alt="" className='w-[40px]' />
                <div className='text-black font-extrabold font-cinzel text-xl text-center w-[90px] h-[40px]'>CAFES</div>
            </div>

            <div className='flex flex-col items-center justify-center p-4 gap-2 rounded-xl' style={{background:"linear-gradient(90deg, rgba(216, 7, 250, 0.76) 0%, #FF0CBB 94.49%)",}}>
                <img src={games} alt="" className='w-[40px]' />
                <div className='text-black font-extrabold font-cinzel text-xl text-center w-[90px] h-[40px]' >GAMING <br />ZONES</div>
            </div>

            <div className='flex flex-col items-center justify-center p-4 gap-2 rounded-xl' style={{background:"linear-gradient(90deg, rgba(216, 7, 250, 0.76) 0%, #FF0CBB 94.49%)",}}>
                <img src={tree} alt="" className='w-[40px]' />
                <div className='text-black font-extrabold font-cinzel text-xl text-center w-[90px] h-[40px]'>PARK</div>
            </div>
        </div>
        
        <div className='text-white font-semibold mt-16 text-center mb-8 text-lg font-cinzel'>PRICING</div>
        <div className=' flex justify-center '>
            <div className=' w-[90%] max-w-[1000px] p-4 md:p-16 flex flex-col justify-center items-center rounded-xl'  style={{background:"linear-gradient(90deg, rgba(216, 7, 250, 0.76) 0%, #FF0CBB 94.49%)","text-transform":"none"}}>
                <div className="flex flex-col">
               <div className="text-black font-bold font-cinzel text-xl mb-5">Pricing</div> 
               <ul className='list-disc pl-4'>
                <li className='text-xl '>Single Registration: $60 per person </li>
                <li className='text-xl'>Group Registration (4 or more participants): $50 per person </li>
               </ul>
               <div className='mt-10 font-extrabold text-xl'>Note: All ingredients and cooking utensils will be provided.</div>
            </div></div>
        </div>
        
        <div className='text-white font-semibold mt-12 text-center mb-8 text-lg font-cinzel'>FOOD & BEVERAGE</div>
        <div className=' flex justify-center pb-10' style={{"border-bottom":"1px solid white"}}>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-10  w-[90%] max-w-[1000px] p-4 lg:p-12'>
            <div className='flex justify-center items-center'>
                <img src={breakfast1} alt="" className='min-w-[220px] max-w-[250px]' />
            </div>
            <div className='text-white text-center font-cinzel font-bold md:whitespace-nowrap'>
            All food and beverage handled by venue <br />
            - Venue must approve all decorations <br />
            - No rice, birdseed, confetti, etc. <br />
            - Catering provided by venue <br />
            - Smoking outside only 
            </div>
            <div className='flex justify-center items-center'>
                <img src={breakfast2} alt="" className='min-w-[220px] max-w-[250px]' />
            </div>
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default Luxeview;