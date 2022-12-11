import React from 'react'
import { NavLink } from 'react-router-dom'
import "./all.css";
function NavBar() {
  return (
    <div className = "navbar">
        <NavLink className = "navbar1" to="/">Logo</NavLink>
        <NavLink className = "navbar1" to="/">Home</NavLink>
        <NavLink className = "navbar1" to="/lesson">Book a Lesson</NavLink>
        <NavLink className = "navbar1" to="/package">Package</NavLink>
        <NavLink className = "navbar1" to="/about">About Us</NavLink>
        <NavLink className = "navbar1" to="/login">Signup</NavLink>
    </div>
  )
}

export default NavBar