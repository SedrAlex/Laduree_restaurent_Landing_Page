import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import {  IoRestaurant} from 'react-icons/io5';

import './Navbar.css';
import images from '../../constants/images'; 

const Navbar = () => {
   const [toggleMenu, setToggleMenu]= useState(false)
 



  return(
  <nav className="app__navbar">
     <div className="app__navbar-logo">
          <img src={images.laduree} alt="app logo"  />
     </div>

     <ul className="app__navbar-links" > 
           <li className="p__opensans"><a href="#home">Home</a></li>
           <div />
           <li className="p__opensans"><a href="#about">About</a></li>
           <div />
           <li className="p__opensans"><a href="#menu">Menu</a></li>
           <div />
           <li className="p__opensans"><a href="#awards">Awards</a></li>
           <div />
           <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>
      
      <div className="app__navbar-login">
      <a href="#login" className="p__opensans"> Sign In </a>
      <div />
      <a href="/" className="p__opensans"> Book Table</a>
     </div>
     <div className="app__navbar-smallscreen">
     <RxHamburgerMenu color = "#80691A" fontSize={27} onClick={() => setToggleMenu(true)} />
      
      {toggleMenu && (
      <div className="app__navbar-smallscreen_overlay flex__center solid-bottom">
          <IoRestaurant color = "#80691A" fontSize={27} className="overlay__close"   onClick={() =>setToggleMenu(false)} />
        <ul className="app__navbar-smallscreen_links" > 
            <li className="p__opensans"><a href="#home">Home</a></li>
            <li className="p__opensans"><a href="#about">About</a></li>
            <li className="p__opensans"><a href="#menu">Menu</a></li>
            <li className="p__opensans"><a href="#awards">Awards</a></li>
            <li className="p__opensans"><a href="#contact">Contact</a></li>
         </ul>
       </div>
       )}
    </div>
  </nav>
  );
}
export default Navbar;
 