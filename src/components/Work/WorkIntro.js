import React from 'react';
import WorkIntroData from '../../data/WorkIntro.json'
// import WorkShow from './WorkShow.js';
import './WorkIntro.scss';
const WorkIntro = () => {
    return (
        <div className="workpage">
                {WorkIntroData.map((workIntrodata,elt)=> <div key={elt} className="work_page">
               <article className="workdata_container">
                    <div id="workdata_box_left">
                        <p className="workdata_date">
                            {workIntrodata.date}
                        </p>
                        <h4 className="workdata_title">{workIntrodata.title}</h4>
                        <h5 className="workdata_info">{workIntrodata.info}</h5>
                        <button id="btn_black ">
                            {workIntrodata.btn}
                        </button>
                    </div>
                    <div class="workdata_box_right">
                    <figure>
                        <img src={workIntrodata.image} alt="com" className="brand_img"/>
                        <figurecaption> 
                        <h5 className="brand_title">{workIntrodata.title}</h5>
                        <p className="brand_info">{workIntrodata.info}</p>
                        </figurecaption>
                    </figure> 
                    <figure>
                        <img src={workIntrodata.image} alt="com" className="brand_img"/>
                        <figurecaption> 
                        <h5 className="brand_title">{workIntrodata.title}</h5>
                        <p className="brand_info">{workIntrodata.info}</p>
                        </figurecaption>
                    </figure> 
                    </div>
                  
                </article>
            
          </div>                   
        )}
        </div>
       
    );
}

export default WorkIntro;