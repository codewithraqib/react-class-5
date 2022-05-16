import React from 'react';
import { AboutUs, ContactUs, MainStructuralComponent } from '../common';
import Header from '../common/Header';
import MyComponent from './MyComponent';

class WelcomePage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      services: [
        { id: 0, name: 'Website Development', desc: 'we develop custome websites' },
        { id: 1, name: 'Mobile App Development', desc: 'we develop custom Complex Mobile apps' },
        { id: 2, name: 'Certification Courses', desc: 'we develop custom Complex Mobile apps' },
        { id: 3, name: 'General Services', desc: 'we develop custom Complex Mobile apps' },
      ],

      teamMembers: [
        { id: 0, name: 'name 1', desc: 'Website Dev' },
        { id: 1, name: 'Name 2', desc: 'Mobile apps developer' },
        { id: 2, name: 'Name 3', desc: 'Mobile apps developer' },
        { id: 3, name: 'Name 4', desc: 'Mobile apps developer' },
      ],
      projects: [
        { id: 0, name: 'project 1', desc: 'Website Dev' },
        { id: 1, name: 'project 2', desc: 'Mobile apps developer' },
        { id: 2, name: 'project 3', desc: 'Mobile apps developer' },
        { id: 3, name: 'project 4', desc: 'Mobile apps developer' },
      ],
    };
  }

  render() {
    return (
      <div className="home-welcome-page">
        {/* <MyComponent message={'I am from welcome page'} /> */}

        <AboutUs />

        <MainStructuralComponent
          title={'Service Offered'}
          desc={
            'We offer a lot of services in the field of IT which satisfy our customers and help our customers to grow.'
          }
          services={this.state.services}
        />

        <MainStructuralComponent
          title={'Our Team'}
          desc={
            'We are 4 members in a team working in dynamic and different spheres of development'
          }
          teamMembers={this.state.teamMembers}
        />

        <MainStructuralComponent
          title={'Our Projects | Products'}
          desc={
            'We have developed a lot of products for ourselves and more for clients in which some prominent ones are '
          }
          projects={this.state.projects}
        />
        <ContactUs/>
      </div>
      
    );
  }
}

export default WelcomePage;
