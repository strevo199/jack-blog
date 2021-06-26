import React from 'react'
import blog1 from '../image/blog1.png'
import blog2 from '../image/blog2.png'
import Footer from './Footer'

const About = () => {
    return (
        <div className="about">
            <h1 className="text-6xl text-center bg-gray-50 leading-loose font-semibold">About <span className="text-red-600">Us</span></h1>
            <div className="aboutmain container m-auto">
                <div className="flex justify-evenly m-8 flex-wrap bg-gray-50 shadow ">
                    <img src={blog1}  alt="" />
                    <div className="p-14 flex-1">
                        <h1 className ="text-4xl font-semibold">The biggest and most awesome camera of year</h1>
                        <p  className="text-gray-500 font-semibold leading-10">MAY 14 2019 5 READ</p>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    </div>
                </div>
                <div className="flex justify-evenly m-8 flex-wrap bg-gray-50 shadow ">
                    
                    <div className="p-14 flex-1">
                        <h1 className ="text-4xl font-semibold">The biggest and most awesome camera of year</h1>
                        <p  className="text-gray-500 font-semibold leading-10">MAY 14 2019 5 READ</p>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    </div>
                    <img src={blog2}  alt="" />
                </div>
                <div className="flex justify-evenly m-8 flex-wrap bg-gray-50 shadow ">
                    <img src={blog1}  alt="" />
                    <div className="p-14 flex-1">
                        <h1 className ="text-4xl font-semibold">The biggest and most awesome camera of year</h1>
                        <p  className="text-gray-500 font-semibold leading-10">MAY 14 2019 5 READ</p>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    </div>
                </div>
                <div className="flex justify-evenly m-5 flex-wrap bg-gray-50 shadow ">
                    
                    <div className="p-14 flex-1">
                        <h1 className ="text-4xl font-semibold">The biggest and most awesome camera of year</h1>
                        <p  className="text-gray-500 font-semibold leading-10">MAY 14 2019 5 READ</p>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    </div>
                    <img src={blog2}  alt="" />
                </div>
            
                
            <div  className="flex justify-center mt-14 items-center pb-10">
                <button className="bg-black h-14 hover:bg-red-600 text-white w-32">Read More</button>
            </div>
        </div>
        <Footer/>
        </div>
    )
}

export default About
