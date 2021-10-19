import React from 'react';
import Featured from '../components/Featured/Featured';
import './Basic.scss';

import logo from '../assets/img/branding-img.svg';
import mp4 from '../assets/img/Hero.mp4';
// sfc
const Basic = () => {
    return (
        <div className="starts">
            <section className="white">
                <h1 className="starts_title">WHAT’S NEXT <br/> STARTS</h1>
                <h1 className="here">● HERE</h1> 
                <div className="hero_mp">
                    <video src={mp4} controls autoplay loop></video>
                    </div> 
                <div className="hero_down">   
                    <p className="concept">STRATEGY, DESIGN, TECHNOLOGY</p> 
                    <div className="flex">
                        <h4 className="description">BASIC® is a branding and digital design agency building products, services, and ecommerce experiences that turn cultural values into company value.</h4> 
                        <img src={logo} alt="" />
                    </div>
                    <button>SEE THE WORK</button> 
                </div>  
                <article className="featured">
                    <h1 className="title">FEATURED <br/>ENGAGEMENTS</h1>
                    <Featured />
                </article>
            </section>
        </div>
        
    );
}


export default Basic;


