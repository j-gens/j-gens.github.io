import React from 'react';

import { EDUSKILLS } from '../../content/content.js';

import './education.styles.css';


const Education = () => (
  <div className='edu'>
    <span className='edu--title'>
      Education
    </span>
    <div className='edu--content'>
      {
        EDUSKILLS.education.map(edu =>
          <div className='edu--content--item'>
            <div className='edu--subtitle__large'>
              {edu.school}
            </div>
            <div className='edu--subtitle__small'>
              {edu.detail}
            </div>
          </div>
        )
      }
    </div>
  </div>
);


export default Education;
