import React from 'react';
import Navbar from './components/Navbar'; 
import Home from './components/Home';

import Projects from './components/Projects';
import Resume from './components/Resume'; 
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <Resume />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;


