import React, { useState } from 'react'
import "./Topics.css"
import {sharpfadehairstyle,
  besttempfade45,
  blackbearded,
  thejuiceharicut,
  bestpunk12,
  pexelphoto} from "../../assets"

const Topics = () => {
  const [currentImage, setCurrentImage] = useState(sharpfadehairstyle)

  return (
    <section id='topic' className='black'>
      <div  className='wrapper'>
        <h2>What did you learn?</h2>
        <div className='content-container'>
          <ul className='topics-list'>
            <li onMouseEnter={() => setCurrentImage(sharpfadehairstyle)}>What are frequencise</li>
            <li onMouseEnter={() => setCurrentImage(besttempfade45)}>Uing the DAW</li>
            <li onMouseEnter={() => setCurrentImage(blackbearded)}>Vocals Processing</li>
            <li onMouseEnter={() => setCurrentImage(pexelphoto)}>Mixing</li>
            <li onMouseEnter={() => setCurrentImage(thejuiceharicut)}>Mixing console</li>
            <li onMouseEnter={() => setCurrentImage(bestpunk12)}>Mastering</li>
          </ul>

          <div className='topic-image'>
            <img src={currentImage} alt=""></img>
          </div>
        </div>
        <span className='bg-element-1 modesle'></span>
      </div>
    </section>
  )
}

export default Topics