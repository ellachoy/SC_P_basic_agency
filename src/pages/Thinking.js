import React from 'react';
import ThinkingData from '../data/Thinking.json'
import './Thinking.scss';
// sfc
const Thinking = () => {
    return (
        <section className="Tinkingpage">
            <div id="top_flex">
                <h1 id="basicnews_title"> THINKING</h1>
                <h1 id="pinkBall">●</h1>
               </div> 
            <div>
            <article className="thinking_topflex">
                <div className="thinkingBrandbeats">
                        <h3 className="rosaTexth4">BRANDBEATS®</h3>
                        <p className="rosaText">Brandbeats® is our agency podcast garnering over 45,000+ listens per episode where we discuss
                            industry happenings for 30 minutes as well as provide ten tracks of curated music. Our
                            conversations are a candid exploration of design topics, branding trends, and experiences we’re
                            noticing in culture.</p>
                    </div>

                    <div className="thinkingApplied"> 
                        <h3 className="rosaTexth4">APPLIED®</h3>
                        <p className="rosaText">Applied® is our panel series and thought-leadership platform where we share perspectives and tactics related to strategy, design, and technology. The content is raw and driven by honest observations and guided questions that use culture to explain why trends exist and how they impact business and tech.</p>
                    </div>
            </article>
            </div>
            {ThinkingData.map((thinking,elt)=> <div key={elt} className="thinking">
           <article className="thinking_container">
               
                <img src={thinking.image} alt="com" className="thinking_img"/>
              
                <div className="thinking_info">
                    <h3 className="thinking_title">{thinking.title1}</h3>
                    <h3 className="thinking_title">{thinking.title2}</h3>
                    <h3 className="thinking_title">{thinking.title3}</h3>
                   
                    <p className="thinking_description">
                    {thinking.date}</p>
                </div>
                <img src={thinking.arrow} alt="arrow" className="thinking_arrow"/>
            </article>
        </div>
    )}    
    </section>
    );
}

export default Thinking;