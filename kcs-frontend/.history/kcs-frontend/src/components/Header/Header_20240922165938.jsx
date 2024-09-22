// import React from 'react'
import './Header.css'
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