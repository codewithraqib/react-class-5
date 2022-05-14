import React from 'react';
import ServicesCard from './ServicesCard';
import TeamCard from './TeamCard';

class MainStructuralComponent extends React.PureComponent {
  constructor() {
    super();

    this.state = {};
  }

  get = () => {
    return <div> My name</div>;
  };

  render() {
    return (
      <div className="main-structure-container content-wrapper">
        <div className="title-container">
          <div className="title">
            <span>{this.props.title}</span>
            {/* <span>Service Offered</span> */}
          </div>
          <div className="dot-line-container">
            <div className="dot"></div>
            <div className="line"></div>
          </div>

          <div className="description">
            <span>{this.props.desc}</span>
          </div>
        </div>

        <div className="main-cards-container">
          {this.props.services &&
            this.props.services.map(service => <ServicesCard service={service} />)}

          {this.props.teamMembers &&
            this.props.teamMembers.map(member => <TeamCard member={member} />)}

          {/* {this.props.projects &&
            this.props.projects.map(projects => <Projectcard service={projects} />)} */}
        </div>
      </div>
    );
  }
}

export default MainStructuralComponent;
