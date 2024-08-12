
import React from 'react';
import './AboutMe.css';
import profilePic from '../images/profile.jpg'; // Ensure this path is correct

const AboutMe = () => {
    return (
        <section id="about-me">
            <img src={profilePic} alt="Profile" />
            <h2>About Me</h2>
            <p>
                I am a passionate web developer with a background in computer science.
                I have completed various projects and have a strong interest in continuous learning and improvement.
                My journey in web development has been both challenging and rewarding, and I am excited to continue growing in this field.
            </p>
        </section>
    );
};

export default AboutMe;

