//rafce

import React from 'react';
import './skills.css';
import UXUI from "./uxui.png";
import WebDesign from "./design.png";
import Coding from "./coding.png";

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">
                What I Do
            </span>
            <span className="skillDesc">I am a dedicated web developer with a primary focus on front-end technologies, utilizing tools such as React.js, HTML, and CSS to craft engaging and responsive user interfaces. My expertise extends to the dynamic world of web development, where I seamlessly integrate creativity with functionality. While specializing in front-end, I am well-versed in back-end technologies, employing Python and Flask for full stack applications. My proficiency in database management includes SQL/MySQL and MongoDB, ensuring data integrity and seamless interactions. Committed to staying at the forefront of technological advancements, I am constantly expanding my skill set, embracing new tools, and exploring innovative solutions to deliver cutting-edge web experiences. Join me on this journey of continuous learning and transformation in the ever-evolving landscape of web development.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src= {UXUI} alt="UXUI" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>This is a paragraph under our header</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Website Design</h2>
                        <p>This is a paragraph about website design!</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Coding} alt="coding" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Front-End Development</h2>
                        <p>This is a paragraph about our front end!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
