import React,{useState,useRef} from 'react'
import port1 from '../image/prot1.png'
import {Link} from 'react-router-dom'
import {CSSTransition} from 'react-transition-group'

const  Menu = () => {
    const refMenuCont = useRef()

    const [navLinks, setnavLinks] = useState([
        {id:1,title:'HOME',link:'/'},
        {id:2,title:'ABOUT ME',link:'/about'},
        {id:3,title:'WORK',link:'/work'},
        {id:4,title:'HOW TO REACH ME',link:'/contact'}
])


 const toggleLinks = () =>{
    refMenuCont.current.classList.add('hidden')
    document.querySelector('.menu').classList.remove('close')

 }
    


return (
        <div ref ={refMenuCont} className = "menuContent hidden flex flex-col md:flex-row">
            <CSSTransition >
                <div className="profilePic md:h-screen  md:flex-1 border-yellow-200 md:border-b-0 border-opacity-20 border-b-4  md:border-r-4 justify-center items-center flex">
                    <img className="rounded-full md:w-72 md:h-72 w-44 h-44"  src= {port1} alt = ""/>
                </div>
            </CSSTransition>

            <div className="navContent md:flex-1 h- md:h-screen opacity-90 flex">
                <ul  className="flex-1 flex flex-col justify-evenly items-center">
                    {
                        navLinks.map(navLink => {
                            return(
                                <li onClick ={toggleLinks} className="text-white  navLining text-3xl" key ={navLink.id}><Link className="navLnk_item" to={navLink.link}>{navLink.title}</Link></li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}


export default Menu
