import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
import logo from '../NavBar/cute96.png';
import contactImg from '../NavBar/contactImg.png';
import menu from '../NavBar/menu.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            <div className="desktopMenu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">
                    Home
                </Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-80} duration={500} className="desktopMenuListItem">
                    About
                </Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">
                    Portfolio
                </Link>
            </div>
            <button className="contactBtn" onClick={() => { document.getElementById('contactPage').scrollIntoView({ behavior: 'smooth' }); }}>
                <img src={contactImg} alt="Contact" className="contactImg" />
                <span className="contactText">Contact Me</span>
            </button>
            <img src={menu} alt="Menu" className="burgerMenu" onClick={toggleMenu} />
            {showMenu && (
                <MobileMenu closeMenu={() => setShowMenu(false)} />
            )}
        </nav>
    );
};

const MobileMenu = ({ closeMenu }) => {
    return (
        <div className="mobileMenu">
            <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={closeMenu}>
                Home
            </Link>
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-80} duration={500} className="ListItem" onClick={closeMenu}>
                About
            </Link>
            <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={closeMenu}>
                Portfolio
            </Link>
            <Link activeClass="active" to="contactPage" spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={closeMenu}>
                Contact
            </Link>
        </div>
    );
};

export default Navbar;
