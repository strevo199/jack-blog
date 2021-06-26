import React,{useState} from 'react';
import logo from '../image/logo.png'
import {Link,withRouter} from 'react-router-dom'

import '../mystyle.css'

const NavBar = (props) => {
    const [navs, setNavs] = useState([
        {id:1,link:'/',linkName:'Home'},
        {id:1,link:'/about',linkName:'About'},
        {id:1,link:'/marketing',linkName:'Marketing'},
        {id:1,link:'/blog',linkName:'Blog'},
        {id:1,link:'/contact',linkName:'Contact Us'},
        {id:1,link:'/login',linkName:'Login'},
        {id:1,link:'/register',linkName:'Register'},

    ])
    const onLink = props.location.pathname
    
    const toggleMenu = () =>{
        const menu = document.querySelector('.menu')
        const toggleMenu = document.querySelector('.toggleMenu')
        const absolutenavmenu = document.querySelector('.absolutenavmenu')
        if (menu.classList.contains('show')) {
            console.log('okay');
            absolutenavmenu.classList.replace('hidden','flex')
            toggleMenu.innerHTML = `<i onClick ={toggleMenu} class="text-3xl menu toggleMenu show cursor-pointer material-icons text-white px-10">close</i>`
            menu.classList.replace('show','close')
        }else{
            toggleMenu.innerHTML =`<i onClick ={toggleMenu} class="text-3xl menu toggleMenu show cursor-pointer material-icons text-white px-10">menu</i>`
            absolutenavmenu.classList.replace('flex','hidden')
            menu.classList.replace('close','show')
        }
    }

    return (
        <nav className ="mb-10 relative">
            <div hidden className="h-28 lg:hidden md:flex">
            <div className="px-8 flex justify-center items-center ">
                <img src={logo} alt="" />
            </div>
            <div className="flex-1 secondary_bg_lg ">
                <ul className="flex h-28 navCollection justify-evenly font-bold items-center">
                    {navs.map(nav =>{
                       return (
                            <li className = {onLink === nav.link?"text-red-600  uppercase":"text-white text-sm hover:text-red-500 font-normal uppercase"}><Link to ={nav.link}>{nav.linkName}</Link></li>
                       )
                    })}
                    <li>
                        <div className="search relative cursor-pointer">
                            <div className="searchCircle w-5 h-5  rounded-full border-2"></div>
                            <div className="searchLine w-0.5 h-3 border absolute"></div>
                        </div>
                    </li>
                </ul> 
            </div>
            </div>

            <div  hidden className="h-28  lg:flex">
            <div className="px-8 flex justify-center items-center ">
                <img src={logo} alt="" />
            </div>
            <div className="flex-1 secondary_bg ">
                <ul className="flex h-28 navCollection justify-evenly font-bold items-center">
                    {navs.map(nav =>{
                       return (
                            <li className = {onLink === nav.link?"text-red-600  uppercase":"text-white text-sm hover:text-red-500 font-normal uppercase"}><Link to ={nav.link}>{nav.linkName}</Link></li>
                       )
                    })}
                    <li>
                        <div className="search relative cursor-pointer">
                            <div className="searchCircle w-5 h-5  rounded-full border-2"></div>
                            <div className="searchLine w-0.5 h-3 border absolute"></div>
                        </div>
                    </li>
                </ul> 
            </div>
            </div>


            <div   className="h-36  lg:hidden md:hidden sm:block">
            <div className="h-28 flex justify-center items-center ">
                <img src={logo} alt="" />
            </div>
            <div className="flex-1 flex items-center h-10 secondary_bg_lg  justify-end">
                <i onClick ={toggleMenu} class="text-3xl menu toggleMenu show cursor-pointer material-icons text-white px-10">menu</i>
            </div>
            </div>
            <div  className="lg:hidden md:hidden sm:block">
                <ul  className=" flex-col hidden bg-gray-600 bg-opacity-80  absolutenavmenu justify-between items-center font-bold w-4/5 h-72 p-2">
                    {navs.map(nav =>{
                       return (
                            <li  className = {onLink === nav.link?"text-red-600  uppercase":" text-white text-sm hover:text-red-500 font-normal uppercase"}><Link to ={nav.link}>{nav.linkName}</Link></li>
                       )
                    })}
                    <li>
                        <div className="search relative cursor-pointer">
                            <div className="searchCircle w-5 h-5  rounded-full border-2"></div>
                            <div className="searchLine w-0.5 h-3 border absolute"></div>
                        </div>
                    </li>
                </ul> 
            </div>
        </nav>
    )
}
export default withRouter(NavBar)