// import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
   <>
      <img className='img' src='/Frame1.png'></img>
      <nav className="navbar d-flex justify-content-around">
        <Link to='/'><img className='logo ms-2' src="/Logo.png" alt="" /></Link>
        <div className='collapse navbar-collapse'>
        
          <a href="">Thông tin chung</a>
          <a href="">Tin tức và blog</a>
          <a href=""></a>
          

        </div>
        
      </nav>
   </>
  )
}

export default Header