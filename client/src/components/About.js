import React from 'react'
import about from "../images/about.jpeg"
import "./all.css";
function About() {
  return (
    <div className='about'>
        <div className='about_des'>
              <h4>About Us</h4>
              <p>Just click “Edit Text” 
                    or double click me to add your 
                    own content and
              </p>
        </div>
        <img src={about} alt='about'/>
    </div>
  )
}

export default About