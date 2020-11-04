import React from 'react';

import { EDUSKILLS } from '../content/content.js';
import SkillSet from './skill-set.component.jsx';


const Skills = () => (
  <div className='skills'>
    <span className='section-title'>
        Skills
    </span>
    <div className='skills--content'>
      {
        EDUSKILLS.skills.map(skill =>
          <SkillSet key={skill.title} skill={skill} />
        )
      }
    </div>
  </div>
);


export default Skills;
