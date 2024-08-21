import React from 'react';
import './Home.css';
import profilePic from './images/profile.jpg'; // Adjust the path based on your structure

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
                <h2>Hello there! I'm Ruramai.</h2>
                <p>I am a junior Software Developer residing in Dubai, UAE. Currently in my final year at Middlesex University Dubai, I am passionate about crafting software solutions that address real-world challenges. When I'm not immersed in the world of code, I am watching TV shows such as Suits and The Blacklist, appreciating the intricate plots and character developments. I also enjoy working out and going to the gym (i am a bit of an addict , i work out 5 times a week for at least an hour and 30 min each.) In addition to my technological pursuits, I am honing my skills in chess, aspiring to play the game more professionally.</p>
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