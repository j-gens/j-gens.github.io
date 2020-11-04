import React from 'react';


const SkillSet = (props) => {
  const { title, tech } = props.skill;
  return (
    <div className='skill-set subsection'>
      <span className='section-subtitle__large'>
        {title}
      </span>
      <div className='skill-set--content'>
        {
          tech.map(skill =>
            <div key={skill} className='skill-set--content--item'>
              {skill}
            </div>
          )
        }
      </div>
    </div>
  );
}


export default SkillSet;
