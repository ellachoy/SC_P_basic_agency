import React from 'react';
import './Basic.scss';
import logo from '../assets/img/branding-img.svg';
// sfc
const Basic = () => {
    return (
        <section className="starts">
            <h1 className="starts_title">WHAT’S NEXT <br/> STARTS</h1>
            <h1 className="here">● HERE</h1> 
            <div className="hero_mp">
                <video src="../assets/img/Hero.mp4" controls autoplay loop></video>
                </div> 
            <div className="hero_down">   
                <p className="concept">STRATEGY, DESIGN, TECHNOLOGY</p> 
                <div className="flex">
                <h4 className="description">BASIC® is a branding and digital design agency building products, services, and ecommerce experiences that turn cultural values into company value.</h4> 
                <img src={logo} alt="" />
                </div>
                <button>SEE THE WORK</button> 
            </div>  
        </section>
        
    );
}

export default Basic;


