import React from 'react';
import Navbar from './components/Navbar'; // Make sure Navbar is exported correctly
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume'; // Added Resume import
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Resume /> {/* Added Resume component */}
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;


