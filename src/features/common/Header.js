import React from 'react';

class Header extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      links: [
        { id: 0, name: 'Home' },
        { id: 1, name: 'Clothinng' },
        { id: 2, name: 'Shawals' },
        { id: 3, name: 'Home Decor' },
        { id: 4, name: 'Skin Care' },
        { id: 5, name: 'Bags and Accessories' },
        { id: 6, name: 'Gallery' },
        { id: 7, name: 'About us' },
      ],
    };

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
            {this.state.links.map(link => {
              return (
                <div className="link-item">
                  <span className="link-span">{link.name}</span>
                  <span className="underline"></span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
