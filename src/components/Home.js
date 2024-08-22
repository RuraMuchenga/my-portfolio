import React from 'react';
import './Home.css';
import profilePic from './images/profile.jpg'; 

function Home() {
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    };

    return (
        <section id="home">
            <div className="intro-text">
                <h2>Hello there! I'm Ruramai Muchenga👋.</h2>
                <p>I am a junior Software Developer based in Dubai, UAE. As I approach the conclusion of my studies at Middlesex University Dubai, my enthusiasm for developing software solutions that tackle real-world issues continues to grow even more. Outside of my programming skills, I enjoy watching TV series like Suits and The Blacklist, captivated by their complex storylines and character arcs. Fitness is also a major part of my life; I’m dedicated to working out five times a week for at least an hour and a half each session. Additionally, I’m refining my chess skills with hopes of advancing to a more professional level.</p>
            </div>
            <div className="profile-pic-container">
                <img src={profilePic} alt="Profile" />
            </div>
            <button className="connect-button" onClick={scrollToBottom}>
                Connect with Me
            </button>
        </section>
    );
}

export default Home;