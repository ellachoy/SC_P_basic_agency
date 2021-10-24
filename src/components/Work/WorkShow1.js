import React from 'react';
import WorkShow1Data from '../../data/WorkShow1.json'
import './WorkShow1.scss';
// import Google-Store from '/Google-Store.mp4';
const WorkShow1 = () => {
    return (
        <div className="workshow2page">
            
                 <figure>
                  
                <video src="/Google-Store.mp4"  controls autoplay loop id="google_mp"></video>
                    <h5>Google Store</h5>
                    <p>We go beyond best practices and build best-in-class D2C channels that drive commerce, shape culture, and define categories.</p>
                </figure>
       
            

                {WorkShow1Data.map((workshow1data,elt)=> <div key={elt} className="work_page">
                <article className="workshowdata_container">
                <figure>
                            <img src={workshow1data.image} alt="com" className="brand_img"/>
                            <figurecaption> 
                            <h5 className="brand_title">{workshow1data.title}</h5>
                            <p className="brand_info">{workshow1data.info}</p>
                            </figurecaption>
                        </figure>  
                        
                </article>
            
          </div>                   
        )}
        </div>
       
    );
}

export default WorkShow1;