import React from 'react';
import '../Nav/Nav.css';
import { FiSearch } from 'react-icons/fi';

const Nav = () => {
    return (
        <div className='navbar'>
            <button className='categories'>categories</button>
            <button className='dealers-choice'>dealer's choice</button>
            <input className='searchbar' />
        </div>
    );
}

export default Nav;