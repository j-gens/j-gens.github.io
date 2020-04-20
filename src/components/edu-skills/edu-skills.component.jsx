import React from 'react';

import { EDUSKILLS } from '../../content/content.js';

import './edu-skills.styles.css';


const EduSkills = () => (
  <div className='edu-skills'>
    <div className='edu-skills--edu'>
      <span className='edu-skills--title'>
        Education
      </span>
      <div className='edu-skills--edu-content'>
        {
          EDUSKILLS.education.map(edu =>
            <div className='edu-skills--edu-content--item'>
              <div className='edu-skills--subtitle__large'>
                {edu.school}
              </div>
              <div className='edu-skills--subtitle__small'>
                {edu.detail}
              </div>
            </div>
          )
        }
      </div>
    </div>
    <div className='edu-skills--skills'>
      <span className='edu-skills--title'>
        Skills
      </span>
      <div className='edu-skills--skills-content'>
        {
          EDUSKILLS.skills.map(skill =>
            <div className='edu-skills--skills-content--item'>
              <span className='edu-skills--subtitle__small'>
                {skill}
              </span>
            </div>
          )
        }
      </div>
    </div>
  </div>
);


export default EduSkills;
