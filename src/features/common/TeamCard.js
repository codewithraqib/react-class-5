import React from 'react';

class TeamCard extends React.PureComponent {
  render() {
    return (
      <div className="team-card-container">
        <div className="title">{this.props.member.name}</div>
        <div className="desc">{this.props.member.desc}</div>
      </div>
    );
  }
}

export default TeamCard;
