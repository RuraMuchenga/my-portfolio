import React from 'react';
import './Home.css' 
import profilePic from './images/profile.jpg'; // Adjust the path based on your structure

function Home() {
    return (
        <section id="home">
            <div className="intro-text">
                <h2>Welcome to My Portfolio</h2>
                <p>I'm [Your Name], a passionate developer dedicated to creating impactful digital solutions. Explore my work and learn more about my journey.</p>
            </div>
            <div>
                <img src={profilePic} alt="Profile" />
            </div>
        </section>
    );
}

export default Home;


