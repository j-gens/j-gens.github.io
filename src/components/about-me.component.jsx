import React from 'react';

import { ABOUTME } from '../content/content.js';


const AboutMe = () => (
  <div className='about-me' id='about-me'>
    <span className='section-title'>
      About Me
    </span>
    {ABOUTME.paragraphs.map((paragraph, index) =>
      <div className='about-me--content' key={index}>
        {paragraph}
      </div>
    )}
  </div>
);


export default AboutMe;
