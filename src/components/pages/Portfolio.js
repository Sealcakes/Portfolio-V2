import React from 'react';
import ProjectCards from './pagecomponents/projectcards';

export default function Portfolio() {
    return (
        <div className='portfolio-page-container'>
            <h1 id='portfolio-page-header'>
                Projects
            </h1>
            {ProjectCards()}
        </div>
    )
}
