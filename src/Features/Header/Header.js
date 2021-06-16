import React from 'react';
import '../Header/Header.css';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div className='header'>
            <img className='logo' src={logo} alt='The Boozer Catalogue'/>
        </div>
    );
}

export default Header;