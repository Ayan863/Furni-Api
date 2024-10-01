// import React from "react";
import React, { useRef } from "react";
import "../../../../assets/css/main.css";
import { CiMenuBurger } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const navbar = useRef(null);
  const handleMenuClick = () => {
    if (navbar.current) {
      navbar.current.classList.toggle("showMenu");
    }
  };
  return (
    <header>
      <div className="container">
        <div className="brand">
          <a href="#">
            Furni<span>.</span>
          </a>
          <div className="menu" onClick={handleMenuClick}>
            <CiMenuBurger className="burger"/>
          </div>
        </div>
        <div className="navBar" ref={navbar}>
          <nav>
            <ul>
              <li>
                <a href="#" className="home" onClick={() => navigate("/")}>
                  Home
                </a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </nav>
          <div className="icons">
            <img
              className="user"
              src="https://themewagon.github.io/furni/images/user.svg"
              alt=""
            />
            <img
              className="cart"
              src="https://themewagon.github.io/furni/images/cart.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
