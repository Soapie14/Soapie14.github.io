import React from 'react';
import {Link} from 'react-scroll';

import './intro.css';

//images
import bg from './cute48.png';
import hireMe from './hireMe.png';

const Intro = () => {
    return (
        <section id='intro'>
            <div className="introContent">
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm 
                    <span className='introName'> Sophie</span> 
                    <br />Website Designer
                </span>
                <p className='introPara'>I am a skilled web designer with experience in creating visually appealing websites</p>

                <Link>
                    <button className='btn'>
                        <img src={hireMe} alt='hireMe' className='btnImg'/>Hire Me
                    </button>
                </Link>
            </div>

            <img src={bg} alt='Background' className='bg'/>
        </section>
    )
}

export default Intro
