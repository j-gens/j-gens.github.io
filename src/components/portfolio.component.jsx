import React from 'react';

import PortfolioApp from './portfolio-app.component.jsx';
import { PORTFOLIO } from '../content/content.js';


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
