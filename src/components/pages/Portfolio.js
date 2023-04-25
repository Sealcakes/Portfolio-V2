import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "Test1 Title",
        subtitle: "Brief Description",
        description: "This is a longer version of the project description, it used a lot of things, it's purpose is to pass the butter",
    },
    {
        id: 2,
        title: "Test2 Title",
        subtitle: "Another Brief Description",
        description: "Another longer version of the second project's description, it also used a lot of things."
    }
]

export default function Portfolio() {

    const [cardId, setCardId] = useState(null);

    const handleProjectCardClick = (projectId) => {
        setCardId(projectId);
    }

    const handleCloseProjectCardClick = () => {
        setCardId(null);
    }
    
    const renderProjectCards = () => 
        projects.map((project) => (
            <motion.div
                key={project.id}
                className='project-card'
                layoutId={project.id}
                onClick={() => handleProjectCardClick(project.id)}
            >
                <motion.h2>{project.title}</motion.h2>
                <motion.h5>{project.subtitle}</motion.h5>
            </motion.div>
        ));

    const renderSelectedProjectCard = () => {
        const selectedProject = projects.find((project) => project.id === cardId);
        return (
            <motion.div
                key={selectedProject.id}
                className='project-card expanded'
                layoutId={selectedProject.id}
                onClick={() => handleCloseProjectCardClick()}
            >
                <motion.h2>{selectedProject.title}</motion.h2>
                <motion.h4>{selectedProject.subtitle}</motion.h4>
                <motion.p>{selectedProject.description}</motion.p>
            </motion.div>
        )
    }

    return (
        <div className='project-cards-container'>
            {renderProjectCards()}
            <AnimatePresence>
                {cardId && renderSelectedProjectCard()}
            </AnimatePresence>
        </div>
    );
};