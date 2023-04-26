import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "Mixing Pot",
        subtitle: "Ingredient Based Recipe Search",
        description: "I lead a team towards developing a cooking app that allows the user to input the ingredients they have on hand and receive recipe suggestions.  The application uses a 3rd party API to search a database using only the ingredients that were input to display select recipes back to the user.",
        gif: 'https://media2.giphy.com/media/d9O5lPyufbSfZzC1pq/giphy.gif',
        techUsed: ["HTML", "Bulma", "Javascript", "JQuery", "3rd Party APIs"]
    },
    {
        id: 2,
        title: "ParkingBuddy",
        subtitle: "Application for Managing Guest Parking",
        description: "This application allows apartment residents to seemlessly request guest parking online by inputting their guest's vehicle information and submitting the request.  The admins can then view all resident requests and approve or deny those requests based off of availability.  Parking availability is also updated and presented to the admins on their dashboard."
    },
    {
        id: 3,
        title: "E-Commerce Backend",
        subtitle: "E-Commerce Server and Database",
        description: "Application that sets up a server and backend for an E-Commerce application.  All routing is handled and setup, database is setup with MySQL and integrated with the server, user just needs to adjust categories, products and tags."
    },
    {
        id: 4,
        title: "Social Network API",
        subtitle: "API For Social Network",
        description: "Another longer version of the second project's description, it also used a lot of things."
    },
    {
        id: 5,
        title: "Test2 Title",
        subtitle: "Another Brief Description",
        description: "Another longer version of the second project's description, it also used a lot of things."
    },
]

export default function ProjectCards() {

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
                <motion.img className='card-gifs' src={project.gif}/>
                {/* <motion.h2>{project.title}</motion.h2>
                <motion.h5>{project.subtitle}</motion.h5> */}
            </motion.div>
        ));

    const renderSelectedProjectCard = () => {
        const selectedProject = projects.find((project) => project.id === cardId);

        const renderTechTags = () => {
            selectedProject.techUsed.map((tech) => {
                <motion.div className='tech-tags'>{tech}</motion.div>
            })
        }

        return (
            <motion.div
                key={selectedProject.id}
                className='project-card expanded'
                layoutId={selectedProject.id}
                animate={{x: '25%', y: '25%'}}
            >
                <motion.span className='card-close-button' onClick={() => handleCloseProjectCardClick()}>+</motion.span>
                <motion.div className='gif-container'>
                    <motion.img className='expanded-card-gif' src={selectedProject.gif} />
                </motion.div>
                <motion.div className='text-container'>
                    <motion.h2>{selectedProject.title}</motion.h2>
                    <motion.h4>{selectedProject.subtitle}</motion.h4>
                    <motion.div className='tech-tags-container'>
                        {selectedProject.techUsed.map((tech) => (
                            <motion.div className='tech-tags'>{tech}</motion.div>
                        ))}
                    </motion.div>
                    <motion.p>{selectedProject.description}</motion.p>
                    <motion.div className='btn-container'>
                        <motion.a className='view-btn' src='#'>View Page</motion.a>
                        <motion.a className='view-btn' src='#'>View Code</motion.a>
                    </motion.div>
                    
                </motion.div>
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