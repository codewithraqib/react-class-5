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
            {this.props.myLinks.map(val => {
              return (
                <span
                  style={{ backgroundColor: val.active ? 'red' : '' }}
                  onClick={() => this.props.onNavClick(val)}
                >
                  {val.name}
                </span>
              );
            })}
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
