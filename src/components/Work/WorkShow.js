import React from 'react';
import WorkShowData from '../../data/WorkShow.json'
import './WorkShow.scss';
// import Google-Store from '/Google-Store.mp4';
const WorkShow = () => {
    return (
        <div className="workshowpage">
                {WorkShowData.map((workshowdata,elt)=> <div key={elt} className="work_page">
               <article className="workshowdata_container">
               <figure>
                        <img src={workshowdata.image} alt="com" className="brand_img"/>
                        <figurecaption> 
                        <h5 className="brand_title">{workshowdata.title}</h5>
                        <p className="brand_info">{workshowdata.info}</p>
                        </figurecaption>
                    </figure>  
                     <div>
                   
                    </div> 
                </article>
            
          </div>                   
        )}
        </div>
       
    );
}

export default WorkShow;