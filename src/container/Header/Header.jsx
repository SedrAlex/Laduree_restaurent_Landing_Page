import React, { useEffect, useState } from 'react';
import { images } from '../../constants';
import './Header.css';
import  SubHeading  from '../../components/SubHeading/SubHeading.jsx'
const theimages = [images.home, images.home3, images.home4, images.home2];

const Header = () => (
 
 <div className="app__header app__wrapper section__padding" id="home">
     <div className="app__wrapper_info">
       <SubHeading title="Experience a classic  restaurant "  />
       <h1 className="app__header-h1">A Taste<br /> &nbsp;&nbsp;&nbsp;&nbsp;of <br />History </h1>
       <p className="p__opensans" style={{ margin: '2rem 0'}}>Sit tellus lobortis sed senectus vivamus molestie. 
       <br  /> Condimentum volutpat morbi facilisis 
       quam scelerisque <br />sapien. Et, 
       penatibus aliquam amet tellus </p>
      <button type="button" className="custom__button">Explore Menu</button>
     </div>
     <div className="app__wrapper_img">
      <img  src={images.home2} alt="header img"  />
      
        
     </div>

   
  </div>
);


export default Header;
 