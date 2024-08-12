import React from 'react';

function Projects() {
    return (
        <section id="projects">
            <div className="container">
                <h2>Projects</h2>
                <div className="project-card">
                    <h3>Project 1</h3>
                    <p>Description of project 1.</p>
                    <a href="https://github.com/yourusername/project1">View on GitHub</a>
                </div>
                <div className="project-card">
                    <h3>Project 2</h3>
                    <p>Description of project 2.</p>
                    <a href="https://github.com/yourusername/project2">View on GitHub</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;
