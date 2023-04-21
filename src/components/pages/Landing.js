import React from 'react';

const navEl = document.getElementById('landing-nav');

for(const link of navEl.getElementsByTagName('a')) {
    link.onmousemove = e => {
        const rect = link.getBoundingClientRect(),
            img = link.querySelector('img');

        img.style.left = `${e.clientX - rect.left}px`;
        img.style.top = `${e.clientY - rect.top}px`;
    }
}

window.onmousemove = e => {
    const percent = e.clientY / window.innerHeight,
        y = percent * navEl.offsetHeight * -1;
        // Y !== (more than screen height)

    navEl.animate({
        transform: `translateY(${y}px)`
    }, {
        fill: 'forwards',
        duration: 4000
    })
}

function LandingElement({ currentPage, handlePageChange }) {
    return (
        <nav id='landing-nav'>
            <a href='#home' onClick={() => handlePageChange('Home')} className={currentPage === 'Home'}>
                <span>HOME</span>
                <img src='https://plus.unsplash.com/premium_photo-1679392532113-bee46deab9fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
            </a>
            <a href='#' target='_blank'>
                <span>ABOUT ME</span>
                <img src='https://images.unsplash.com/photo-1520004434532-668416a08753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
            </a>
            <a href='#' target='_blank'>
                <span>PORTFOLIO</span>
                <img src='https://images.unsplash.com/photo-1509869175650-a1d97972541a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
            </a>
            <a href='#' target='_blank'>
                <span>CONTACT</span>
                <img src='https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRlc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
            </a>
            <a href='#' target='_blank'>
                <span>RESUME</span>
                <img src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRlc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
            </a>
        </nav>
    )
}

export default LandingElement;