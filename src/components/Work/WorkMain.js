import React from 'react';
import WorkMainData from '../../data/WorkMain.json'

import './WorkMain.scss';


const WorkMain = () => {
    return (
        <div className="workpage">
            <article className="workMain">
            {WorkMainData.map((data,elt)=> <div key={elt} className="work_page">
                <div id="workdata_box_left">
                        <p className="workdata_date">
                            {data.date}
                        </p>
                        <h4 className="workdata_title">{data.title}</h4>
                        <h5 className="workdata_info">{data.info}</h5>
                        <button id="btn_black ">
                            {data.btn}
                        </button>
                </div>
                <div id="workdata_box_right"> 
                    
                    <figure id="left">
                 
                        <img src={data.brandimages[0].image}alt="com" className="brand_img"/>
                        <figurecaption> 
                        <h5 className="brand_title">{data.brandimages[0].title}</h5>
                        <p className="brand_info">{data.brandimages[0].info}</p>
                        </figurecaption>
                    </figure>  
                    <figure id="right">
                            <img src={data.brandimages[1].image}alt="com" className="brand_img"/>
                            <figurecaption> 
                            <h5 className="brand_title">{data.brandimages[1].title}</h5>
                            <p className="brand_info">{data.brandimages[1].info}</p>
                            </figurecaption>
                    </figure>      
                        
                </div>
               
            </div>)}
            </article>
            

        </div>
      );
}
 
export default WorkMain;