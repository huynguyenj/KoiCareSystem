import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

function Navbar() {
  const navigator = useNavigate();

  function login() {
    navigator("/login");
  }

  function register() {
    navigator("/register");
  }

  return (
    <>
      <nav className="navbar d-flex">
        <Link to="/">
          <img
            className="logo ms-5"
            src="/Logo.png"
            alt=""
            style={{ maxWidth: "150px" }}
          />
        </Link>
        <div className="navbar-right d-flex ms-auto align-items-center">
          <Link to="/" className="nav-item ms-4">
            Thông tin chung
          </Link>
          <Link to="/blog" className="nav-item ms-4">
            Tin tức và blog
          </Link>
          <a className="nav-item ms-4" href="#">
            <FontAwesomeIcon icon={faUserTie} style={{ color: "#ffffff" }} />
          </a>
          <a className="nav-item ms-4" href="#">
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ color: "#ffffff" }}
            />
          </a>
          <div className="log-part ms-4 me-5">
            <button className="login-link" onClick={login}>
              Đăng nhập&nbsp;
            </button>
            <button className="login-link" onClick={register}>
              /&nbsp; Đăng ký
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
