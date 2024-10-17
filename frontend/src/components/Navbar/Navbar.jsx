import React, { useState } from 'react'
import './navbar.css'
import {assets} from '../../assets/frontend_assets/assets'

const Navbar = () => {

  const [menu,setMenu] = useState('home')

  return (
    <div className='Navbar'>
        <img src={assets.logo} alt="logo" className="logo" /> 
        <ul className='navbar_menu'>
            <li onClick={()=>{setMenu('home')}} className={menu==="home"?"active":""}>Home</li>
            <li onClick={()=>{setMenu('menu')}} className={menu==="menu"?"active":""}>Menu</li>
            <li onClick={()=>{setMenu('mobilePage')}} className={menu==="mobilePage"?"active":""}>Mobile Page</li>
            <li onClick={()=>{setMenu('contactus')}} className={menu==="contactus"?"active":""}>Contact us</li>
        </ul>
        <div className='navbar_right'>
            <img src={assets.search_icon} alt="search_icon" />
            <div className="navbar_search_icon">
                <img src={assets.basket_icon} alt="basket_icon" />
                <div className='dot'></div>
            </div>
            <button>sign up</button>
        </div>
    </div>
  )
}

export default Navbar