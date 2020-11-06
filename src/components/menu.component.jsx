import React from 'react';


class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu,
    })
  }

  render() {
    const { showMenu } = this.state;
    let content;

    if (showMenu) {
      content = null;
    } else {
      content = (
        <div className='menu-dropdown'>
          <a href='#about-me'>About Me</a>
          <a href='#portfolio'>Portfolio</a>
          <a href='#skills'>Skills</a>
          <a href='#contact'>Contact Me</a>
        </div>
      )
    }

    return (
      <div className='menu' onClick={this.toggleMenu}>
        <div className='menu-button'>
          &#9776;
        </div>
        {content}
      </div>
    );
  }
}


export default Menu;
