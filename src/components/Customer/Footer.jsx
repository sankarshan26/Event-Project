import React from 'react'
import { Link } from 'react-router-dom'
import Whatsapp from "../../assets/CustomerAssests/whatsapp.svg"
import Twitter from "../../assets/CustomerAssests/twitter.svg"
import Facebook from "../../assets/CustomerAssests/facebook.svg"
import Insta from "../../assets/CustomerAssests/insta.svg"
import Logo from "../../assets/CustomerAssests/logo.png"
import './Header.css'
const Footer = () => {
    return (
        <>
            <div className=' font-[Cinzel] font-bold flex flex-col items-center m-2 p-2 border-2 border-white justify-between mt-5 '>
                <div className="flex flex-col items-center">
                    <img src={ Logo } alt="" className='w-44' />
                    <h1 className='text-3xl m-4 text-[#D50AF5]'>
                        Unlock Memorable Experiences
                    </h1>
                </div>
                <div className="flex flex-wrap justify-around w-[80vw]">
                    <div className="flex flex-col">
                        <Link>About Us</Link>
                        <div className="mt-6"></div>
                        <Link to="blog-customer" >Blogs</Link>
                        <div className="mt-6"></div>
                        <Link>Terms & Conditions</Link>
                        <div className="mt-6"></div>
                        <Link>Privacy Policy</Link>
                    </div>
                    <div className="my-4">
                        <h2>Get our newsletter</h2>
                        <div className="btn mt-3">
                            <input type="text" placeholder='Your email id please' className='bg-transparent p-3 ' />
                            <button type="submit" className='  text-md  border-gradient bg-gradient-to-r from-[#D807FA] to-[#FF0CBB] text-white px-6 py-4 rounded-xl font-bold'>Submit</button>
                        </div>
                    </div>
                    <div className="">
                        <h2>Contact Us</h2>
                        <div className="mt-6"></div>
                        <h2 className='font-normal'>+06736238738</h2>
                        <div className="mt-6"></div>
                        <h2>Email id</h2>
                        <div className="mt-6"></div>
                        <h2 className='font-normal'>kartexaevents45@gmail,com</h2>
                        <div className="mt-6"></div>
                        <h2>Location</h2>
                        <div className="mt-6"></div>
                        <h2 className='font-normal'>ADvjhskjsakjalksl</h2>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex justify-between">
                        <img src={ Facebook } alt="" className='w-12 m-3' />
                        <img src={ Insta } alt="" className='w-12 m-3' />
                        <img src={ Whatsapp } alt="" className='w-12 m-3' />
                        <img src={ Twitter } alt="" className='w-12 m-3' />
                    </div>
                    <h3>Follow us</h3>
                </div>
            </div>

        </>
    )
}

export default Footer