import React from 'react'
import "./Blog.css"
import {screenshoot1, screenshoot2, pexelphoto} from "../../assets"

const Blog = () => {
  const skdk = {marginBottom: '.8em'}
  return (
    <section id='blog' className='pink'>
      <div className='wrapper'>
        <h2 style={skdk} className='light'>Latest Post</h2>
        <div className='content-container'>
          
          <div className='post'>
            <div className='tag'>DAW</div>
            <a href="#">
              <img src={screenshoot1} alt="" />
            </a>

            <a href="#">
              <h3 className='post-title'>
                How To Use Drum Machine in Logic Pro X
              </h3>
            </a>
          </div>

          <div className='post'>
            <div className='tag'>Mixing</div>
            <a href="#">
              <img src={screenshoot2} alt="" />
            </a>

            <a href="#">
              <h3 className='post-title'>
                How To Mix Guitars Effectively
              </h3>
            </a>
          </div>

          <div className='post'>
            <div className='tag'>Vox</div>
            <a href="#">
              <img src={pexelphoto} alt="" />
            </a>

            <a href="#">
              <h3 className='post-title'>
                The Real Power of harmonies in Music Production
              </h3>
            </a>
          </div>

          

        </div>
        <div className='btn-container'>
            <a href="#" className='all-post-btn'>
              All Posts
            </a>
          </div>
      </div>
    </section>
  )
}

export default Blog