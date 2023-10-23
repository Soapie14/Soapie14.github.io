//rafce
import React, {useState} from 'react';
import './navbar.css';
// images imported
import logo from '../NavBar/cute96.png';
import contactImg from '../NavBar/contactImg.png';
// scroll import
import {Link} from 'react-scroll';
import menu from '../NavBar/menu.png';


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className='navbar'>
            <img src={logo} alt='Logo' className='logo' />
            <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}className='desktopMenuListItem'>Home </Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-80} duration={500} className='desktopMenuListItem'>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Portfolio </Link>
            </div>
            <button className='desktopMenuBtn' onClick={() => {
                document.getElementById('contactPage').scrollIntoView({behavior:'smooth'});
            }}>
                <img src={contactImg} alt='contact' className='desktopMenuImg' /> Contact Me
            </button>

            <img src={menu} alt='Logo' className='logo' onClick={()=>setShowMenu(!showMenu)} />

            <div className='navMenu'style={{display: showMenu? 'flex':'none'}} >
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}className='ListItem' onClick={() =>setShowMenu(false)}>Home </Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-80} duration={500} className='ListItem' onClick={() =>setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={() =>setShowMenu(false)}>Portfolio </Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={() =>setShowMenu(false)}>Contact</Link>
            </div>

        </nav>
    )
}

export default Navbar;
