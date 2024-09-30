import React from "react";
import "../../../../assets/css/main.css";
import { FaEnvelope } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="newsLetter">
        <div className="mainA">
          <div className="subscribe">
            <FaEnvelope className="envelope" />
            <span>Subscribe to Newsletter</span>
          </div>
          <div className="enter">
            <input type="text" placeholder="Enter your name" />
            <input type="email" placeholder="Enter your email" />
            <FaTelegramPlane className="telegram" />
          </div>
        </div>
        <div className="sofa">
          <img
            src="https://themewagon.github.io/furni/images/sofa.png"
            alt=""
          />
        </div>
      </div>
      <div className="main">
        <div className="furni">
          <a href="#">Furni.</a>
          <p>
            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis
            nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
            velit imperdiet dolor tempor tristique. Pellentesque habitant
          </p>
          <div className="icons">
            <div className="iconFa">
              <FaFacebookF className="icon" />
            </div>
            <div className="iconFa">
              <FaTwitter className="icon" />
            </div>
            <div className="iconFa">
              <FaInstagram className="icon" />
            </div>
            <div className="iconFa">
              <FaLinkedin className="icon" />
            </div>
          </div>
        </div>
        <div className="list">
          <div className="firstLine">
          <div className="about" id="list">
            <ul>
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
          </div>
          <div className="support" id="list">
            <ul>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Knowledge base</a>
              </li>
              <li>
                <a href="#">Live chat</a>
              </li>
            </ul>
          </div>
          </div>
         <div className="secLine">
         <div className="jobs" id="list">
            <ul>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Our team</a>
              </li>
              <li>
                <a href="#">Leadership</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="chair" id="list">
            <ul>
              <li>
                <a href="#">Nordic Chair</a>
              </li>
              <li>
                <a href="#">Kruzo Aero</a>
              </li>
              <li>
                <a href="#">Ergonomic Chair</a>
              </li>
            </ul>
          </div>
         </div>
        </div>
      </div>
      <div className="copyright">
        <div className="copy">
          <p>
            Copyright ©2024. All Rights Reserved. — Designed with love by
            Untree.co Distributed By ThemeWagon
          </p>
        </div>
        <div className="terms">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
