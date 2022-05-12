import React from 'react';

class MyComponent extends React.PureComponent {
  render() {
    return <div> {this.props.message ? this.props.message : 'No Message'} </div>;
  }
}

export default MyComponent;
