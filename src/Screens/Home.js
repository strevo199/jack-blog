import React,{useState} from 'react';
import slider1 from "../image/slider_1.png";
import slider2 from "../image/slider2.jpg";
import slider3 from "../image/slider3.jpg";
import slider4 from "../image/slider4.jpg";

const Home = () => {
    const [homeBg, setHomeBg] = useState([
        {img:slider1},
        {img:slider2},
        {img:slider3},
        {img:slider4}
    ])
    var i = 0
    const sliderLeftshow = () =>{
        var current = homeBg[1].img

        const last = homeBg.length-1
       if (i < last) {
           i++
       }else{
           i = 0
       }
       current = homeBg[i].img
       console.log(current);
       return current
       }
       
    
    return (
        <div className="home  my-8 flex">
            <div className=" flex-1 relative">
                <div className="img1 ">
                <img src={slider1} className="slider" alt="" />
                <div className="moveing">
                    <div onClick ={sliderLeftshow} className="moveing_left bg-white w-14 h-14 cursor-pointer">
                        <div className="line w-3 h-0.5 bg-red-800 absolute"></div>
                        <div className="line w-3 h-0.5 bg-red-800 absolute"></div>
                    </div>
                    <div className="moveing_right bg-white w-14 h-14 cursor-pointer">
                        <div className="line w-3 h-0.5 bg-red-800 absolute"></div>
                        <div className="line w-3 h-0.5 bg-red-800 absolute"></div>
                    </div>
                </div>
                </div>
                   
            </div> 
            <div className="flex-1">
                    <div className="p-20">
                    <h1 className ="text-4xl font-bold text-indigo-900">More Featred in</h1>
                    <h1 className ="text-6xl mx-4 font-semibold -my-3 mb-8">Jack Blogger</h1>
                    <p className ="text-blue-500 text-sm">Lorem ipsum dolor quam, repell quod optio rerum tempore accusantium enim tenetur, optio ratione. 
                        Fugiat, pariatur eos, error laboriosam consequatur maxime animi repellendus, 
                        possimus quam  officia quidem vitae maxime et? Soluta repellendus at itaque eaque quidem error ea omnis recusandae, 
                        </p>   

                        <div className="my-12">
                            <button className="bg-black mr-14 hover:bg-red-600 text-white h-12 w-32">Read More</button>
                            <button className="bg-black hover:bg-red-600  text-white h-12 w-32">Contact Us</button>
                        </div> 
                    </div>
                    
            </div>
        </div>
    )
}

export default Home
