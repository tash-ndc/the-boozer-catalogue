import React from 'react';
import '../Header/Header.css';
import logo from '../../images/logo.png';
import Nav from '../Nav/Nav';

const Header = () => {
    return (
        <div className='header'>
            <div className='banner'>
                <img className='logo' src={logo} alt='The Boozer Catalogue'/>
            </div>
            <Nav className='nav'/>
        </div>
    );
}

export default Header;