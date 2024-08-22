import React from 'react';
import './Resume.css';

const resumePDF = 'https://drive.google.com/uc?id=1FjBueM1OlxFqNv9IbQ8th4ZwsAjEad5W'; 

const Resume = () => {
    return (
        <section id="resume">
            <h2>Resume</h2>
            <div className="resume-content">
                <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="resume-link">
                    View My Resume
                </a>
                <div className="education">
                    <h3>Education</h3>
                    <ul>
                        <li>Bachelor's Degree in Computer Systems Engineering, Middlesex University Dubai (Expected June 2025)</li>
                        <li>A-Levels</li>
                        <li>IGCSE O-Levels</li>
                    </ul>
                </div>
                <div className="skills">
                    <h3>Skills</h3>
                    <ul>
                        <li>Web Development (HTML, CSS5, JavaScript, React)</li>
                        <li>Software Development</li>
                        <li>Problem-Solving and Analytical Skills</li>
                        <li>Project Management</li>
                        <li>Freelance work</li>
                    </ul>
                </div>
                <div className="projects">
                    <h3>Projects</h3>
                    <ul>
                        <li>Personal Portfolio Website</li>
                        <li>AirPiano Project</li>
                        <li>iFit Studio Project</li>
                        <li>Home Security system project</li>
                        <li>Used Matlab to simulate a communication system which
takes an input sequence of bits entered from the keyboard
performs vector encoding using 128QAM constellation.</li>
                        <li>Open-Source Contributions</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Resume;

