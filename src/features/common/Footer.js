
import React, { PureComponent } from 'react';

class Footer extends React.PureComponent {
  constructor(props) {
    super(props);

    console.log('Props in footer are----', this.props);
  }

  goToLink = link => {
    this.props.history.push(link);
  };
  render() {
    return (
      <div className="footer-container  ">
        <div className="footer-container-inner content-wrapper">
          {this.props.footerLinks.map(outerLink => {
            return (
              <div className="footer-item">
                <div style={outerLink.head === true ? { fontSize: 20 } : {}}>{outerLink.name}</div>
                {outerLink.subLinks &&
                  outerLink.subLinks.map(subLink => {
                    return subLink.link ? (
                      <div onClick={() => this.goToLink(subLink.link)}>{subLink.name}</div>
                    ) : (
                      <div className="without-link">{subLink.name}</div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Footer;
