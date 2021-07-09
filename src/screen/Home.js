import React from 'react'
import '../mystyle.css'
import Menu from './Menu'

function Home() {
    

    return (
        <div className="home flex">
            
            <div className="relative home-content flex justify-center flex-1 items-center container mx-auto">
                        
                        
                        <div className="text-white">
                            <h1 className ="lg:text-8xl md:text-7xl text-5xl sm:text-6xl font-semibold mb-8 ">Stephen <span className ="seconday">Mgbeojikwe</span></h1>
                            <p className ="text-xl bg-gray-700 bg-opacity-30">Web Developer, Programer, Designer & Enterpreneur</p>
                            <div className="contact_links  ">
                            <a href="https://www.twitter.com/stevola11"><i class="fab fa-twitter fa-2x" ></i></a>
                                <a href="https://www.facebook.com/stevolala18"><i class="fab fa-facebook fa-2x" ></i></a>
                                <a href="https://www.linkedin.com/in/stephen-mgbeojikwe/"><i class="fab fa-linkedin fa-2x" ></i></a>
                                <a href="https://www.github.com/strevo199"><i class="fab fa-github   fa-2x" ></i></a>
                            </div>
                            <div>    
                        </div>
                        </div>
                    </div>
        </div>
       
    )
}

export default Home
