import React from 'react'
import {Link} from 'react-router-dom'
import footerLogo from '../image/footer_logo.png'
import locationicon from '../image/location_icon.png'
import phoneicon from '../image/phone_icon.png'
import mailicon from '../image/mail_icon.png'
import footerblog from '../image/footer_blog.png'

const Footer = () => {
    return (
        <div className="footer ">
            <div className ="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:grid-cols-3 container m-auto justify-evenly py-20 ">
            <div className="flex  justify-evenly items-center flex-col text-white">
                <img src={footerLogo} alt="" /> 
                <div className = "flex my-4 ">
                    <img src={locationicon} alt="" />
                    <div className ="leading-4 mx-5">
                        <h1>London 14 <br></br> United Kingdom</h1>
                    </div>
                </div>
                <div className ="flex my-4 justify-evenly ">
                    <img src={phoneicon} alt="" />
                    <div  className ="leading-4 mx-8">
                        <h1>987 654 3210</h1>
                        <h1>987 654 3210</h1>
                    </div>
                </div>
                <div className ="flex my-4 justify-evenly ">
                    <img src={mailicon} alt="" />
                    <div className ="leading-4 mx-5 ">
                         <h1>London 145</h1>
                        <h1>United Kingdom</h1>
                    </div>
                </div>
                <div className ="grid gap-8 grid-cols-4">
                    <img  src={mailicon} alt="" />
                    <img  src={mailicon} alt="" />
                    <img  src={mailicon} alt="" />
                    <img  src={mailicon} alt="" />
                </div>
            </div>
            {/* two */}
            <div className=" flex-1 flex flex-col items-center justify-around text-white">
                <h1 className ="text-2xl">Quick Link</h1>
                <ul >
                    <li className="py-2"><Link to ='/'>Home</Link></li>
                    <li  className="py-2"><Link to ='/mark'> Features</Link></li>
                    <li className="py-2"><Link to ='/mark'>Evens</Link></li>
                    <li className="py-2"><Link to ='/mark'>Blog</Link></li>
                    <li className="py-2"><Link to ='/mark'>Testimonial</Link></li>
                    <li className="py-2"><Link to ='/mark'>Contact</Link></li>
                    <li className="py-2"><Link to ='/mark'>Testimonial</Link></li>
                </ul> 
            </div>
            {/* three */}
            <div className="flex-1 flex flex-col justify-around items-center">
            <h1 className ="text-white text-2xl">Instagram</h1>
                <div className="grid grid-cols-2 gap-4" >
                    <img src={footerblog} alt="" />
                    <img src={footerblog} alt="" />
                    <img src={footerblog} alt="" />
                    <img src={footerblog} alt="" />
                </div>
            </div>
            {/* four */}
            <div className="flex-1 flex flex-col justify-around items-center">
                <h1 className=" text-2xl text-white">Contact Us</h1>
                <form className ="flex w-72 h-72 py-2 bg-white flex-col justify-around items-center">
                    <input type="text" className ="border-solid p-2   text-sm border-2 rounded-xl w-11/12" placeholder="Your Name"/>
                    <input type="email" className ="border-solid p-2 text-sm  border-2 rounded-xl w-11/12" placeholder="Email"/>
                    <input type="text" className ="border-solid p-2 text-sm  border-2 rounded-xl w-11/12" placeholder="Subject"/>
                    <textarea className ="border-solid p-2 border-2 text-sm  rounded-xl w-11/12">Message</textarea>
                    <button className="text-white bg-red-600 w-20 h-8 rounded-xl">Send</button>
                </form>
            </div>
            </div>
            <div className="bg-white h-12 flex justify-center items-center">
                <h1>Copyright © 2019 Design by <a className="hover:text-red-700" href="https://strevo199.github.io/myportfolio"> Stephen Mgbeojikwe</a></h1>
            </div>
        </div>
    )
}

export default Footer
