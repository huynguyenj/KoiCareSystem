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
        <div className='navbar-right'>
        
          <a className='Menu ms-1' href="">Thông tin chung</a>
          <a className='Menu ms-1' href="">Tin tức và blog</a>
          <a className='Menu ms-1 'href=""> <FontAwesomeIcon icon={faUserTie} style={{color: "#ffffff",}} /></a>
          <a className='Menu ms-1 'href=""> <FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff",}} /></a>
          <a className='Menu ms-1' href=""></a>
          

        </div>
        
      </nav>
   </>
  )
}

export default Header