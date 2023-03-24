import React from 'react'
import {about_data} from "../../Assets/assets"
import './About.css'
const About = () => {
  return (
    <div className='about'>
      <div className="about_left">
        {about_data.map((item)=>{
          return(
            <div className="card">
              <h1>{item.big_number}</h1>
              <p>{item.heading}</p>
              <h5>{item.detail}</h5>
            </div>
          )
        })}
      </div>
      <div className="about_right">
        <small>What We Are</small>
        <h4>We create visually stunning and high converting websites</h4>
        <p>Our team of experienced designers and developers work closely with each client to understand their unique business goals and create a website that not only looks great, but also effectively communicates their brand and drives conversions.</p>
        <button className='secondary_btn'>More about us</button>
      </div>
    </div>
  )
}

export default About