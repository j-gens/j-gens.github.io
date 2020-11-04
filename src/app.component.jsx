import React from 'react';

import Welcome from './components/welcome.component.jsx';
import Portfolio from './components/portfolio.component.jsx';
import Skills from './components/skills.component.jsx';
import AboutMe from './components/about-me.component.jsx';
import Contact from './components/contact.component.jsx';


const App = () => (
  <div className='app'>
    <Welcome />
    <AboutMe />
    <Portfolio />
    <Skills />
    <Contact />
  </div>
);


export default App;
