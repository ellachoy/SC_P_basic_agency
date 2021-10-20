import React from 'react';

import BasicNewsData from '../../data/BasicNews.json'
import './BasicNews.scss';

// sfc
const BasicNews = () => {
    return (
        <section className="BasicNews">
            {BasicNewsData.map((basicnews,elt)=> <div key={elt} className="news_index">
            <img src={basicnews.image} alt="com" className="basicnews_img"/>
            <h5 clssName="com_name">{basicnews.title}</h5>
            <p className="line"></p>
            <p className="com_description">{basicnews.info}</p>
            </div>
        )}    
        </section>
    );
}

export default BasicNews;