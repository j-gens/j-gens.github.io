import React from 'react';

import './contact.styles.css';


const Contact = () => (
  <div className='contact'>
    <span className='contact--title'>
      Contact Me
    </span>
    <span className='contact--subtitle'>
      I would love to hear from you!
    </span>
    <div className='contact--links'>
      <div className='contact--link'>
        <a href='mailto:juliatgens@gmail.com' target='_blank'>
          Email
        </a>
      </div>
      <div className='contact--link'>
        <a href='https://www.linkedin.com/in/juliatgens/' target='_blank'>
          LinkedIn
        </a>
      </div>
      <div className='contact--link'>
        <a href='https://github.com/j-gens' target='_blank'>
          Github
        </a>
      </div>
    </div>
  </div>
);


export default Contact;
