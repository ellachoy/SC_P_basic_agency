import React from 'react';
import './Aboutbasic.scss';
import Agency from '../../data/About1.json'
import Capabilities from '../../data/About2.json'


const Aboutbasic = () => {
    return ( 
        <section className="aboutbasic">
            <article className="items">
                <div>
                    <p>SEC.</p>
                </div>
                <div>
                    <p>/A</p>
                </div>
                <div>
                    <p>●</p>
                </div>
             </article>
             <h4 id="snap">AGENCY </h4>
             <h4>SNAPSHOT</h4>
             <article id="grid_basic">
           
                {Agency.map((item,elt)=> < div key={elt} className="Agencydata">
                 <div className="grid_data">
                     <h4>{item.title}</h4>
                     <h2 className="grid_nr">{item.number}</h2>
                     <p className="grid_text">{item.text}</p>
                 </div>
                </div>)}
            </article>
            <div id="line"></div>
            <article className="items">
                <div>
                    <p>SEC.</p>
                </div>
                <div>
                    <p>/A</p>
                </div>
                <div>
                    <p>●</p>
                </div>
             </article>
             <h4 id="snap">CAPABILITY </h4>
             
             <article id="grid_basic">
           
                {Capabilities.map((item,elt)=> < div key={elt} className="capabilitiesdata">
                 <div className="grid_data below">
                     <h4 id="below_title">{item.title}</h4>
                     <p className="grid_text">{item.text1}</p>
                     <p className="grid_text">{item.text2}</p>
                     <p className="grid_text">{item.text3}</p>
                     <p className="grid_text">{item.text4}</p>
                     <p className="grid_text">{item.text4}</p>
                     <p className="grid_text">{item.text5}</p>
                     
                 </div>
                </div>)}
            </article>
            <div id="line"></div>
            <article className="items">
                <div>
                    <p>SEC.</p>
                </div>
                <div>
                    <p>/A</p>
                </div>
                <div>
                    <p>●</p>
                </div>
             </article>

             <article className="Awards">
                    <div>
                        <h2 className="awards_title">AWARDS</h2>
                    </div>
                    <div className="awards_text">
                        <h2 className="awards_textsmalls">
                            While results are what matter most, we believe awards bring value and recognition to
                            organizations as well as individuals. full awardslist
                        </h2>
                        <button id="btn_pink">Full awardlist</button>
                    </div>
                </article>
                <article className="aboutAwards">
                <div>
                    <div className="aboutAwards_last">
                        <h1 className="aboutAwardsTitle">WEEBY AWARDS</h1>
                        <p>/40</p>
                    </div>

                    <div className="aboutAwards_last">
                        <h1 className="aboutAwardsTitle">ADWEEK</h1>
                        <p>/01</p>
                    </div>

                    <div className="aaboutAwards_last">
                        <h1 className="aboutAwardsTitle">AWWARDS </h1>
                        <p>/22</p>
                    </div>

                    <div className="aboutAwards_last">
                        <h1 className="aboutAwardsTitle">D&AD</h1>
                        <p>/01</p>
                    </div>

                    <div className="aboutAwards_last">
                        <h1 className="aboutAwardsTitle">ONE SHOW </h1>
                        <p>/03</p>
                    </div>

                    <div className="aboutAwards_last">
                        <h1 className="aboutAwardsTitle">THE FWA </h1>
                        <p>/07</p>
                    </div>
                </div>
                </article>
                
        </section>
     );
} 
 
export default Aboutbasic;



