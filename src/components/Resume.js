// import React from 'react';
// import './Resume.css';

// const resumePDF = 'https://drive.google.com/file/d/1CpsFCJIuVrHJFWBU3gBMYUgkasVvM5kR/view?usp=sharing'; 

// const Resume = () => {
//     return (
//         <section id="resume">
//             <h2>Resume</h2>
//             <div className="resume-content">
//                 <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="resume-link">
//                     View My Resume
//                 </a>
//                 <div className="education">
//                     <h3>Education</h3>
//                     <ul>
//                         <li>Bachelor's Degree in Computer Systems Engineering, Middlesex University Dubai (Expected June 2025)</li>
//                         <li>A-Levels</li>
//                         <li>IGCSE O-Levels</li>
//                     </ul>
//                 </div>
//                 <div className="skills">
//                     <h3>Skills</h3>
//                     <ul>
//                         <li>Web Development (HTML, CSS5, JavaScript, React)</li>
//                         <li>Software Development</li>
//                         <li>Problem-Solving and Analytical Skills</li>
//                         <li>Project Management</li>
//                         <li>Freelance work</li>
//                     </ul>
//                 </div>
//                 <div className="projects">
//                     <h3>Projects</h3>
//                     <ul>
//                         <li>Personal Portfolio Website</li>
//                         <li>AirPiano Project</li>
//                         <li>iFit Studio Project</li>
//                         <li>Customer Churn Prediction</li>
//                         <li>Home Security system project</li>
//                         <li>Sentiment Analysis Tool Project</li>
//                         <li>Used Matlab to simulate a communication system which
// takes an input sequence of bits entered from the keyboard
// performs vector encoding using 128QAM constellation.</li>
//                         <li>Open-Source Contributions</li>
//                     </ul>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Resume;


































import React from 'react';
import './Resume.css';

const resumePDF = 'https://drive.google.com/file/d/1CpsFCJIuVrHJFWBU3gBMYUgkasVvM5kR/view?usp=sharing'; 

const Resume = () => {
    return (
        <section id="resume">
            <h2>Resume</h2>
            <div className="resume-content">
                <div className="resume-header">
                    <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="download-button">
                        Download <span>↓</span>
                    </a>
                </div>
                <div className="experience">
                    <div className="job">
                        <div className="job-details">
                            <h4>Student learning assistant</h4>
                            <span className="job-location">Harare, Zimbabwe</span>
                        </div>
                        <p>Supported professors and lecturers by clarifying difficult concepts during lectures or
                        tutorials.</p>
                    </div>
                    <div className="job">
                        <div className="job-details">
                            <h4>Junior Fullstack Developer</h4>
                            <span className="job-location">Dubai, United Arab Emirates</span>
                        </div>
                        <p>Freelance developer for various small-scale projects, particularly working with flutter,react, java, css and machine learning.</p>
                    </div>
                    <div className="job">
                        <div className="job-details">
                            <h4>Backend Developer</h4>
                            <span className="job-location">Dubai, United Arab Emirates</span>
                        </div>
                        <p>Freelance developer for various small-scale backend projects, optimizing databases and working on API integration.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
