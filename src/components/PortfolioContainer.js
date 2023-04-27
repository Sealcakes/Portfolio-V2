import React, { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import MainNav from './MainNav';
import Landing from './pages/Landing';
import { AnimatePresence } from 'framer-motion';
import background from '../Assets/rainbowsmoke.png';

export default function PortfolioContainer() {
    
    const [currentPage, setCurrentPage] = useState('Home');

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
        <AnimatePresence>
            <div style={{backgroundImage: `url(${background})`}}>
                <MainNav currentPage={currentPage} handlePageChange={handlePageChange} />
                <div id='page-container'>
                    {renderPage()}
                </div>
            </div>
        </AnimatePresence>
    );
};