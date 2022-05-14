import React from 'react';
import { AboutUs } from '../common';
import Header from '../common/Header';
import MyComponent from './MyComponent';

class WelcomePage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="home-welcome-page">
        <MyComponent message={'I am from welcome page'} />

        <AboutUs />
      </div>
    );
  }
}

export default WelcomePage;
