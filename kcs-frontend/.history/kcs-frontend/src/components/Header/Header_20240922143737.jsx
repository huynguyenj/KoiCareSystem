// import React from 'react'
import './Header.css'
function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <img src="path-to-your-logo" alt="Koiday Logo" />
        </div>
        <nav className="nav-menu">
          <ul>
            <li><a href="#about">Thông tin chung</a></li>
            <li><a href="#blog">Tin tức & Blog</a></li>
            <li><a href="#shop">Shop</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="login-btn">Đăng ký</button>
          <button className="register-btn">Đăng nhập</button>
        </div>
      </div>

      <div className="header-content">
        <button className="cta-btn">Take care Now !!!</button>
      </div>
    </header>
  );
}
  )
}

export default Header