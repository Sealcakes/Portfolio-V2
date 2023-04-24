import React from 'react';


function NavTabs({ currentPage, handlePageChange }) {
    return (
        <ul>
            <li>
                <a href='#home'
                onClick={handlePageChange('Home')}>
                    Home
                </a>
            </li>
            <li>
                <a href='#about'
                onClick={handlePageChange('About')}>
                    About
                </a>
            </li>
            <li>
                <a href='#portfolio'
                onClick={handlePageChange('Portfolio')}>
                    Portfolio
                </a>
            </li>
            <li>
                <a href='#contact'
                onClick={handlePageChange('Contact')}>
                    Contact
                </a>
            </li>
            <li>
                <a href='#resume'
                onClick={handlePageChange('Resume')}>
                    Resume
                </a>
            </li>
        </ul>
    )
}

export default NavTabs;