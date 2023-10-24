//rafce

// import React from 'react';
// import './skills.css';
// import UXUI from "./uxui.png";
// import WebDesign from "./design.png";
// import Coding from "./coding.png";

// const Skills = () => {
//     return (
//         <section id='skills'>
//             <span className="skillTitle">
//                 What I Do
//             </span>
//             <span className="skillDesc">I'm a dedicated web developer, specializing in front-end technologies like React.js, HTML, and CSS. I also work with back-end tech like Python and Flask for full-stack applications. I'm experienced in database management with SQL/MySQL and MongoDB, ensuring data integrity. I'm committed to staying current, constantly learning and embracing new tools for cutting-edge web development.</span>
//             <div className="skillBars">
//                 <div className="skillBar">
//                     <img src={Coding} alt="coding" className="skillBarImg" />
//                     <div className="skillBarText">
//                         <h2>Front-End Development</h2>
//                         <p>I excel in crafting responsive, interactive web experiences using HTML, CSS, and JavaScript, leveraging frameworks like React, and adhering to accessibility and performance best practices.</p>
//                     </div>
//                 </div>
//                 <div className="skillBar">
//                     <img src= {UXUI} alt="UXUI" className="skillBarImg" />
//                     <div className="skillBarText">
//                         <h2>UI/UX Design</h2>
//                         <p>Expertise in industry-standard design tools such as Figma, Sketch, or similar.</p>
//                     </div>
//                 </div>
//                 <div className="skillBar">
//                     <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
//                     <div className="skillBarText">
//                         <h2>Website Design</h2>
//                         <p>This is a paragraph about website design!</p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Skills

import React from 'react';
import './skills.css';
import UXUI from "./uxui.png";
import WebDesign from "./mobile.png";
import Coding from "./coding.png";

const skillsData = [
    {
        title: "Front-End Development",
        image: Coding,
        description: "I excel in crafting responsive, interactive web experiences using HTML, CSS, and JavaScript, leveraging frameworks like React, and adhering to accessibility and performance best practices.",
    },
    {
        title: "UI/UX Design",
        image: UXUI,
        description: "I possess a solid foundation in UX/UI design principles, allowing me to seamlessly collaborate with designers, provide valuable design input, and bridge the gap between design and development.",
    },
    {
        title: "Mobile-First Design",
        image: WebDesign,
        description: "Proficient in designing and developing web interfaces with a mobile-first approach, ensuring optimal user experiences on a wide range of devices by prioritizing small screen sizes and touch interactions during the design and development process.",
    },
];

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I Do</span>
            <span className="skillDesc">
                I'm a dedicated web developer, specializing in front-end technologies like React.js, HTML, and CSS. I also work with back-end tech like Python and Flask for full-stack applications. I'm experienced in database management with SQL/MySQL and MongoDB, ensuring data integrity. I'm committed to staying current, constantly learning and embracing new tools for cutting-edge web development.
            </span>
            <div className="skillBars">
                {skillsData.map((skill, index) => (
                    <div className="skillBar" key={index}>
                        <img src={skill.image} alt={skill.title} className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>{skill.title}</h2>
                            <p>{skill.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
