import React from 'react'
import Footer from './Footer'
import Header from './Header'
import BG8 from '../../assets/CustomerAssests/bg8.png'
import Logo from '../../assets/CustomerAssests/logo.png'
import Carousel from './Carousel'
import Avatars from '../../assets/CustomerAssests/avatars.png'
import EDU1 from '../../assets/CustomerAssests/edu1.png'
import EDU2 from '../../assets/CustomerAssests/edu2.png'
import EDU3 from '../../assets/CustomerAssests/edu3.png'
import EDU4 from '../../assets/CustomerAssests/edu4.png'
import D2 from '../../assets/CustomerAssests/D2.png'
import Calendar from '../../assets/CustomerAssests/calendar.svg'
import Hour from '../../assets/CustomerAssests/hour.svg'
import Location from '../../assets/CustomerAssests/location.svg'
import M from '../../assets/CustomerAssests/m.png'
import './Header.css'

const Component = ({ iphoto, e, iname }) => {
    return (
        <>
            <div className="m-4"  >
                <div className='bg-white  w-[70vw] sm:w-max md:w-[20vw] items-center m-auto text-black font-bold rounded-b-xl pb-4'>
                    <img src={ iphoto } alt="" className='mb-7' />
                    <div className="mb-8">
                        <h3 className='inline ' >{ e }</h3>
                        <p className='inline'>| Instructor { iname }</p>

                    </div>
                    <div className="">
                        <div className="flex justify-start my-4">
                            <img src={ Calendar } alt="" className='mx-4 w-7' />
                            <p>20th Sept 2023</p>
                        </div>
                        <div className="flex justify-start my-4">
                            <img src={ Location } alt="" className='mx-4 w-7' />
                            <p>Star Stadium, Kolkata</p>
                        </div>
                        <div className="flex justify-start my-4">
                            <img src={ Hour } alt="" className='mx-4 w-7' />
                            <p>1 hours</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Business = () => {
    return (
        <>
            <div className="font-[Cinzel]  h-screen text-xl" style={ {
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1) 1%, rgba(0, 0, 0, 0) 30%), url(${BG8})`,
                top: 0,
                backgroundRepeat: "no-repeat"
                ,
                backgroundSize: "cover"
            } }>
                <div className=" p-4 ">
                    <nav>
                        <div className="flex  justify-around h-12   ">
                            <img src={ Logo } alt="" />
                            <button className='  text-xl block border-gradient bg-gradient-to-r from-[#D807FA] to-[#FF0CBB] text-white  p-1 rounded-xl font-bold w-36'>Sign in</button>
                        </div>
                    </nav>
                    <div className="flex justify-evenly items-center mt-[15vh] md:mt-[30vh]">
                        <div className=""></div>
                        <div className=" flex flex-col items-center">
                            <h1 className="h1 text-5xl font-bold text-[#F05297] ">
                                Unlock
                            </h1>
                            <h2 className="h2 text-4xl font-bold mt-8" >
                                Unlock your Potential: Empowering Minds, Inspiring  <span className='text-[#F05297]'>Futures</span>
                            </h2>
                            <p>BooK your seats now</p>
                            <div className="mt-8">
                            </div>
                            <form className='mt-12'>
                                <label htmlFor="default-search" className="mb-2 text-xl font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg className="w-8 h-8 ml-4 mr-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input type="search" id="default-search" className="block w-[90vw] h-[10vh] mt-4 rounded-full text-2xl p-4 pl-20  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

            </div >
            <div className="flex flex-col md:flex-row justify-around mt-4">
                <div className="md:w-[40vw] text-left btn p-6">
                    <form >
                        <h1 className='my-4'>Search Event  </h1>
                        <input type="text" className='p-4 rounded-2xl w-full' placeholder='Type Event Name/Venue/City/State' />
                        <h1 className='my-4'>Category </h1>
                        <input type="text" className='p-4 rounded-2xl w-full' placeholder='Choose Category' />
                        <h1 className='my-4'>Date</h1>
                        <input type="text" className='p-4 rounded-2xl w-full' placeholder='Choose your date/ time' />
                        <h1 className='my-4'>Price  </h1>
                        <input type="text" className='p-4 rounded-2xl w-full' placeholder='Any Price' />
                        <h1 className='my-4'>City</h1>
                        <input type="text" className='p-4 rounded-2xl w-full' placeholder='Type Event Name/Venue/City/State' />
                        <h1 className='my-4'>Country</h1>
                        <input type="text" className='p-4 rounded-2xl w-full' placeholder='Type Event Name/Venue/City/State' />
                        <button className='    text-3xl block border-gradient bg-gradient-to-r from-[#D807FA] to-[#FF0CBB] text-white   rounded-xl font-bold p-4 font-[Cinzel] m-8 '>Reset filters</button>
                    </form>
                </div>
                <div className="md:w-[40vw]  text-left">
                    <div className="
                    flex flex-wrap md:flex-nowrap">
                        <Component e="strategic planning" iphoto={ EDU1 } iname="Ally" />
                    </div>
                    <div className="
                    flex flex-wrap md:flex-nowrap">
                        <Component e="leadership development" iphoto={ EDU3 } iname="Joe" />
                    </div>
                </div>
            </div >
            <img src={ D2 } alt="" className='w-[80vw] m-auto mt-5' />
            <div className="m-auto w-[80vw] mt-5 text-left rounded-xl p-4 px-8 bg-white text-black">
                <div className="flex">
                    <p className='inline flex-grow text-3xl mt-4 mb-4 font-bold '>Description</p>
                    <div className="flex">
                        <div className="flex justify-start my-4">
                            <img src={ Calendar } alt="" className='mx-4 w-7' />
                            <p>20th Sept 2023</p>
                        </div>
                        <div className="flex justify-start my-4">
                            <img src={ Location } alt="" className='mx-4 w-7' />
                            <p>Star Stadium, Kolkata</p>
                        </div>
                    </div>
                </div>
                <p className='text-xl'>Business events are gatherings designed to bring together professionals, entrepreneurs, and industry experts to exchange knowledge, explore opportunities, and foster meaningful connections within a specific industry or business sector. These events can take various forms, such as conferences, trade shows, workshops, or networking events.</p>
                <div className="flex mt-7">
                    <div className="flex-grow">

                        <img src={ Avatars } alt="" className='h-12 ' />
                    </div>
                    <p className='text-2xl text-gray-500 '> 10 going</p>
                </div>
            </div>
            <button className='  text-3xl block border-gradient bg-gradient-to-r from-[#D807FA] to-[#FF0CBB] text-white   rounded-xl font-bold p-4 font-[Cinzel] m-8 ml-24'>Location</button>
            <img src={ M } alt="" className='w-[80vw] m-auto mt-5' />
            <h1 className='m-12 text-left text-2xl font-bold'>Contact Information:</h1>
            <p className='ml-12 text-left text-2xl'>For any inquiries or additional information, please contact us at:<br />Email: Kevents32@gmail.com <br />Phone: 5993032290</p>
            <Footer />
        </>
    )
}

export default Business