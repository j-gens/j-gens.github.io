import React from 'react';

import { ABOUTME } from '../../content/content.js';

import './about-me.styles.css';


const AboutMe = () => (
  <div className='about-me' id='about-me'>
    <span className='section-title'>
      About Me
    </span>
    <div className='about-me--content'>
      {ABOUTME.paragraphs.map((paragraph, index) =>
        <div className='about-me--content--p' key={index}>
          {paragraph}
        </div>
      )}
    </div>
  </div>
);


export default AboutMe;
