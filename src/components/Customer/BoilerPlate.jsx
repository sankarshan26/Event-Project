import React from 'react'
import Carousel from './Carousel'
import S1 from '../../assets/CustomerAssests/s1.png'
import S2 from '../../assets/CustomerAssests/s2.png'
import S3 from '../../assets/CustomerAssests/s3.png'
import IC1 from '../../assets/CustomerAssests/embellishments/ic1.svg'
import IC2 from '../../assets/CustomerAssests/embellishments/ic2.svg'
import IC3 from '../../assets/CustomerAssests/embellishments/ic3.svg'
import IC4 from '../../assets/CustomerAssests/embellishments/ic4.svg'
import E1 from '../../assets/CustomerAssests/embellishments/e1.png'
import E2 from '../../assets/CustomerAssests/embellishments/e2.png'
import E3 from '../../assets/CustomerAssests/embellishments/e3.png'
import L from '../../assets/CustomerAssests/embellishments/l.svg'
import location from '../../assets/CustomerAssests/locationblk.svg'
import hour from '../../assets/CustomerAssests/hourblk.svg'
import { useAtom } from 'jotai'
import { gtitle, gsubtitle, gbackground } from '../../App'
import Header from './Header'
import Footer from './Footer'


const Common = ({ t, content }) => {
    return (
        <>
            <img src={ E3 } className='w-36 absolute' />
            <h1 className='text-left text-4xl mt-24 font-bold ml-4 mb-8  '>{ t }</h1>
            <p className='text-2xl w-[60vw] mt-4  m-auto'>{ content }</p>
            <img src={ L } alt="" className='m-4 ' />
        </>
    )
}

const BoilerPlate = ({ title, subtitle, event, learn, audience, instructor, events, photo, i }) => {
    const [mtitle, setTitle] = useAtom(gtitle)
    const [msubtitle, setSubtitle] = useAtom(gsubtitle)
    const [bg, setBg] = useAtom(gbackground)
    setTitle(title)
    setSubtitle(subtitle)
    setBg(photo)
    return (
        <>
            <div className="text-white bg-black">
                 <Header />
            <div className="mx-8">
                <Carousel events={ events } />
                <Common t="Event Information/ Facilities" content={ event } />
                <img src={ E1 } alt="" className='mr-0 m-auto w-48 md:w-auto mt-[-1em] md:mt-[-12em]' />
                {
                    learn != "" &&
                    < Common t="What You wil Learn" content={ learn } />
                }
                <Common t="Target Audience" content={ audience } />
                <img src={ E2 } alt="" className='mt-[-2em] md:mt-[-8em] w-40' />
                {/* Icons */ }
                <div className="flex  flex-wrap md:flex-row justify-around mt-7">
                    <div className="mt-4 m-auto text-black font-bold text-2xl flex flex-col bg-blue w-36 h-48 rounded-2xl p-4 bg-gradient-to-b from-[#D029EB] to-[#F40E8A]">
                        <img src={ IC1 } alt="" />
                        <h2 >Parking</h2>
                    </div>
                    <div className="mt-4 m-auto text-black font-bold text-2xl flex flex-col bg-blue w-36 h-48 rounded-2xl p-4 bg-gradient-to-b from-[#D029EB] to-[#F40E8A]">
                        <img src={ IC2 } alt="" />
                        <h2>Cafes</h2>
                    </div>
                    <div className="mt-4 m-auto text-black font-bold text-2xl flex flex-col bg-blue w-36 h-48 rounded-2xl p-4 bg-gradient-to-b from-[#D029EB] to-[#F40E8A]">
                        <img src={ IC3 } alt="" />
                        <h2>Gaming Zone</h2>
                    </div>
                    <div className="mt-4 m-auto text-black font-bold text-2xl flex flex-col bg-blue w-36 h-48 rounded-2xl p-4 bg-gradient-to-b from-[#D029EB] to-[#F40E8A]">
                        <img src={ IC4 } alt="" />
                        <h2>Park</h2>
                    </div>

                </div>
                <img src={ L } alt="" className='m-4' />
                {/* Instructor */ }
                <div className="flex flex-wrap text-left mt-20 bg-white p-4 rounded-2xl text-black text-2xl font-bold justify-center">
                    <img src={ i } alt="" className='w-72' />
                    <div className="p-4 md:p-8">
                        <h1 className='text-3xl m-3 text-center'>Instructor</h1>
                        <p className='text-xl md:w-[50vw]'>{ instructor }</p>
                    </div>
                </div>
                {/* Pricing */ }
                <div className="text-black text-left w-[80vw] md:w-[70vw] p-6 bg-gradient-to-b from-[#CC0BFD] to-[#F10EB1] m-auto my-8 text-2xl rounded-2xl">
                    <h1 className='font-bold'>Pricing</h1>
                    <div className="mt-6"></div>
                    <p>- Single Registration: $60 per person
                        <br /> - Group Registration (4 or more participants): $50 per person <br /><div className="mt-6"></div><b>Note: All Guides and pamplets will be provided.</b></p>
                    <div className="flex justify-around mt-12">
                        <div className="flex flex-col items-center">
                            <img src={ location } alt="" className='w-12' />
                            <p>Grande Piecede la Metaririe, D France</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={ hour } alt="" className='w-12' />
                            <p>11th June 2023</p>
                        </div>
                    </div>
                </div>
                {/* Sponsors */ }
                <h1 className='text-3xl font-bold' >Sponsors</h1>
                <div className="flex justify-around p-6 flex-wrap">
                    <img src={ S1 } alt="" className='w-80 m-3' />
                    <img src={ S2 } alt="" className='w-80 m-3' />
                    <img src={ S3 } alt="" className='w-80 m-3' />
                </div>
                <img src={ L } alt="" className='m-4' />
                {/* Contact */ }
                <h1 className='text-left text-2xl font-bold'>Contact Information:</h1>
                <p className='text-left text-2xl'>For any inquiries or additional information, please contact us at:<br />Email: Kevents32@gmail.com <br />Phone: 5993032290</p>
            </div>
            <Footer />
            </div>
             
        </>
    )
}

export default BoilerPlate