// import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <img className="img" src="/Frame1.png"></img>
      <nav className="navbar">
        <Link to="/">
          <img className="logo ms-2" src="/Logo.png" alt="" />
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a href="">Thông tin chung</a>
            </li>
            <li className="nav-item">
              <a href="">Tin tức và blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
