import React from 'react';
import ProjectCards from './pagecomponents/ProjectCards';

export default function Portfolio() {
    return (
        <div>
            <h1 id='portfolio-page-header'>
                Projects
            </h1>
            {ProjectCards()}
        </div>
    )
}
