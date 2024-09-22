// import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import {FontAwsome} from '@fortawesome/react-fontawesome'
function Header() {
  return (
   <>
      <img className='img' src='/Frame1.png'></img>
      <nav className="navbar d-flex">
        <Link to='/'><img className='logo ms-5' src="/Logo.png" alt="" /></Link>
        <div className='navbar-right'>
        
          <a className='Menu' href="">Thông tin chung</a>
          <a className='Menu 'href=""><i className="fa-solid fa-user-tie" style="color: #ffffff;"></i></a>
          <a className='Menu' href="">Tin tức và blog</a>
          <a className='Menu' href=""></a>
          

        </div>
        
      </nav>
   </>
  )
}

export default Header