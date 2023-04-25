import React from 'react';
import logo from '../seal_logo.png'


function NavTabs({ currentPage, handlePageChange }) {
    return (
        <div id='main-nav-container'>
            <nav id='main-nav'>
                <img src={logo} alt='seal logo'/>
                <ul>
                    <li>
                        <a href='#home'
                        onClick={() => handlePageChange('Home')}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href='#about'
                        onClick={() => handlePageChange('About')}>
                            About
                        </a>
                    </li>
                    <li>
                        <a href='#portfolio'
                        onClick={() => handlePageChange('Portfolio')}>
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a href='#contact'
                        onClick={() => handlePageChange('Contact')}>
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href='#resume'
                        onClick={() => handlePageChange('Resume')}>
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavTabs;