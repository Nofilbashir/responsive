import React from 'react'
import './Banner.css'
import {banner_images} from '../../Assets/assets'

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner_left">

        <div className="banner_left_up">
        <small>Welcome to Diseñador</small>
        <h3>Design Consultancy, combining data, customer experience, and digital innovation to help you grow</h3>
        <p>We help clients achieve digital business transformation through a customer-centred approach to design. With the use of technology and data we create experiences that drive commercial growth.</p>
        <button className='btn'>What We do</button>
        </div>

        <div className="banner_left_bottom">
          <small>trusted by hundreds of forward thinking companies</small>
          <div className='logp_container'>
              <div className="logo_div">
                <img src={banner_images.logo1} alt="" />
              </div>
              <div className="logo_div">
                <img src={banner_images.logo2} alt="" />
              </div>
              <div className="logo_div">
                <img src={banner_images.logo3} alt="" />
              </div>
              <div className="logo_div">
                <img src={banner_images.logo4} alt="" />
              </div>
          </div>
        </div>

      </div>

      <div className="banner_right">
        <img src={banner_images.banner_image} alt="" />
      </div>

    </div>
  )
}

export default Banner