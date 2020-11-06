import React from 'react';

import { CONTACT } from '../content/content.js';


const Contact = () => {
  const { links } = CONTACT;
  return (
    <div className='contact' id='contact'>
      <div className='contact--content'>
        <div className='contact--content--title'>
          <span className='section-title'>
            Get in Touch
          </span>
          <span className='section-subtitle__small'>
            I would love to hear from you!
          </span>
        </div>
        <div className='contact--content--links'>
          {
            links.map((link) =>
              <a href={link.link} target='_blank' key={link.name}>
                <div className='contact--content--link'>
                  <img src={link.img} alt='logo' />
                  {link.name}
                </div>
              </a>
            )
          }
        </div>
      </div>
      <div className='footnote'>
        Copyright © Julia Gens 2020 || Background Photo Courtesy of René Teinze on Unsplash
      </div>
    </div>
  );
}


export default Contact;
