// rafce
import React from 'react';
import './works.css';
import Portfolio1 from './images/portfolio7.png';
import Portfolio2 from './images/portfolio2.png';
import Portfolio3 from './images/portfolio3.png';

const Work = () => {
    return (
        <section id="works">
            <h2 className="worksTitle">My Portfolio</h2>
            <div className="worksContainer">
                <div className="workItem">
                    <img src={Portfolio1} alt="portfolio1" className="worksImg" />
                    <p className="workDesc">Project 1 Description</p>
                </div>
                <div className="workItem">
                    <img src={Portfolio2} alt="portfolio2" className="worksImg" />
                    <p className="workDesc">Project 2 Description</p>
                </div>
                <div className="workItem">
                    <img src={Portfolio3} alt="portfolio3" className="worksImg" />
                    <p className="workDesc">Project 3 Description</p>
                </div>
            </div>
            <button className="worksBtn">See More</button>
        </section>
    );
};

export default Work;
