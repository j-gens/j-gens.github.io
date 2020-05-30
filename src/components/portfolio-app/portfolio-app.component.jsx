import React from 'react';

import './portfolio-app.styles.css';


const PortfolioApp = (props) => {
  const { name, tagline, about, tech, url } = props.app;
  return (
    <div className='portfolio-app subsection'>
      <div className='portfolio-app--content'>
        <span className='section-subtitle__large'>
          {name}
        </span>
        <span className='section-subtitle__small'>
          {tagline}
        </span>
        <div className='portfolio-app--about'>
          {
            about.map(item =>
              <div className='porfolio-app--about--item' key={item}>
                &#x2022; {item}
              </div>
            )
          }
        </div>
        <div className='portfolio-app--tech'>
          {
            tech.map(string =>
              <div className='portfolio-app--tech--stack' key={string}>
                {string.toUpperCase()}
              </div>
              )
          }
        </div>
      </div>
      <div className='portfolio-app--image'>
        <a href={url.github} target='_blank'>
          <img src={url.image} alt={tagline} />
        </a>
      </div>
    </div>
  )
}


export default PortfolioApp;
