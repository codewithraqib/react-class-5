import React from 'react';

class AboutUs extends React.PureComponent {
  goToPage = () => {
    //some other logic which not visible in browser
  };
  render() {
    return (
      <div className="content-wrapper about-us-container">
        <div className="about-us-inner">
          <div className="image-container">
            <img src="/assets/images/logo.png" alt="" />
          </div>

          <div className="description">
            <div className="title-container">
              <div className="title">
                <span>About US</span>
              </div>
              <div className="dot-line-container">
                <div className="dot"></div>
                <div className="line"></div>
              </div>
            </div>
            <span>
              Bracecodes Software Solutions is a company established in November 2016. After getting
              featured in many spheres of Web and Mobile Development we decided to register as
              Private Limited Company in Jan 2019 and we are presently a Private Limited Comapny
              from March 2019. We design Dynamic Websites, Standalone Customized Desktop Apps,
              Mobile Apps for both Platforms - Android and IOS. We offer a Powerful tool for School
              Management called Ease My School(EMS) which gives you the power of efficent
              communication with parents and includes all the neccessary feature and some of the
              features are- attendance, Bus Tracking, Result Declaration, SMS Service integration,
              Fee Module, Class Tests, Notifications and much more... We also teach Certification
              courses - C, C++, Java, PHP, JavaScript. We are masters in teaching Android
              Development as a Job Oriented Course. We also offer some services - Branding and
              Promotion of your business Unit SMS Service to communicate with your clients.
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
