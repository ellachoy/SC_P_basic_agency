import React from 'react';
import './Contact.scss';
import ContactHeader from '../assets/img/Contact-Header.jpg'
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
        </main>
    );
}

export default Contact;