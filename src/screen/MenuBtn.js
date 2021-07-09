import React,{useState} from 'react'
import Menu from './Menu'

const MenuBtn = () => {
    const [toggle, settoggle] = useState(false)


    const  toogleMenu  =() =>{
        if (!toggle) {
            document.querySelector('.menuContent').classList.replace('hidden','block')
            document.querySelector('.menu').classList.add('close')
            document.querySelector('.profilePic').classList.add('close')
            settoggle(true)
        }else{
            settoggle(false)
            document.querySelector('.menuContent').classList.replace('block','hidden')
            document.querySelector('.menu').classList.remove('close')
            document.querySelector('.profilePic').classList.remove('close')
        }
    }
    return (
           <div>
                <div className ="menu " onClick ={toogleMenu}>
                    <div className="line bg-white w-8 h-1 mb-2"></div>
                    <div className="line bg-white w-8 h-1 mb-2"></div>
                    <div className="line bg-white w-8 h-1 mb-2"></div>
                </div>
            <Menu/>
           </div>
    )
}

export default MenuBtn
