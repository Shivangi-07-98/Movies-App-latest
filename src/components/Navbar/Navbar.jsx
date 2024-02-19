import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.scss';
// import logo from './img/download.jpeg'

function Navbar() {
  const [show, handleShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleNav = () => {
    setIsOpen(!isOpen);
  }

  const transitionNavBar = () => {
    if (window.scrollY > 70) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };


  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);





  // (() => {

  //   const openNavMenu = document.querySelector(".mobile-menu"),
  //   closeNavMenu = document.querySelector(".close"),
  //   navMenu = document.querySelector(".mobile-links");

  //   openNavMenu.addEventListener("click", toggleNav);
  //   closeNavMenu.addEventListener("click", toggleNav);

  //   function toggleNav(){
  //     navMenu.classList.toggle("open");
  //   }

  // })();

  return (
    <>

      <div className='desktop'>

        <nav className={`navbar ${show ? 'app_navbar' : ''}`}>
          <div className='app_navbar-logo'>
            {/* <img src={logo} alt="logo"></img> */}
            <div>MOVIES APP</div>
          </div>


          <ul className='app_navbar-links'>
            <li className='menu'><Link to="/home">HOME</Link></li>

            <li className='menu'><Link to="/about">ABOUT</Link></li>
            <li className='menu'><Link to="/contact">CONTACT</Link></li>

            <li className='menu'><Link to="/signin">SIGN-IN</Link></li>
            <li className='menu'><Link to="/signup">SIGN-UP</Link></li>

          </ul>

        </nav>

      </div>

      <div className='mobile'>

        <nav className={`navbar`}>
          <div className='app_navbar-logo'>
            {/* <img src={logo} alt="logo"></img> */}
            <div>MOVIES APP</div>
          </div>

          <div className='mobile-menu' >
            <div className='icon' onClick={toggleNav}>
              <div className='line1'></div>
              <div className='line2'></div>
              <div className='line3'></div>
            </div>

            <div className={`overlay ${isOpen ? "active" : ""}`} onClick={toggleNav}></div>

            <ul className={`mobile-links ${isOpen ? "active" : ""}`}>
              <div className='cross' onClick={toggleNav}><i class="fa-solid fa-x"></i></div>
              <li className='menu'><Link to="/home">HOME</Link></li>

              <li className='menu'><Link to="/about">ABOUT</Link></li>
              <li className='menu'><Link to="/contact">CONTACT</Link></li>

              <li className='menu'><Link to="/signin">SIGN-IN</Link></li>
            <li className='menu'><Link to="/signup">SIGN-UP</Link></li>


              {/* <div className='close' onClick={toggleNav}><i class="fa-solid fa-x"></i></div> */}
            </ul>

          </div>


        </nav>

      </div>

    </>
  );
}

export default Navbar;