//rafce

import React from 'react';
import './works.css';
import Portfolio1 from './images/portfolio7.png';
import Portfolio2 from './images/portfolio2.png';
import Portfolio3 from './images/portfolio3.png';
import Portfolio4 from './images/portfolio4.png';
import Portfolio5 from './images/portfolio5.png';
import Portfolio6 from './images/portfolio6.png';


const Work = () => {
    return (
        <section id="works">
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">I take pride in paying attention to small details and making sure that everything is perfect! I am excited to bring my skills and expertise to help businesses achieve their goals and create a strong online presence.</span>
            <div className="worksImgs">
                <img src={Portfolio1} alt="portfolio1" className="worksImg" />
                <img src={Portfolio2} alt="" className="worksImg" />
                <img src={Portfolio3} alt="" className="worksImg" />
                <img src={Portfolio4} alt="" className="worksImg" />
                <img src={Portfolio5} alt="" className="worksImg" />
                <img src={Portfolio6} alt="" className="worksImg" />
            </div>
            <button className="worksBtn">See More</button>
        </section>
    )
}

export default Work
