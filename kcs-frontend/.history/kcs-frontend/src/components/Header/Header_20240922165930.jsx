// import React from 'react'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUserTie, faCartShopping } from "@fortawesome/free-solid-svg-icons";
function Header() {
  const navigator = useNavigate();

  function login(){
    navigator('/login')
  }
  return (
   <>
      <img className='img' src='/Frame1.png'></img>
    
   </>
  )
}

export default Header