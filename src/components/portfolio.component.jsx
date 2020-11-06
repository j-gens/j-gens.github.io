import React from 'react';

import PortfolioApp from './portfolio-app.component.jsx';
import { PORTFOLIO } from '../content/content.js';


class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seeMore: false,
      moreText: 'Show More',
      lessText: 'Show Less',
    };
    this.toggleView = this.toggleView.bind(this);
  }

  toggleView() {
    this.setState({
      seeMore: !this.state.seeMore,
    });
  }

  render() {
    const { seeMore, moreText, lessText } = this.state;
    return (
      <div className='portfolio' id='portfolio'>
        <span className='section-title'>
          Portfolio
        </span>
        <div className='portfolio--content'>
          {
            PORTFOLIO.apps
            .filter((ele, i) => i < (seeMore ? PORTFOLIO.apps.length : 4))
            .map(app =>
              <PortfolioApp key={app.name} app={app} />
            )
          }
        </div>
        <div className='portfolio--button' onClick={this.toggleView}>
          {
            seeMore ? lessText : moreText
          }
        </div>
      </div>
    );
  }
}


export default Portfolio;
