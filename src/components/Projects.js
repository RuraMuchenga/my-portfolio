import React from 'react';

function Projects() {
    return (
        <section id="projects">
            <div className="container">
                <h2>Featured Projects</h2>
                <div className="project-card">
                    <h3>AirPiano🎵</h3>
                    <p>In the “AirPiano” project, I embarked on a musical journey of creating a quirky air-based piano. The setup detects the distance of an object and translates it into musical notes, turning the surrounding space into a virtual piano. The result is a whimsical fusion of technology and music, where the air transforms into melodies with just a wave of a hand.</p>
                    <a href="https://github.com/RuraMuchenga/AirPiano-Project">View on GitHub</a>
                </div>
                <div className="project-card">
                    <h3>iFit Studio App 💪</h3>
                    <p>This project is an IoT-based fitness management system comprising a smartwatch and a companion mobile application. The smartwatch serves as a personal fitness assistant, helping users track their fitness routines by tracking activities. The companion mobile application complements the smartwatch by providing additional features and functionalities, such as enabling users to connect with a supportive fitness community, share achievements, and access guidance and advice from the community. </p>
                    <a href="https://github.com/RuraMuchenga/iFitApp">View on GitHub</a>
                </div>
                <div className="project-card">
                    <h3>Customer Churn Prediction🛒</h3>
                    <p>This project involves predicting customer churn using machine learning techniques. It includes generating synthetic customer data, performing exploratory data analysis (EDA), preprocessing the data, training machine learning models, and making predictions. The goal is to identify key factors contributing to churn and recommend personalized retention strategies. </p>
                    <a href="https://github.com/RuraMuchenga/Customer-Churn-Prediction.git">View on GitHub</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;
