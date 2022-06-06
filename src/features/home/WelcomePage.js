import React from 'react';
import { AboutUs, ContactUs } from '../common';
import Header from '../common/Header';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import SimpleImageSlider from 'react-simple-image-slider';

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
            showNavs={false}
            autoPlay
            slideDuration={3}
          />
        </div>

        <div className="glance-conatainer content-wrapper">
          <div className="inner-container">
            <div className="overlay-cards">
              <div className="glance-img">
                <img src="/assets/images/dow.jpg" alt="" />
              </div>
              <div className="overlay-text">
                <span>overlay</span>
              </div>
            </div>

            <div className="overlay-cards">
              <div className="glance-img">
                <img src="/assets/images/dow.jpg" alt="" />
              </div>
              <div className="overlay-text">
                <span>overlay</span>
              </div>
            </div>

            <div className="overlay-cards">
              <div className="glance-img">
                <img src="/assets/images/dow.jpg" alt="" />
              </div>
              <div className="overlay-text">
                <span>overlay</span>
              </div>
            </div>

            <div className="overlay-cards">
              <div className="glance-img">
                <img src="/assets/images/dow.jpg" alt="" />
              </div>
              <div className="overlay-text">
                <span>overlay</span>
              </div>
            </div>

            <div className="overlay-cards">
              <div className="glance-img">
                <img src="/assets/images/dow.jpg" alt="" />
              </div>
              <div className="overlay-text">
                <span>overlay</span>
              </div>
            </div>
          </div>
        </div>
        {/* new */}

        <div className="contact-notification-container content-wrapper">
          <div className="contact-view-card">
            <div className="contact-title">
              <span>INTERNATIONAL DELHI PUBLIC SCHOOL</span>
            </div>
            <div className="location-map">
              <div>
                <span className="map-icon">
                  <img src="/assets/images/location.png" alt="" />
                </span>
                <span className="map-address"> Chowdhary Bagh, Srinagar, J&K, 19000</span>
              </div>
            </div>
            <div className="mail-icon">
              <span>
                <img src="/assets/images/mail.png" alt="" />
              </span>
              <span className="mail-address">idpssrinagar@gmail.com</span>
            </div>
            <div className="phone-icon">
              <span>
                <img src="/assets/images/phone.png" alt="" />
              </span>
              <span className="phone-address"> 8899888393</span>
            </div>
          </div>

          <div className="notifications-card">
            <marquee behavior="scroll" direction="up">
              <div className="scroll-notification">
                <div className="notification">
                  <span>
                    If now feels like one of those times for you, keep reading. In this guide, we’ll
                    show you how to generate scrolling text in HTML and CS
                  </span>
                </div>
              </div>
            </marquee>
            <div className="notification-title">Notification</div>
          </div>
        </div>

        <div className="premier-container content-wrapper">
          <div className="preimer-title">IDPS PREIMER</div>
          <div className="premier-main-cards">
            <div className="premier-card">
              <div className="card-gift">
                <img src="/assets/images/idps.png" alt="" />
              </div>
              <div className="premier-name">
                <span> About School</span>
              </div>
              <div className="premier-desc">
                <span>
                  {' '}
                  The School Campus The School Campus is situated on the outskirts of Srinagar city,
                  about 12 kms from city centre Lal Chowk, and 2 kms from Kashmir University campus,
                  sprawled over 100 kanals of land.
                </span>
              </div>
            </div>

            <div className="premier-card">
              <div className="card-gift">
                <img src="/assets/images/idps.png" alt="" />
              </div>
              <div className="premier-name">
                <span> About School</span>
              </div>
              <div className="premier-desc">
                <span>
                  {' '}
                  The School Campus The School Campus is situated on the outskirts of Srinagar city,
                  about 12 kms from city centre Lal Chowk, and 2 kms from Kashmir University campus,
                  sprawled over 100 kanals of land.
                </span>
              </div>
            </div>

            <div className="premier-card">
              <div className="card-gift">
                <img src="/assets/images/idps.png" alt="" />
              </div>
              <div className="premier-name">
                <span> About School</span>
              </div>
              <div className="premier-desc">
                <span>
                  {' '}
                  The School Campus The School Campus is situated on the outskirts of Srinagar city,
                  about 12 kms from city centre Lal Chowk, and 2 kms from Kashmir University campus,
                  sprawled over 100 kanals of land.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="trending-container content-wrapper">
          <div className='trend-tiltle'>
          Trending at IDPS
          </div>

          <div className='trend-main-card'>
            <div className='trend-inner'>
            <div className="social-img">
                <img src="/assets/images/facebook.png" alt="" />
              </div>
              <div className='social-view'>
              <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FIdpssrinagar%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
               width={340}
                height={500}
                 border="none"
                 overflow="hidden"
                 scrolling="no" 
                frameborder="0"
                 allowfullscreen="true"
                 allow="autoplay;
               encrypted-media; picture-in-picture; "
               >

               </iframe>
              </div>
            </div>
            
            <div className='trend-inner'>
            <div className="social-img">
                <img src="/assets/images/instagram.png" alt="" />
              </div>
              <div className='social-view'>
              <iframe src="https://www.instagram.com/bhat__ashu/embed"
              width={300} 
              height={500}
              frameborder="0"
               scrolling="no" allowtransparency="true"></iframe>

               
              </div>
            </div>

            <div className='trend-inner'>
            <div className="social-img">
                <img src="/assets/images/twitter.png" alt="" />
              </div>
              <div className='social-view'>
              <iframe 
              border="none"
               height={500}
               width={340}
               data-tweet-url="https://twitter.com/IdpsSrinagar" 
              src="data:text/html;charset=utf-8,%3Ca%20class%3D%22twitter-timeline%22%20href%3D%22https%3A//twitter.com/IdpsSrinagar%3Fref_src%3Dtwsrc%255Etfw%22%3ETweets%20by%20IdpsSrinagar%3C/a%3E%0A%3Cscript%20async%20src%3D%22https%3A//platform.twitter.com/widgets.js%22%20charset%3D%22utf-8%22%3E%3C/script%3E%0A"></iframe>
             
              </div>
            </div>
       

          </div>
        </div>
      </div>
    );
  }
}

export default WelcomePage;
