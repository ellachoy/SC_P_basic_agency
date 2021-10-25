import React from 'react';
import './About.scss';
import  eins from '../assets/img/About-Gallery_4.jpg';
import  zwei from '../assets/img/About-Gallery_2.jpg';
import  drei from '../assets/img/About-Gallery_1.jpg';
import  vier from '../assets/img/About-Gallery_3.jpg';
// sfc
const About = () => {
    return (
        <main className="About">
            <section className="About_upper">
                <div className="flex_up">
                    <h1>WE TURN </h1>
                    <h1>CULTURAL </h1>
                    <h1>VALUE</h1>
                </div>
                <div className="flex_down">
                    <h1>●INTO </h1>
                    <h1>COMPANY </h1>
                    <h1>VALUE</h1>
                    <p className="companie_info">BASIC® is an independent branding & experience design company working at the intersection of culture, design, and technology. We value our craft, have a deep passion for progression, and exist to solve challenges for brands we believe in. Since the beginning, our mission has been to do great work and to have a great time doing it. We believe our mission has guided us well.</p>
                </div>
            </section>
            <section className="About_below">
                
               <p className="below_text">EASY TO UNDERSTAND. IMPOSSIBLE TO IGNORE.™ BASIC®, INC 10 - 20©</p>
        
               <div id="below_photos">
                    <div id= "eins">
                     <img src={drei}  alt="" /></div>
                     <div id= "vier">
                    <img src={eins}  alt="" />  </div>     
                    <div id= "zwei">  
                    <img src={zwei}  alt="" />  </div>    
                    <div id= "drei">        
                    <img src={vier}  alt="" />
                    </div>   
               </div>
            </section>
        </main>
    );
}

export default About;





