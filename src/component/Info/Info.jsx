import React from 'react'
import "./Info.css"
import {miniboy, investmentIcon} from "../../assets"

const Info = () => {
  const divstyle = {position:'relative'}
  return (
    <section id='info' className='dark-gray'>
      <div className='wrapper'>
        <div className='content-container' style={divstyle}>

          <div className='info-content'>
            <img src={miniboy} className='smalli' alt=""></img>
            <div className='amount'>23,000+</div>
            <div className='type'>Students</div>
          </div>

          <div className='info-content'>
            <img src={investmentIcon} alt=""></img>
            <div className='amount'>26Hrs</div>
            <div className='type'>Video Content</div>
          </div>
          <span className="bg-element2"></span>
        </div>
      </div>
    </section>
  )
}

export default Info
