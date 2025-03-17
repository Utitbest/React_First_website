import React from 'react'
import "./Testimonials.css"
import {sharpfadehairstyle,besttempfade45,blackbearded,thejuiceharicut,bestpunk12} from "../../assets"


const Testimonials = () => {
  return (
    <section id='testimonials' className='dark-gray'>
      <div className='wrapper'>
        <h2>What our students say?</h2>

        <div className='content-container'>
          <div className='testimonial'>
            <img src={thejuiceharicut} alt="" />
            <div className='reviewer-details'>
              <div className='name'>Peter Adams</div>
              <div className='company-name'>Google</div>
              <div className='review'>
                This is a great course. I got to learn a lot.
              </div>
            </div>
          </div>

          <div className='testimonial'>
            <img src={besttempfade45} alt="" />
            <div className='reviewer-details'>
              <div className='name'>Robert Fox</div>
              <div className='company-name'>Instagram</div>
              <div className='review'>
                I got to learn a lot about Music Production with thsi course.
                Thanks 
              </div>
            </div>
          </div>

          <div className='testimonial'>
            <img src={blackbearded} alt="" />
            <div className='reviewer-details'>
              <div className='name'>Emily Smith</div>
              <div className='company-name'>Apple</div>
              <div className='review'>
                Awesome! Great job!!
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Testimonials