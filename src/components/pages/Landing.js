import React, { useState } from 'react';

function LandingElement() {
  const [navY, setNavY] = useState(0);

  const handleMouseMove = (e) => {
    const percent = e.clientY / window.innerHeight;
    const y = percent * e.currentTarget.offsetHeight * -1;
    setNavY(y);
  };

  const handleLinkMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const img = e.currentTarget.querySelector('img');
    img.style.left = `${e.clientX - rect.left}px`;
    img.style.top = `${e.clientY - rect.top}px`;
  };

  return (
    <div
      id="landing-nav"
      style={{ transform: `translateY(${navY}px)` }}
      onMouseMove={handleMouseMove}
    >
        <a href='#' onMouseMove={handleLinkMouseMove}>
            <span>HOME</span>
            <img src='https://plus.unsplash.com/premium_photo-1679392532113-bee46deab9fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
        </a>
        <a href='#' onMouseMove={handleLinkMouseMove}>
            <span>ABOUT ME</span>
            <img src='https://images.unsplash.com/photo-1520004434532-668416a08753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
        </a>
        <a href='#' onMouseMove={handleLinkMouseMove}>
            <span>PORTFOLIO</span>
            <img src='https://images.unsplash.com/photo-1509869175650-a1d97972541a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
        </a>
        <a href='#' onMouseMove={handleLinkMouseMove}>
            <span>CONTACT</span>
            <img src='https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRlc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
        </a>
        <a href='#' onMouseMove={handleLinkMouseMove}>
            <span>RESUME</span>
            <img src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRlc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
        </a>
    </div>
  );
}

export default LandingElement;