import React from 'react';
import ServicesCard from './ServicesCard';
import TeamCard from './TeamCard';
import ProjectCard from './ProjectCard';

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
        </div>

         
        {this.props.teamMembers ?
        <div className="teams-card-container">
          {this.props.teamMembers.map(member => <TeamCard member={member} />)}
        </div> : null}
        
        
        {this.props.projects ?
          <div className="project-card-container">{ this.props.projects.map(project => <ProjectCard project={project} />)}
        </div> : null}
        
      </div>
    );
  }
}

export default MainStructuralComponent;
