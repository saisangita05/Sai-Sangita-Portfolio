import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skill from './components/Skills/Skill';
import MyWork from './components/MyWork/MyWork';
import Testimonial from './components/Testiomonials/Testimonial';  // Fix the spelling here
import Contact from './components/Contacts/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
      <Navbar />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skill /></div>
      <div id="projects"><MyWork /></div>
      <div id="testimonials"><Testimonial /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}

export default App;
