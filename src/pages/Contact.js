import React from 'react';
import './Contact.scss';
import ContactHeader from '../assets/img/Contact-Header.jpg'
import SD from '../assets/img/SD.jpg';
import Mtv from '../assets/img/mtv.jpg';
import Stl from '../assets/img/stl.jpg';
// sfc
const Contact = () => {
    return (
        <main className="ContactPage">
            <section className="contact_top">
                <img id="contactHeaderImg" src={ContactHeader} alt="1" />
                <div className="contact_Topsec">
                    <div>
                        <h1>B®/</h1>
                        <h1 className="sloganTitle">CONTACT</h1>
                        <div className="sloganBox">
                            <p className="contactSlogan">EASY TO UNDERSTAND.</p>
                            <p className="contactSlogan">IMPOSSIBLE TO IGNORE.™</p>
                            <p className="contactSlogan">BASIC®, INC 10 - 20©</p>
                         </div>
                    </div>
                    <div className="contactMails">
                        <div>
                            <h2>●</h2>
                        </div>
                        <div className="contactGrid">
                            <div>
                                <h5>NEWS BUSINESS</h5>
                                <p id="email">hi@mail.com</p>
                            </div>
                            <div>
                                <h5>GENERAL</h5>
                                <p id="email">hi@mail.com</p>
                            </div>
                            <div>
                                <h5>PRESS</h5>
                                <p id="email">hi@mail.com</p>
                            </div>
                            <div>
                                <h5>JOIN US</h5>
                                <p id="email">hi@mail.com</p>
                            </div>
                        </div>

                    </div>
                </div>
               
            </section>
            <div id="contactLine"></div>
            <section className="contactImgs">
                <div className="upGrid">
                        <p className="upItem1">SEC.</p>
                        <p className="upItem2">/A</p>           
                        <p className="upItem3 ">●</p>         
                </div>
                <div className="middleGrid">
                    <div className="right">
                            <h4 className="rightTitle">OFFICES</h4>
                    </div>
                    <div className="left" >
                        <div className="figure">
                            <img id="leftImg" src={SD} alt="1" />
                            <p> SAN DIEGO (HQ)</p>
                        </div>
                        <div id="middleLine"></div>
                        <div className="figure">
                            <img id="leftImg" src={Mtv} alt="2" />
                            <p>BAY AREA</p>
                        </div>
                        <div id="middleLine"></div>
                        <div className="figure">
                            <img id="leftImg" src={Stl} alt="3" />
                            <p>ST. LOUIS</p>
                        </div>
                        <div id="middleLine"></div>

                    </div>
                </div>
            </section>
        </main>
    );
}

export default Contact;