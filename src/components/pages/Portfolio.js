import React from 'react';
import ProjectCards from './pagecomponents/projectcards';
import { motion } from 'framer-motion';

export default function Portfolio() {
    return (
        <motion.div 
          className='portfolio-page-container'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
            <h1 id='portfolio-page-header'>
                Projects
            </h1>
            {ProjectCards()}
        </motion.div>
    )
}
