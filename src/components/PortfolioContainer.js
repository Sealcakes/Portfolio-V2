import React, { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import MainNav from './MainNav';
import Landing from './pages/Landing';

export default function PortfolioContainer() {
    
    const [currentPage, setCurrentPage] = useState('Landing');

    const renderPage = () => {
        
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
        return <Resume />;
        
    };
    
    const handlePageChange = (page) => {
        console.log(page);
        setCurrentPage(page);
    }
    
    const pageDisplay = (page) => {
        if (page === 'Landing') {
            return <Landing currentPage={page} handlePageChange={handlePageChange} />
        }
        return <MainNav currentPage={page} handlePageChange={handlePageChange} />
    }

    return (
        <div id='page-container'>
            <MainNav currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
};