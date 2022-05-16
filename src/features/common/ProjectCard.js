import React from 'react';

class ProjectCard extends React.PureComponent {
  render() {
    return (
      <div className="project-card-container">
        <div className="title-desc">
          <div className="title">{this.props.project.name}</div>
          <div className="desc">{this.props.project.desc}</div>
        </div>
        <div className="brand">
          <div className="title">{this.props.project.name}</div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
