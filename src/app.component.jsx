import React from 'react';

import Welcome from './components/welcome/welcome.component.jsx';
import Portfolio from './components/portfolio/portfolio.component.jsx';
import Education from './components/education/education.component.jsx';
import Skills from './components/skills/skills.component.jsx';
import AboutMe from './components/about-me/about-me.component.jsx';
import Contact from './components/contact/contact.component.jsx';

import './app.styles.css';


const App = () => (
  <div className='app'>
    <Welcome />
    <Portfolio />
    <Skills />
    <Education />
    <AboutMe />
    <Contact />
  </div>
);


export default App;
