import React from 'react';
import WorkMainData from '../../data/WorkMain.json'

import './WorkMain.scss';


const WorkMain = () => {
    return (
        <div className="workpage">
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
                <div>
                {/* <video src="/Google-Store.mp4"  controls autoplay loop id="google_mp"></video>
                    <h5>Google Store</h5>
                    <p>We go beyond best practices and build best-in-class D2C channels that drive commerce, shape culture, and define categories.</p> */}
                    
                    <figure>
                            <img src={data.brandimages.image}alt="com" className="brand_img"/>
                            <figurecaption> 
                            <h5 className="brand_title">{data.brandimages.title}</h5>
                            <p className="brand_info">{data.brandimages.info}</p>
                            </figurecaption>
                        </figure>  
                        
                </div>
               
            </div>)}
            

        </div>
      );
}
 
export default WorkMain;