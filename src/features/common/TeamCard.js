import React from 'react';

class TeamCard extends React.PureComponent {
  render() {
    return (
      <div className="teams-card-container">
        <div className="title">{this.props.member.name}</div>
        <div>{this.props.member.desc}</div>
      </div>
    );
  }
}

export default TeamCard;
