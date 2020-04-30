import React from 'react';

import { EDUSKILLS } from '../../content/content.js';

import './education.styles.css';


const Education = () => (
  <div className='edu'>
    <span className='section-title'>
      Education
    </span>
    <div className='edu--content'>
      {
        EDUSKILLS.education.map(edu =>
          <div className='edu--content--item' key={edu.school}>
              <div className='section-subtitle__large'>
                {edu.school}
              </div>
              <div className='section-subtitle__small'>
                {edu.detail}
              </div>
          </div>
        )
      }
    </div>
  </div>
);


export default Education;
