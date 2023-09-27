import React, { useState } from 'react'
import Logo from "../../assets/CustomerAssests/logo.png"
import Avatar from "../../assets/CustomerAssests/avatar.png"
import Globe from "../../assets/CustomerAssests/globe.svg"
import { Link } from 'react-router-dom'
import L from '../../assets/CustomerAssests/embellishments/l.svg'


const Nav = () => {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <><div className="flex  justify-around h-12   ">
            <img src={ Logo } alt="" />
            <div className="flex hidden md:block self-center justify-around">
                <Link className='m-4'>Home</Link>
                <Link className='m-4'> Venue</Link>
                <Link className='m-4'>Categories</Link>
                <Link className='m-4' to="blog-customer">Blogs</Link>
            </div>
            <div className="hidden md:flex">
                <div className="flex  justify-around ">
                    <img src={ Avatar } alt="" />
                    <h1 className='self-center m-4' >Martha</h1>
                    <img src={ Globe } alt="" />
                </div>
            </div>

            <div className=" flex flex-col md:hidden z-50  cursor-pointer hover:animate-pulse " onClick={ (e) => {
                e.preventDefault()
                setIsOpen(!isOpen)
            } }>
                <div className="w-10  p-[0.15rem] m-1 bg-white"></div>
                <div className="w-10  p-[0.15rem] m-1 bg-white"></div>
                <div className="w-10  p-[0.15rem] m-1 bg-white"></div>
            </div>

        </div>
            { isOpen && <div className="bg-black w-screen h-screen absolute top-0 left-0 ">
                <div className="flex-col flex   self-center justify-around">
                    <Link className='m-4'>Home</Link>
                    <Link className='m-4'> Venue</Link>
                    <Link className='m-4'>Categories</Link>
                    <Link className='m-4' to="blog-customer">Blogs</Link>
                </div>
                <img src={ L } alt="" className='m-0 my-6' />
                <div className="">
                    <div className="flex justify-center m-auto">
                        <img src={ Avatar } alt="" className='' />
                        <h1 className='self-center m-4 ' >Martha</h1>
                        <img src={ Globe } alt="" />
                    </div>
                </div>
            </div> }
        </>

    )
}

export default Nav