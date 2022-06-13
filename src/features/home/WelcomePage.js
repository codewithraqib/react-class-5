import React from 'react';
import { AboutUs, ContactUs } from '../common';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
// import Box from '@mui/material/Box';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class WelcomePage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      slides: [
        {
          url: '/assets/images/ricardoz.jpg',
          text:
            'How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?',
        },
        { url: '/assets/images/ricardou.jpg', text: 'second slide' },
        { url: '/assets/images/ricardov.jpg', text: 'Third slide' },
      ],
      glance: [{ id: 0, img: '/assets/images/dow.jpg', name: 'ashu' }],
      tabs: [
        { id: 0, name: 'All', active: true },
        { id: 1, name: 'Sports', active: false },
        { id: 2, name: 'National', active: false },
        { id: 3, name: 'International', active: false },
      ],
      tabData: [
        {
          id: 0,
          data:
            'How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?',
        },
        {
          id: 1,
          data:
            'all ok     How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?',
        },
        {
          id: 2,
          data:
            'national us ok    How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?',
        },
        {
          id: 3,
          data:
            'International us ok  How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?',
        },
      ],
      rightSlides: [
        [
          {
            id: 0,
            img: '/assets/images/ricardou.jpg',
            title: 'How Did van Gogh’s Turbulent Mind',
            name: 'json',
            date: '1/03/444',
          },
          {
            id: 1,
            img: '/assets/images/ricardou.jpg',
            title: 'How Did van Gogh’s Turbulent Mind',
            name: 'json',
            date: '1/03/444',
          },
          {
            id: 2,
            img: '/assets/images/ricardou.jpg',
            title: 'How Did van Gogh’s Turbulent Mind',
            name: 'json',
            date: '1/03/444',
          },
          {
            id: 3,
            img: '/assets/images/ricardou.jpg',
            title: 'How Did van Gogh’s Turbulent Mind',
            name: 'json',
            date: '1/03/444',
          },
          true,
        ],
        [
          {
            id: 0,
            img: '/assets/images/ricardou.jpg',
            title: 'How Did van Gogh’s Turbulent Mind',
            name: 'json',
            date: '1/03/444',
          },
          {
            id: 1,
            img: '/assets/images/ricardou.jpg',
            title: 'How Did van Gogh’s Turbulent Mind',
            name: 'json',
            date: '1/03/444',
          },
          {
            id: 2,
            img: '/assets/images/ricardou.jpg',
            title: 'How Did van Gogh’s Turbulent Mind',
            name: 'json',
            date: '1/03/444',
          },
          {
            id: 3,
            img: '/assets/images/ricardou.jpg',
            title: 'How Did van Gogh’s Turbulent Mind',
            name: 'json',
            date: '1/03/444',
          },
          false,
        ],
        [
          {
            id: 0,
            img: '/assets/images/ricardou.jpg',
            title: 'How Did van Gogh’s Turbulent Mind',
            name: 'json',
            date: '1/03/444',
          },
          {
            id: 1,
            img: '/assets/images/ricardou.jpg',
            title: 'How Did van Gogh’s Turbulent Mind',
            name: 'json',
            date: '1/03/444',
          },
          {
            id: 2,
            img: '/assets/images/ricardou.jpg',
            title: 'How Did van Gogh’s Turbulent Mind',
            name: 'json',
            date: '1/03/444',
          },
          {
            id: 3,
            img: '/assets/images/ricardou.jpg',
            title: 'How Did van Gogh’s Turbulent Mind',
            name: 'json',
            date: '1/03/444',
          },
          false,
        ],
      ],
      currentData: null,
      currentSelectedArray: 0,
    };
  }
  componentDidMount() {
    this.setState({ currentData: this.state.tabData[0].tabData });
  }

  onTabClick = tab => {
    let newTabs = [];

    this.state.tabs.map(oldTab => {
      if (oldTab.id === tab.id) {
        newTabs.push({ ...oldTab, active: true });
      } else {
        newTabs.push({ ...oldTab, active: false });
      }
    });
    this.setState({ tabs: newTabs });

    setTimeout(() => {
      this.getTabData();
    }, 100);
  };

  getTabData = () => {
    this.state.tabs.map(tab => {
      if (tab.active) {
        console.log('i am inside++++++++++++++', this.state.tabData[tab.id].data);
        this.setState({ currentData: this.state.tabData[tab.id].data });
      }
    });
  };

  goToShop = () => {
    this.props.history.push('shop');
  };

  // changeTab = index => {
  //   let newTabs = [];

  //   this.state.tabs.map(val => {
  //     if (val.id === index) {
  //       newTabs.push({ ...val, active: true });
  //     } else {
  //       newTabs.push({ ...val, active: false });
  //     }
  //   });

  //   this.setState({ tabs: newTabs });
  // };

  // singleTab = (tab, index) => {
  //   return (
  //     <div
  //       style={tab.active ? { backgroundColor: '#FFFFFF' } : { backgroundColor: '#EDEDED' }}
  //       key={index}
  //       className="tab"
  //       onClick={() => this.changeTab(index)}
  //     >
  //       <span>{tab.name}</span>
  //     </div>
  //   );
  // };
  // slid

  renderNewsChunk = val => {
    return (
      <div className="news-chunk-container">
        <img src={val.img} />
        <div className='news-desc-container'>
          <div>{val.title}</div>

          <div className='news-text' >
            <span>{val.name}</span>
            <span className='news-date'>{val.date}</span>
          </div>
        </div>
      </div>
    );
  };

  renderDots = () => {
    return this.state.rightSlides.map(val => {
      console.log({ val });
      return <div className={val[4] ? 'dot active' : 'dot'}></div>;
    });
  };
 
 


  render() {
    return (
      <div className="home-welcome-page">
        <div className="main-slider">
          <Carousel showThumbs={false}>
            {this.state.slides.map((val, index) => {
              return (
                <div className="slide" key={index}>
                  <img src={val.url} />
                  <div className="overlay-text-container">
                    <div className="chip">
                      <span>SPORTS</span>
                    </div>
                    <span className="overlay-text">{val.text}</span>

                    <div className="continue-read">
                      <span>Continue Reading</span>

                      <span className="arrow">
                        <img src="/assets/images/arroww.png" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="hero-container content-wrapper">
          <div className="inner-hero">
            <div className="right-hero-side">
              <div className="hero-side-header">
                <div className="line-text-container">
                  <span className="line-text">Don't Miss </span>
                  <div className="hf-line"></div>
                </div>

                <div className="tabs-container">
                  {/* {this.state.tabs.map((tab, index) => {
                    return this.singleTab(tab, index);
                  })} */}
                  {this.state.tabs.map(tab => {
                    return (
                      <div
                        className={tab.active ? 'tab active-tab' : 'tab'}
                        onClick={() => this.onTabClick(tab)}
                      >
                        <span>{tab.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="tab-desc">
                <span>{this.state.currentData}</span>
              </div>
              <div className="main-news-container">
                <div className="inner-news-container">
                  <div className="card">
                    <div className="card-img">
                      <img src="/assets/images/market.jpg" />
                    </div>
                    <div className="desc-container">
                      <div className="card-title">
                        How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in
                        Physics?
                      </div>
                      <div className="card-desc">
                        Pick the yellow peach that looks like a sunset with its red, orange, and
                        pink coat skin, peel it off with your teeth. Sink them into unripened...
                      </div>
                      <div className="card-date">11/26/4444</div>
                    </div>
                  </div>
                  <div className="card2">
                    <div className="desc-container">
                      <div className="card-title">
                        How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in
                        Physics?{' '}
                      </div>
                      <div className="card-date">122/3737</div>
                    </div>
                  </div>
                  <div className="card3">
                    <div className="desc-container">
                      <div className="card-img">
                        <img src="/assets/images/ricardou.jpg" />
                      </div>
                      <div className="card-title">
                        How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in
                        Physics?
                      </div>
                      <div className="card-date">23/09/22</div>
                    </div>
                  </div>
                </div>

                <div className="sub-inner">
                  <div className="card4">
                    <div className="card-img">
                      <img src="/assets/images/market.jpg" />
                    </div>
                    <div className="desc-container">
                      <div className="card-title">
                        How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in
                        Physics?
                      </div>

                      <div className="card-date">11/26/4444</div>
                    </div>
                  </div>
                  <div className="card5">
                    <div className="card-img">
                      <img src="/assets/images/market.jpg" />
                    </div>
                    <div className="desc-container">
                      <div className="card-title">
                        How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in
                        Physics?
                      </div>

                      <div className="card-date">11/26/4444</div>
                    </div>
                  </div>
                  <div className="card6">
                    <div className="card-title">
                      How Did van Gogh’s Turbulent Mind Depict One of Physics?{' '}
                    </div>
                  </div>
                  <div className="card7">
                    <div className="card-title">
                      How Did van Gogh’s Turbulent Mind Depict One of Physics?{' '}
                    </div>
                  </div>
                  <div className="card8">
                    <div className="card-title">
                      How Did van Gogh’s Turbulent Mind Depict One of Physics?{' '}
                    </div>
                  </div>
                </div>

                {/* new */}

                <div className="hero-side-header">
                  <div className="line-text-container">
                    <span className="line-text">What's Trending </span>
                    <div className="hf-line"></div>
                  </div>

                  <div className="tabs-container">
                    {/* {this.state.tabs.map((tab, index) => {
                    return this.singleTab(tab, index);
                  })} */}
                    {this.state.tabs.map(tab => {
                      return (
                        <div
                          className={tab.active ? 'tab active-tab' : 'tab'}
                          onClick={() => this.onTabClick(tab)}
                        >
                          <span>{tab.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="tab-desc">
                  <span>{this.state.currentData}</span>
                </div>
              </div>
            </div>
            <div className="left-hero-side">
              <div className='arrow-container'>
                <div className="leftarrow" >
                  <img src="/assets/images/lftarrow.png"  />
                </div>
                <div className="dots">{this.renderDots()}</div>
                <div className="rightarrow">
                  <img src="/assets/images/forward.png" />{' '}
                </div>
              </div>

              {this.state.rightSlides[this.state.currentSelectedArray].map((val, index) => {
                return index <= 3 ? this.renderNewsChunk(val) : null;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WelcomePage;
