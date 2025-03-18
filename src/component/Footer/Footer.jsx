import React from 'react'
import "./Footer.css"
import {facebooksvg, instagramsvg, twittersvh} from "../../assets"
const Footer = () => {
  return (
    <footer className='black'>
      <div className='wrapper'>
        <div className='content-container'>
          <div className='links'>
            <a href="#" className='logo'>
              Sound <span className='red'>UTign</span>
            </a>

            <div className="social-icons">
                <a href="#">
                  <img src={facebooksvg} alt="" />
                </a>

                <a href="#">
                  <img src={twittersvh} alt="" />
                </a>

                <a href="#">
                  <img src={instagramsvg} alt="" />
                </a>
              </div>
              <div className='copyright'>
                This website is designed by Utibest &copy; 2023
              </div>
          </div>


          <div className='links'>
                <h3>Quick Links</h3>

                <ul>
                  <li>
                    <a href="#">Blog</a>
                  </li>

                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
          </div>

          <div className="links">
              <h3>Contact Us</h3>

              <ul>
                <li>
                  <a href="#">utitbesta@gmail.com</a>
                </li>
                
                <li>
                  <a href="#">+234 8063 308 044</a>
                </li>
              </ul>
          </div>

          <div className='copyright mobile'>
                This website is designed by Utibest &copy; 2023
              </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer