import React from 'react';

class Header extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};

    console.log('Props in Header are----', this.props);
  }

  render() {
    return (
      <div className="nav-container">
        <div className="logo-container">
          <img src={this.props.logo} alt="logo" />
        </div>

        <div className="links-container">
          <div className="links-container-inner">
          
             {/* HEADER-------------LINKS */}
            
            {/* <span>Home</span>
            <span>About us</span>
            <span>Contact us</span> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
