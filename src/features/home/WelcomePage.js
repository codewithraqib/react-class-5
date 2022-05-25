import React from 'react';
import { AboutUs, ContactUs } from '../common';
import Header from '../common/Header';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import SimpleImageSlider from "react-simple-image-slider";


class WelcomePage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
       images : [
        { url: "/assets/images/car1.jpg" },
        { url: "/assets/images/car2.jpg" },
        { url: "/assets/images/car3.jpg" },
       
      ],
    
    };
    console.log('Props in wellcomePage are----', this.props);
  
  }
  
 
  render() {
  
    return (
      
      <div className="home-welcome-page  ">
        <div className='main-slider'>
          <SimpleImageSlider
        width={1264}
        height={600}
        images={this.state.images}
        showBullets={false}
        showNavs={false}
        autoPlay
        slideDuration={2}
      />
      <div className='main-slider-text'>
      SHOP FEMMAKE. BUY HANDMAKE.
      </div>
      </div>
      <div className='overlay-img '>
        
        <img src="/assets/images/wll1.png" />
        <div className='overlay-img-text'>
      SHOP FEMMAKE. BUY HANDMAKE.
      </div>
      </div>
    </div>
      
    );
  }

}

export default WelcomePage;
