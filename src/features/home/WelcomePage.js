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
        { url: '/assets/images/car1.jpg' },
        { url: '/assets/images/car2.jpg' },
        { url: '/assets/images/car3.jpg' },
      ],
    };
    console.log('Props in wellcomePage are----', this.props);
  }

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
            slideDuration={2}
          />
          <div className="main-slider-text">
            <span className="normal-text primary-text">SHOP FEMMAKE. BUY HANDMAKE.</span>
          </div>
        </div>

        <div className="overlay-img brand-tag content-wrapper ">
          <img src="/assets/images/18128.jpg" alt="" />
          <div className="overlay-img-text">
            <span className="light-text">EMPOWER FEMALE IN DEVELOPING COUNTRIES</span>
          </div>
        </div>

        <div className="product-main-cards content-wrapper">
          <div className="overlay-product-cards">
            <div className="main-cloth-card showcase-item">
              <img src="/assets/images/clth.jpeg" />
              <div className="card-overlay-text">Clothing</div>
            </div>

            <div className="main-shawl-card showcase-item">
              <img src="/assets/images/shwl.jpeg" />
              <div className="card-overlay-text">Shawl</div>
            </div>

            <div className="main-sales-card showcase-item">
              <img src="/assets/images/sales.jpeg" />
              <div className="card-overlay-text">Bags and Accessories</div>
            </div>

            <div className="main-decor-card showcase-item">
              <img src="/assets/images/rugs.png" />
              <div className="card-overlay-text">Home Decor</div>
            </div>
          </div>
        </div>

        <div className="vision-container content-wrapper">
          <div className="vision-title">
            <h2>Mission and Vision</h2>
          </div>
          <div className="vision-main-cards">
            <div className="vision-innr-card">
              <div className="vision-img">
                <img src="/assets/images/Economic.png" />
              </div>
              <div className="vision-desc-title bold-text">ECONOMIC SECURITY</div>
              <div className="vision-desc">
                Ensure Financial Stability for Female in Developing Countries
              </div>
            </div>

            <div className="vision-innr-card">
              <div className="vision-img">
                <img src="/assets/images/Heart.png" />
              </div>
              <div className="vision-desc-title bold-text">ETHICAL PURCHASE</div>
              <div className="vision-desc">Encourage Customers To Make Ethical Buying Decision</div>
            </div>

            <div className="vision-innr-card">
              <div className="vision-img">
                <img src="/assets/images/EnpowerWomen.png" />
              </div>
              <div className="vision-desc-title bold-text">EMPOWER WOMEN</div>
              <div className="vision-desc">Sharpen the skill set of Female Artisans Worldwide</div>
            </div>
          </div>
        </div>

        <div className="thank-container content-wrapper">
          <div className="thank-main-desc">
            <div className="thank-title">Thank you card from artisan</div>
            <div className="thank-desc">
              Your purchase can contribute to the artisans’ livelihoods. A card with a meaningful
              message handwritten by Female Artisan will be included in your delivery
            </div>
          </div>

          <div className="thank-overlay-container">
            <div className="thank-overlay-img">
              <img src="/assets/images/thank.jpeg" />
            </div>

            <div className="thank-overlay-img-2">
              <img src="/assets/images/Thankcard.jpg" />
            </div>

            <div className="thank-overlay-img-3">
              <img src="/assets/images/hand-weaving.jpg" />
            </div>
          </div>
        </div>

        <div className="main-link-youtube">
          <span>
            <iframe
              src="https://www.youtube.com/embed/E7wJTI-1dvQ"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
              title="video"
              width={600}
              height={400}
            />
          </span>
        </div>

        <div className="artisans-container content-wrapper">
          <div className="art-title">OUR ARTISANS</div>
          <div className="artisan-main-cards">
            <div className="artisan-pics">
              <img src="/assets/images/Picture2.png" />
            </div>

            <div className="artisan-pics">
              <img src="/assets/images/Picture8.png" />
            </div>

            <div className="artisan-pics">
              <img src="/assets/images/Picture11.png" />
            </div>

            <div className="artisan-pics">
              <img src="/assets/images/Picture10.png" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WelcomePage;
