import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Features from './components/Features';
import ForestShield from './components/ForestShield';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Mission />
      <Features />
      <ForestShield />
      <Footer />
    </div>
  );
}

export default App;

