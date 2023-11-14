//rafce
import React from 'react';
import './contact.css';

import Github from './github2.png';
import LinkedIn from './linkedin.png';

const Contact = () => {
    return (
        <div id='contactPage'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm'>
                <input type="text" className="name" placeholder='Your Name' />
                <input type='email' className='email' placeholder='Your Email' />
                <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
                <button type='submit' className="submitBtn">Submit</button>
                <div className="links">
                    <img src={LinkedIn} alt="github" className="link" />
                    <img src={Github} alt="github" className="link" />
                </div>
            </form>
        </div>
        
    )
}

export default Contact
