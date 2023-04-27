import React from 'react';
import { motion } from 'framer-motion';

export default function Resume() {
    return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
            <h1>My Resume Page</h1>
        </motion.div>
    );
};