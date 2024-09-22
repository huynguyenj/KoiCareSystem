// import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
   <>
      <img className='img' src='/Frame1.png'></img>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to='/'><img src="/Logo.png" alt="" /></Link>
      </nav>
   </>
  )
}

export default Header