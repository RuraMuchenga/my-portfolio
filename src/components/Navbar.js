import React, { useEffect, useState } from 'react';


function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); 

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth <= 768) {
                setIsScrolled(window.scrollY > 0);
            }
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className={`${isScrolled && isMobile ? 'nav-hidden' : ''} ${isScrolled && !isMobile ? 'nav-faded' : ''}`}>
            <div className="container">
                <h1>Ruramai M.</h1>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;


