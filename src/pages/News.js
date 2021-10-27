import React from 'react';
import MainnewsData from '../data/News.json'
import './News.scss';
// sfc
const News = () => {
    return (
        <section className="MainNews">
           <div id="mainnews_flex">
                <h1 id="basicnews_title"> NEWS</h1>
                <h1 id="blackBall">●</h1>
               </div> 
        
     
            {MainnewsData.map((mainnews,elt)=> <div key={elt} className="BasicNews">
           <article className="news_container">
               
                <img src={mainnews.image} alt="com" className="mainNews_img"/>
              
                <div className="news_info">
                    <h3 className="mNews_title">{mainnews.title}</h3>
                   
                    <p className="mNews_description">
                    {mainnews.date}</p>
                </div>
                <img src={mainnews.arrow} alt="arrow" className="mNews_arrow"/>
            </article>
        </div>
    )}    
    </section>
    );
}

export default News;