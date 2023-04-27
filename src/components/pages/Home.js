import React from 'react';
import { motion } from 'framer-motion';
import background from '../../Assets/rainbowsmoke.png'

export default function Home() {
    return (
        <motion.div
          className='home-container'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{backgroundImage: `url(${background})`}}
        >
            <h1 style={{color: 'white'}}>Home Page</h1>
            <p style={{color: 'white'}}>lorem ipsum</p>
        </motion.div>
    );
};