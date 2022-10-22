import React from 'react'

import "./header.css";
import logo from "../../images/ilovepdf.svg";

const Navbar = () => {
  return (
    <div className="header">
      <div className="header__main">
        <div className="brand">
          <div className="brand__logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        
        <div className="header__nav">
          <div className="main__menu" id="menuBig">
            <ul className="nav">
              <li><a href="/merge/pdf">Merge PDF</a></li>
              <li><a href="/merge/pdf">Split PDF</a></li>
              <li><a href="/merge/pdf">Compress PDF</a></li>
              <li><a href="/merge/pdf">Convert PDF <i class="fa-sharp fa-solid fa-caret-down"></i></a></li>
              <li><a href="/merge/pdf">All PDF Tolls <i class="fa-sharp fa-solid fa-caret-down"></i></a></li>
            </ul>
          </div>
        </div>

        <div className="top-menu">
          <ul className="nav">
            <li className="nav__item nav__item-gray">
              <a href="/login">
                Log in
              </a>
            </li>
            <li className="nav__item nav__item-red">
              <a href="/login">
                Sign up
              </a>
            </li>
            <li className="nav__item nav__item-sub">
              <a href="/login">
                <i class="fa-solid fa-bars"></i>
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Navbar