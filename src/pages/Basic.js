import React from 'react';
import Featured from '../components/Featured/Featured';
import BasicNews from '../components/BasicNews/BasicNews';
import './Basic.scss';

import logo_branding from '../assets/img/branding-img.svg';
import Hero from '../assets/img/Hero.mp4';
import Culture from '../assets/img/Culture.mp4';
// sfc
const Basic = () => {
    return (
        <div className="starts">
            <section className="white">
                <h1 className="starts_title">WHAT’S NEXT <br/> STARTS</h1>
                <h1 className="here">● HERE</h1> 
                <div className="hero_mp">
                    <video src={Hero} controls autoPlay="autoplay" loop id="hero_mp"></video>
                    </div> 
                <div className="hero_down">   
                    <p className="concept">STRATEGY, DESIGN, TECHNOLOGY</p> 
                    <div className="flex">
                        <h4 className="description">BASIC® is a branding and digital design agency building products, services, and ecommerce experiences that turn cultural values into company value.</h4> 
                        <img src={logo_branding} id="logo_branding" alt="" />
                    </div>
                    <button id="btn_black">SEE THE WORK</button> 
                </div>  
                <article className="featured">
                    <h1 className="title">FEATURED <br/>ENGAGEMENTS</h1>
                    <Featured />
                </article>
            </section>
            <section className="below_black">
                <article className="culture">
                    <div>
                        <h1 className="culture_title">BASIC® HELPS <br/> BRANDS<br/> ●CONNECT <br/>
                        W/ CULTURE
                        </h1>
                        <p>ADWEEK (AGENCY SPOTLIGHT)</p>
                        <button id="btn_pink">About us</button>
                    </div>
                    <div className="culture_mp">
                        <video src={Culture} controls autoPlay="autoplay" loop id="culture_mp"></video>
                    </div>
                </article>
                <BasicNews />
            </section>
          
        </div>
        
    );
}


export default Basic;


