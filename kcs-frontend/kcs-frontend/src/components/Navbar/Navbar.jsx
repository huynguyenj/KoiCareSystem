// import React from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUserTie, faCartShopping } from "@fortawesome/free-solid-svg-icons";
function Navber() {
      const navigator = useNavigate();

      function login(){
        navigator('/login')
      }
      function register(){
        navigator('/register')
      }
  return (
    
      
       <>

          <nav className="navbar d-flex">
            <Link to='/'><img className='logo ms-5' src="/Logo.png" alt="" /></Link>
            <div className='navbar-right d-flex'>
            
              <a className='menu ms-4' href="">Thông tin chung</a>
              <a className='menu ms-4' href="">Tin tức và blog</a>
              <a className='menu ms-4 'href=""> <FontAwesomeIcon icon={faUserTie} style={{color: "#ffffff",}} /></a>
              <a className='menu ms-4 'href=""> <FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff",}} /></a>
              <a className='menu ms-4' href=""></a>
    
              <div className='log-part me-5'>
                <a className=''style={{color:'#F4CD79'}} href="" onClick={login}>Đăng Nhập&nbsp;</a>
                <a className=''style={{color:'#F4CD79'}} href ="" onClick={register}> / Đăng ký</a>
    
              </div>
    
            </div>
            
          </nav>
       </>
      )
  
}

export default Navber