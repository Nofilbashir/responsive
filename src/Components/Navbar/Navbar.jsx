import React from 'react'
import './Navbar.css'
import Images from '../../Assets/assets'

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar_left">
        <img src={Images.logo_image} alt="" />
      </div>
      <div className="Navbar_right">
        <a href="">What we do</a>
        <a href="">Our work</a>
        <a href="">About us</a>
        <a href="">Resources</a>
        <a href="">Search</a>
        <a href="">Contact us</a>
      </div>
    </div>
  )
}

export default Navbar