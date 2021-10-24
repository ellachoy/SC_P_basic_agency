import React from 'react';
import WorkShow2Data from '../../data/WorkShow2.json'
import './WorkShow2.scss';

const WorkShow2 = () => {
    return (
        <div className="workshow2page">

                {WorkShow2Data.map((workshow2data,elt)=> <div key={elt} className="work_page">
               <article className="workshowdata_container">
               <figure>
                        <img src={workshow2data.image} alt="com" className="brand_img"/>
                        <figurecaption> 
                        <h5 className="brand_title">{workshow2data.title}</h5>
                        <p className="brand_info">{workshow2data.info}</p>
                        </figurecaption>
                    </figure>  
                    
                </article>
            
          </div>                   
        )}
        </div>
       
    );
}

export default WorkShow2;