import React from 'react';

import PortfolioApp from '../portfolio-app/portfolio-app.component.jsx';
import { PORTFOLIO } from '../../content/content.js';

import './portfolio.styles.css';


const Portfolio = () => (
  <div className='portfolio'>
    <span className='section-title'>
      Portfolio
    </span>
    <div className='portfolio--content'>
      {
        PORTFOLIO.apps.map(app =>
          <PortfolioApp key={app.name} app={app} />
        )
      }
    </div>
  </div>
);


export default Portfolio;
