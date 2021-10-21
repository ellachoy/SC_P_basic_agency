import React from 'react';

import BasicNewsData from '../../data/BasicNews.json'
import './BasicNews.scss';

// sfc
const BasicNews = () => {
    return (
        <div className="BasicNews">
            
            <h2 id="basicnews_title">FEATURED <br/> NEWS</h2>
         
                {BasicNewsData.map((basicnews,elt)=> <div key={elt} className="BasicNews">
               <article className="news_container">
                   
                    <img src={basicnews.image} alt="com" className="basicnews_img"/>
                  
                    <div className="news_info">
                        <h3 className="com_title">{basicnews.title}</h3>
                       
                        <p className="com_description">{basicnews.info}
                        <span>{basicnews.date}</span></p>
                    </div>
                    <img src={basicnews.arrow} alt="arrow" className="basicnews_arrow"/>
                </article>
            </div>
           
        )}
        </div>    
       
    );
}

export default BasicNews;