import React ,{ useEffect, useState, useRef, useLayoutEffect } from 'react';
import Modal from '../../components/Modal';
import {
    plain,
    tomatoes,
    seafood,
    basil,
    takeout,
    drinks,
    cocktails,
    dining,
    dessert,
    cannoli
} from '../../assets/images';


import './Principle.css'
const Principle = () => {
  return (
    <section>
        <div className="middle-content">
                    <h2 className="middle-text">
                    Savory and
                    <br />
                    Elegant
                    <br />
                    Cuisine
                    </h2>
                    <img src={tomatoes} id="pic1" alt="tomatoes" />
                    <img src={seafood} id="pic2" alt="bowl of pasta" />
                    <img src={basil} id="pic3" alt="basil leaf"/>   
            </div>
    <div className="menu-container">
    <div id="bottom-menu">
        <h3 className="bottom-text">
        View Our Menu
        </h3>
    </div>
        <div className="menu">
            <div>
                <img src={takeout} className="takeout" alt="pasta" />
                <div className="image-overlay" id="takeout">Takeout<br />Menu</div>
            </div>
            <div>
                <img src={drinks} className="happyhour" alt="drinks" />
                <div className="image-overlay" id="happy">Happy<br />Hour</div>
            </div>
            <div>
                <img src={cocktails} className="drinks" alt="cocktails" />
                <div className="image-overlay" id="drinks">Drink<br />Menu</div>
            </div>
            <div>
                <img src={dining} className="dining" alt="food on table" />
                <div className="image-overlay" id="dining">Dining<br />Menu</div>
            </div>
            <div>
                <img src={dessert} className="dessert" alt="tiramisu" />
                <div className="image-overlay" id="dessert">Dessert<br />Menu</div>
            </div>
            <div className="cannoli">
                <img src={cannoli} className="cannoli" alt="cannoli" />
            </div> 
     </div>
        <div className="footer">
            <div className="footer-content">
                <div className="footer-content-wrap">
                    <span>LAD</span>URÉE
                </div>
                <div className="footer-logo">
                  <ul className="footer-menu">
                    <li><a href="#main">Home</a></li>
                    <li>About</li>
                    <li>Order Online</li>
                    <li><a href="#" >
                    Reservations</a></li>
                    <li>Menu</li>
                    <li>Gallery</li>
                  </ul>
                  <div className="footer-info">
                        France
                    <span>PARIS, champs elysess 22201</span>
                        Copyright 2023
                    <button className="footer-button" href="#main">
                        Order
                    </button>
                    <button className="footer-button" href="#" >
                        Reserve 
                    </button>
                </div>
                </div>
                <div className="bottom-footer">Sunday - Thursday: 11am - 10pm <span>Friday & Saturday: 11am - 12am</span></div>
                <br />
                <span className="byline">Developed by SedrAlex
                <br />
               </span>
                
            </div>   
    </div>
    </div>
      

    </section>
    )

   }

export default Principle;