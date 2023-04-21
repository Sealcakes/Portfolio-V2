import React, { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Landing from './pages/Landing';

export default function PortfolioContainer() {
    
    const [currentPage, setCurrentPage] = useState('Landing');

    const renderPage = () => {
        if (currentPage === 'Landing') {
            return <Landing />;
        }
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
    };
    console.log(currentPage)
    const handlePageChange = (page) => setCurrentPage(page);
    
    return (
        <div>
            <Landing currentPage={'Landing'} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
};