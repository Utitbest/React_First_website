import React, { useState } from 'react'
import "./Navbar.css";
import {iconmenu, iconclose} from "../../assets"

const Navbar = () => {
  const [isActive, seIsActive] = useState(false)
  return (
    <>
    <nav>
      <a href="#" className='log'>
        Sound <span className='red'>UTign</span>
      </a>


      <ul>
      <li>
          <a href="#topic">Course Details</a>
        </li>

        <li>
          <a href="#info">About</a>
        </li>

        <li>
          <a href="#blog">Blog</a>
        </li>

        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
      </ul>
      <div onClick={()=> seIsActive(true)} className='menu-icon'>
        <img src={iconmenu} alt=""/>
      </div>
    </nav>
    <div className={`mobile-menu-container ${isActive ? "active" : ""}`}>
      <div onClick={()=> seIsActive(false)} className='close-icon'>
        <img src={iconclose} alt="" />
      </div>

        <ul  className='menu-items'>
        <li>
          <a href="#topic" onClick={()=> seIsActive(false)}>Course Details</a>
        </li>

        <li>
          <a href="#info" onClick={()=> seIsActive(false)}>About</a>
        </li>

        <li>
          <a href="#blog" onClick={()=> seIsActive(false)}>Blog</a>
        </li>

        <li>
          <a href="#testimonials" onClick={()=> seIsActive(false)}>Testimonials</a>
        </li>
      </ul>
    </div>
    </>
  )
}

export default Navbar