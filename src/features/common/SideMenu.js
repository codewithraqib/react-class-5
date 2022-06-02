import React from 'react';

class SideMenu extends React.PureComponent {
  render() {
    return (
      <div className='navigation'>
        <div id="menuToggle">
          <input type="checkbox" />
          
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>About</li>
            </a>
            <a href="#">
              <li>Info</li>
            </a>
            <a href="#">
              <li>Contact</li>
            </a>
           
          </ul>
        </div>
      </div>
    );
  }
}

export default SideMenu;
