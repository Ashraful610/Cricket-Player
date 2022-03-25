import React from 'react';
import logo from '../image/logo.jpg'
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className='navbar'>
                <div className='title'>
                    <img src={logo} alt="" />
                    <h1>Bangladesh Cricket Team</h1>
                </div>
                <div className='link'>
                    <a href="/Home">Home</a>
                    <a href="/Player">Player</a>
                    <a href="/About">About</a>
                    <a href="/Contact">Contact</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;