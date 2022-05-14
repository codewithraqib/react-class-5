import React from 'react';

class ProjectCard extends React.PureComponent {
  render() {
    return (
      <div className="project-card-container">
        <div className='project-card-inner'>
        <div className="title">{this.props.project.name}</div>
        <div>{this.props.project.desc}</div>
        
</div>
      </div>
    );
  }
}

export default ProjectCard;
