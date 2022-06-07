import React from 'react';
import { AboutUs, ContactUs } from '../common';
import Lottie from 'react-lottie-player';
import SimpleImageSlider from 'react-simple-image-slider';
import lottieJson from '../../Lottie.json';

class WelcomePage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        { url: '/assets/images/director.jpg' },
        { url: '/assets/images/dow.jpg' },
        { url: '/assets/images/co.jpg' },
      ],
      glance: [{ id: 0, img: '/assets/images/dow.jpg', name: 'ashu' }],
    };
    console.log('Props in wellcomePage are----====', this.state);
  }

  goToShop = () => {
    this.props.history.push('shop');
  };

  render() {
    return (
      <div className="home-welcome-page">
        <div className="main-slider">
          <SimpleImageSlider
            width={'100%'}
            height={600}
            images={this.state.images}
            showBullets={false}
            showNavs
            autoPlay
            slideDuration={3}
          />
        </div>

        
      </div>
    );
  }
}

export default WelcomePage;
