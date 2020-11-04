import React from 'react';


const PortfolioApp = (props) => {
  const { name, tagline, tech, url } = props.app;
  return (
    <div className='portfolio-app' style={{backgroundImage: `url(${url.image})`}}>
      <div className='portfolio-app--content'>
        <div className='section-subtitle__large'>
          {name}
        </div>
        <div className='section-subtitle__small'>
          {tagline}
        </div>
        <div className='portfolio-app--tech'>
          {
            tech.map((item, index) =>
              <div className='portfolio-app--tech-item' key={index}>{item}</div>
            )
          }
        </div>
        <div className='portfolio-app--links'>
          <a href={url.github} target='_blank'>
            See on GitHub &#8658;
          </a>
          <a href={url.more} target='_blank'>
            See more details &#8658;
          </a>
        </div>
      </div>
    </div>
  )
}


export default PortfolioApp;
