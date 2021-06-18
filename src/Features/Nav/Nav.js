import React from 'react';
import '../Nav/Nav.css';
import { FiSearch } from 'react-icons/fi';

const Nav = () => {
    return (
        <div className='navbar'>
            <button className='categories'>categories</button>
            <button className='dealers-choice'>dealer's choice</button>
            <div className='searchbar'>    
                <input className='search-input' />
            </div>
        </div>
    );
}

export default Nav;