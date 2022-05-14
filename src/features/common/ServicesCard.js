import React from 'react';

class ServicesCard extends React.PureComponent {
  render() {
    return (
      <div className="service-card-container">
        <div className="img-container">
          <img src="/assets/images/logo.png" alt="" />
        </div>
        <div className="title">{this.props.service.name}</div>
        <div>{this.props.service.desc}</div>
      </div>
    );
  }
}

export default ServicesCard;
