import React from 'react';
import WorkIntro from '../components/Work/WorkIntro';
import './Work.scss'

// sfc
const Work = () => {
    return (
        <section className="work">
            <article>
                <h1 className="work_title">EASY TO UNDERSTAND. <span id="work_ball">IMPOSSIBLE TO IGNORE.</span></h1>
                <p className="work_info">The work we create lives at the intersection of clarity and surprise and positions brands in culture through shared values and ideals.</p>
            </article>
           <WorkIntro />
        </section>
    );
}

export default Work;