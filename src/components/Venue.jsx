import React from 'react'
import Header from "./Header";
import Footer from "./Footer"
import Ellipse90 from "../assets/Venue/Ellipse90.png"
import ny1 from "../assets/Venue/newyork1.png";
import ny2 from "../assets/Venue/newyork2.png";
import ny3 from "../assets/Venue/newyork3.png";
import ny4 from "../assets/Venue/newyork4.png";


function Venue({
    admin_dropdown,
    handleAdmin_dropdown,
    handlesmall_header_open,
    small_header_open,
  }) {
  return (
    <>
    <div className='bg-black font-cinzel' style={{"text-transform":"none"}}>
        <Header
          admin_dropdown={admin_dropdown}
          handleAdmin_dropdown={handleAdmin_dropdown}
          handlesmall_header_open={handlesmall_header_open}
          small_header_open={small_header_open}
        />

        <div className="flex flex-wrap sm:flex-nowrap justify-center gap-10 px-4 py-3 mt-8 z-10">
            <div className={small_header_open ? "opacity-10 sm:opacity-100 search rounded-xl flex min-w-[300px] bg-slate-100 h-fit font-bold px-3 py-5 relative justify-center items-center" :"search rounded-xl flex min-w-[300px] bg-slate-100 h-fit font-bold px-3 py-5 relative justify-center items-center"  }>
                <form className='flex flex-col relative ' >
                <span className='mb-3'>SEARCH VENUE</span>
                <input type="text" className="h-[50px]" style={{"border": "1px solid rgba(217, 217, 217, 1)", "border-radius":"15px"}}/>
                <span className='mb-3 mt-5'>COUNTRY</span>
                <input type="text" className="h-[50px]" style={{"border": "1px solid rgba(217, 217, 217, 1)", "border-radius":"15px"}}/>
                <span className='mb-3  mt-5'>CITY</span>
                <input type="text" className="h-[50px]" style={{"border": "1px solid rgba(217, 217, 217, 1)", "border-radius":"15px"}}/>
                    <div className='text-center mt-10 mb-15'>
                <button type="submit" className='mt-5 w-fit px-8 py-4 rounded-xl' style={{"background": "linear-gradient(90deg, rgba(216, 7, 250, 0.76) 0%, #FF0CBB 94.49%)"}}>RESET FILTERS</button>
                </div>
                </form>
                <img src={Ellipse90} alt="spot" className='w-[120px] absolute top-[-10px] right-[-10px]' />                
                <img src={Ellipse90} alt="spot" className='w-[120px] absolute bottom-[-10px] left-[-10px]' />
            </div>

            <div className="flex flex-wrap gap-10 items-center justify-center pb-10">
                <div className="card flex flex-col max-w-[300px] min-w-[260px] h-[350px] bg-white rounded-2xl">
                    <img src={ny1} alt="new york" />
                    <div className="flex-1 flex flex-col justify-center items-center gap-3">
                        <div className='text-xl font-cinzel font-bold'>NEWYORK, USA</div>
                        <div className='text-md font-cinzel font-bold uppercase'>Grand lema view</div>
                        <div className='text-sm font-cinzel font-bold uppercase'>barker street, 42</div>

                    </div>
                </div>
                <div className="card flex flex-col max-w-[300px] min-w-[260px] h-[350px] bg-white rounded-2xl">
                    <img src={ny2} alt="new york" />
                    <div className="flex-1 flex flex-col justify-center items-center gap-3">
                        <div className='text-xl font-cinzel font-bold'>NEWYORK, USA</div>
                        <div className='text-md font-cinzel font-bold uppercase'>Grand lema view</div>
                        <div className='text-sm font-cinzel font-bold uppercase'>barker street, 42</div>

                    </div>
                </div>
                <div className="card flex flex-col max-w-[300px] min-w-[260px] h-[350px] bg-white rounded-2xl">
                    <img src={ny3} alt="new york" />
                    <div className="flex-1 flex flex-col justify-center items-center gap-3">
                        <div className='text-xl font-cinzel font-bold'>NEWYORK, USA</div>
                        <div className='text-md font-cinzel font-bold uppercase'>Grand lema view</div>
                        <div className='text-sm font-cinzel font-bold uppercase'>barker street, 42</div>

                    </div>
                </div>
                <div className="card flex flex-col max-w-[300px] min-w-[260px] h-[350px] bg-white rounded-2xl">
                    <img src={ny4} alt="new york" />
                    <div className="flex-1 flex flex-col justify-center items-center gap-3">
                        <div className='text-xl font-cinzel font-bold'>NEWYORK, USA</div>
                        <div className='text-md font-cinzel font-bold uppercase'>Grand lema view</div>
                        <div className='text-sm font-cinzel font-bold uppercase'>barker street, 42</div>

                    </div>
                </div>

                <div className="card flex flex-col max-w-[300px] min-w-[260px] h-[350px] bg-white rounded-2xl">
                    <img src={ny1} alt="new york" />
                    <div className="flex-1 flex flex-col justify-center items-center gap-3">
                        <div className='text-xl font-cinzel font-bold'>NEWYORK, USA</div>
                        <div className='text-md font-cinzel font-bold uppercase'>Grand lema view</div>
                        <div className='text-sm font-cinzel font-bold uppercase'>barker street, 42</div>

                    </div>
                </div>
                <div className="card flex flex-col max-w-[300px] min-w-[260px] h-[350px] bg-white rounded-2xl">
                    <img src={ny2} alt="new york" />
                    <div className="flex-1 flex flex-col justify-center items-center gap-3">
                        <div className='text-xl font-cinzel font-bold'>NEWYORK, USA</div>
                        <div className='text-md font-cinzel font-bold uppercase'>Grand lema view</div>
                        <div className='text-sm font-cinzel font-bold uppercase'>barker street, 42</div>

                    </div>
                </div>
                <div className="card flex flex-col max-w-[300px] min-w-[260px] h-[350px] bg-white rounded-2xl">
                    <img src={ny3} alt="new york" />
                    <div className="flex-1 flex flex-col justify-center items-center gap-3">
                        <div className='text-xl font-cinzel font-bold'>NEWYORK, USA</div>
                        <div className='text-md font-cinzel font-bold uppercase'>Grand lema view</div>
                        <div className='text-sm font-cinzel font-bold uppercase'>barker street, 42</div>

                    </div>
                </div>
                <div className="card flex flex-col max-w-[300px] min-w-[260px] h-[350px] bg-white rounded-2xl">
                    <img src={ny4} alt="new york" />
                    <div className="flex-1 flex flex-col justify-center items-center gap-3">
                        <div className='text-xl font-cinzel font-bold'>NEWYORK, USA</div>
                        <div className='text-md font-cinzel font-bold uppercase'>Grand lema view</div>
                        <div className='text-sm font-cinzel font-bold uppercase'>barker street, 42</div>

                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className='bg-black pt-6' style={{"border-top":"1px solid white"}}>        
        <Footer />
        </div>
        </>
  )
}

export default Venue