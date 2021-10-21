import React from 'react';

import BasicNewsData from '../../data/BasicNews.json'
import './BasicNews.scss';

// sfc
const BasicNews = () => {
    return (
        <div className="BasicNews">
            
            <h2>FEATURED <br/> NEWS</h2>
         
                {BasicNewsData.map((basicnews,elt)=> <div key={elt} className="news_index">
               <article clssName="news">
                   <div className="news_container">
                    <img src={basicnews.image} alt="com" className="basicnews_img"/>
                    </div>
                    <div>
                        <h2 clssName="com_name">{basicnews.title}</h2>
                        <p className="line"></p>
                        <p className="com_description">{basicnews.info}
                        <span>{basicnews.date}</span></p>
                    </div>
                </article>
            </div>
           
        )}
        </div>    
       
    );
}

export default BasicNews;