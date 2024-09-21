import React from 'react';
import './Home.css';

function Home() {
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    };

    return (
        <section id="home">
            <div className="container">
                <h2>Hello, I'm Ruramai Muchenga👋</h2>
                <p>
                    I am a junior Software Developer based in Dubai, UAE. As I approach the conclusion of my studies at Middlesex University Dubai, my enthusiasm for developing software solutions that tackle real-world issues continues to grow. Beyond coding, I have a strong interest in streetwear and sneakers, always keeping an eye out for the latest drops and trends. Fitness is also a significant part of my life, and I’m dedicated to working out five times a week for at least an hour and a half per session. Additionally, I'm refining my chess skills with hopes of advancing to a more competitive level.
                </p>
                <button className="connect-button" onClick={scrollToBottom}>
                    Connect with me ↓
                </button>
            </div>
        </section>
    );
}

export default Home;
