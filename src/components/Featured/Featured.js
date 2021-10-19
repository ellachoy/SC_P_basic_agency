import React from 'react';
import google from '../../assets/img/google-dark.svg';
import patagonia from '../../assets/img/patagonia-dark.svg';
import Airbnb from '../../assets/img/airbnb-dark.svg';
import './Featured.scss';

// sfc
const Featured = () => {
    return (
        <section className="companies">
            <div className="com">
                <img src={google} className="img" alt="" />
                <h5 clssName="com_name">GOOGLE</h5>
                <p className="com_description">Our embedded partnership with Google is as deep as it gets. We’re the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions.</p>
            </div>
            <div classNAme="com">
                <img src={patagonia} className="img"  alt="" />
                <h5 clssName="com_name">PATAGONIA</h5>
                <p className="com_description">Ongoing partnership providing strategy, branding, experience design, and development focused on bringing their mission and offerings to consumers through brand-led programs and platforms.</p>
            </div>
            <div className="com">
                <img src={Airbnb}className="img"  alt="" />
                <h5 clssName="com_name">AIRBNB</h5>
                <p className="com_description">Helping the world’s leading peer-to-peer hospitality company with creative vision, experience strategy, and execution in partnership with various departments and divisions internally at Airbnb.</p>
            </div>
        </section>
    );
}

export default Featured;



//  GOOGLE
// Our embedded partnership with Google is as deep as it gets. We’re the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions.
// PATAGONIA
// Ongoing partnership providing strategy, branding, experience design, and development focused on bringing their mission and offerings to consumers through brand-led programs and platforms.
// AIRBNB
// Helping the world’s leading peer-to-peer hospitality company with creative vision, experience strategy, and execution in partnership with various departments and divisions internally at Airbnb.
// HERMAN MILLER
// A collaborative and performance incentivized partnership with our teams working side by side to reimagine the digital shopping experiences for Herman Miller, Design Within Reach, and Hay.
// UNDER ARMOUR
// Strategy, design, and development to differentiate the iconic brand’s direct-to-consumer experience through an all new omnichannel approach, global eCommerce 
