// import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
   <>
      <img className='img' src='/Frame1.png'></img>
      <nav className="navbar">
        <Link to='/'><img className='logo' src="/Logo.png" alt="" /></Link>
        <ul>
          <a href="">Thông tin chung</a>
          <a></a>
        </ul>
      </nav>
   </>
  )
}

export default Header