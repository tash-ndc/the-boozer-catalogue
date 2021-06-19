import React from 'react';
import '../Nav/Nav.css';
import { FiSearch } from 'react-icons/fi';

const Nav = () => {
    return (
        <div className='navbar'>
            <button className='categories'>categories</button>
            <button className='dealers-choice'>dealer's choice</button>
            <div className='search-area'>
                <form className='searchbar'>    
                    <input 
                        className='search-input'
                        placeholder='Search...'
                    />
                    <FiSearch className='search-button' />
                </form>
            </div>
        </div>
    );
}

export default Nav;