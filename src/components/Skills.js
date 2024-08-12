import React from 'react';

function Skills() {
    return (
        <section id="skills">
            <div className="container">
                <h2>Skills</h2>
                <div className="skill">
                    <p>JavaScript</p>
                    <div className="progress-bar">
                        <div className="progress" style={{ width: '90%' }}></div>
                    </div>
                </div>
                <div className="skill">
                    <p>React</p>
                    <div className="progress-bar">
                        <div className="progress" style={{ width: '80%' }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
