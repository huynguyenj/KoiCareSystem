// import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUserTie, faCartShopping } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
   <>
      <img className='img' src='/Frame1.png'></img>
      <nav className="navbar d-flex">
        <Link to='/'><img className='logo ms-5' src="/Logo.png" alt="" /></Link>
        <div className='navbar-right d-flex'>
        
          <a className='menu ms-4' href="">Thông tin chung</a>
          <a className='menu ms-4' href="">Tin tức và blog</a>
          <a className='menu ms-4 'href=""> <FontAwesomeIcon icon={faUserTie} style={{color: "#ffffff",}} /></a>
          <a className='menu ms-4 'href=""> <FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff",}} /></a>
          <a className='menu ms-4' href=""></a>

          <div className='log-part'>
            <a className=''style={{color:'#F4CD79'}} href="">Đăng Nhập&nbsp;</a>
            <a className=''style={{color:'#F4CD79'}} href =""> / Đăng ký</a>

          </div>

        </div>
        
      </nav>
   </>
  )
}

export default Header