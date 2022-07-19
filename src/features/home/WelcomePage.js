import React from 'react';
import { AboutUs, ContactUs } from '../common';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
// import Box from '@mui/material/Box';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import * as actions from './redux/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class WelcomePage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      newscard: [
        {
          urlToImage: '/assets/images/market.jpg',
          title: 'How Did van Goghs Turbulent Mind Depict One of the Most Complex Concepts',
          text:
            ' Pick the yellow peach that looks like a sunset with its red, orange, and How Did van Goghs Turbulent Mind Depict One of the Most Complex Concepts',
          date: '12/34/4444',
          author: 'json',
        },
        {
          title: 'How Did van Goghs Turbulent Mind Depict One of the Most Complex Concepts',
          date: '12/34/4444',
          author: 'json',
        },
        {
          url: '/assets/images/ricardou.jpg',
          title: 'How Did van Goghs Turbulent Mind Depict One of the Most Complex Concepts',
          text: 'How Did van Goghs Turbulent Mind Depict One of the Most Complex Concepts',
          date: '12/34/4444',
          author: 'json',
        },
        {
          url: '/assets/images/ricardou.jpg',
          title: 'How Did van Goghs Turbulent Mind Depict One of the Most Complex Concepts',
          text: 'How Did van Goghs Turbulent Mind Depict One of the Most Complex Concepts',
          date: '12/34/4444',
          author: 'json',
        },
      ],
      subnewscard: [
        {
          url: '/assets/images/market.jpg',
          title: 'How Did van Goghs Turbulent Mind Depict One of the Most Complex Concepts',
          text: 'How Did van Goghs Turbulent Mind Depict One of the Most Complex Concepts',
          date: '12/34/4444',
          author: 'json',
        },
        {
          url: '/assets/images/market.jpg',
          title: 'How Did van Goghs Turbulent Mind Depict One of the Most Complex Concepts',
          text: 'How Did van Goghs Turbulent Mind Depict One of the Most Complex Concepts',
          date: '12/34/4444',
          author: 'json',
        },
        {
          title: 'How Did van Goghs Turbulent Mind Depict One of the Most Complex Concepts',
        },
        {
          title: 'How Did van Goghs Turbulent Mind Depict One of the Most Complex Concepts',
        },
        {
          title: 'How Did van Goghs Turbulent Mind Depict One of the Most Complex Concepts',
        },
      ],
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
        { id: 4, name: 'politics', active: false },
        { id: 5, name: 'kashmir', active: false },
      ],
      tabData: [
        {
          id: 0,
          data:
            'How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?',
        },
        {
          id: 1,
          urlToImage: '/assets/images/ricardou.jpg',
          data:
            'all ok     How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?',
        },
        {
          id: 2,
          urlToImage: '/assets/images/ricardou.jpg',
          data:
            'national us ok    How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?',
        },
        {
          id: 3,
          urlToImage: '/assets/images/ricardou.jpg',
          data:
            'International us ok  How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?',
        },
        {
          id: 4,
          urlToImage: '/assets/images/ricardou.jpg',
          data:
            'International us ok  How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?',
        },
        {
          id: 5,
          urlToImage: '/assets/images/ricardou.jpg',
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
          // { active: false },
        ],
        [
          {
            id: 0,
            img: '/assets/images/ricardoz.jpg',
            title: '2 How Did van Gogh’s Turbulent Mind',
            name: 'json',
            date: '1/03/444',
          },
          {
            id: 1,
            img: '/assets/images/ricardou.jpg',
            title: '2 How Did van Gogh’s Turbulent Mind',
            name: 'json',
            date: '1/03/444',
          },
          {
            id: 2,
            img: '/assets/images/ricardou.jpg',
            title: ' 2How Did van Gogh’s Turbulent Mind',
            name: 'json',
            date: '1/03/444',
          },
          {
            id: 3,
            img: '/assets/images/ricardou.jpg',
            title: '2 How Did van Gogh’s Turbulent Mind',
            name: 'json',
            date: '1/03/444',
          },
          // { active: false },
        ],
        [
          {
            id: 0,
            img: '/assets/images/ricardov.jpg',
            title: '3 How Did van Gogh’s Turbulent Mind',
            name: 'json',
            date: '1/03/444',
          },
          {
            id: 1,
            img: '/assets/images/ricardou.jpg',
            title: '3 How Did van Gogh’s Turbulent Mind',
            name: 'json',
            date: '1/03/444',
          },
          {
            id: 2,
            img: '/assets/images/ricardou.jpg',
            title: '3 How Did van Gogh’s Turbulent Mind',
            name: 'json',
            date: '1/03/444',
          },
          {
            id: 3,
            img: '/assets/images/ricardou.jpg',
            title: '3 How Did van Gogh’s Turbulent Mind',
            name: 'json',
            date: '1/03/444',
          },

          // { active: true },
        ],
      ],
      currentData: null,
      currentSelectedArray: 0,
    };

    this.setupSlides();

    this.getNews('all');
  }

  setupSlides = () => {
    let newSlides = [];

    this.state.rightSlides.map((slide, index) => {
      if (index === 0) {
        newSlides.push({ ...slide, active: true });
      } else {
        newSlides.push({ ...slide, active: false });
      }
    });

    console.log('Right slide after change----', newSlides);

    setTimeout(() => {
      this.setState({ rightSlides: newSlides });
    }, 500);
  };
  componentDidMount() {
    this.setState({ currentData: this.state.tabData[0].tabData });

    setTimeout(() => {
      console.log('Right slide in component did mount----', this.state.rightSlides);
    }, 3000);
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

    this.getNews(tab.name);
  };

  getNews = (category = 'national') => {
    this.props.actions.apiCall({
      url: `https://newsapi.org/v2/everything?q=${category}&apiKey=c7685bfac7fb4a529ff57df66844c838`,
      method: 'GET',
      callback: res => {
        console.log('respnse from API is---', res);

        if (res && res.data && res.data.articles) {
          this.setState({
            // rightcards: res.data.articles.slice(0, 9),
            // leftcards: res.data.articles.slice(10, 19),
            currentNewsList: res.data.articles.splice(0, 19),
          });
        }
      },
    });
  };

  getTabData = () => {
    this.state.tabs.map(tab => {
      if (tab.active) {
        // console.log('i am inside++++++++++++++', this.state.tabData[tab.id].data);
        this.setState({ currentData: this.state.tabData[tab.id].data });
      }
    });
  };

  goToShop = () => {
    this.props.history.push('shop');
  };

  renderNewsChunk = val => {
    console.log('testing news chunk is----', val);
    return (
      <div className="news-chunk-container">
        <img src={val.img} />
        <div className="news-desc-container">
          <div>{val.title}</div>

          <div className="news-text">
            <span>{val.name}</span>
            <span className="news-date">{val.date}</span>
          </div>
        </div>
      </div>
    );
  };

  renderDots = () => {
    return this.state.rightSlides.map((val, index) => {
      console.log({ val });
      return (
        <div
          onClick={() => this.onDotClick(index)}
          className={val.active ? 'dot active' : 'dot '}
        ></div>
      );
    });
  };

  updateSlides = position => {
    let newSlides = [];
    this.state.rightSlides.map((slide, index) => {
      if (index == position) {
        newSlides.push({ ...slide, active: true });
      } else {
        newSlides.push({ ...slide, active: false });
      }
    });

    this.setState({ rightSlides: newSlides });
  };

  onDotClick = position => {
    this.updateSlides(position);
  };

  changeSlides = direction => {
    let position = 0;

    this.state.rightSlides.map((rightSlide, index) => {
      console.log('Rifght slide is----', rightSlide);

      if (rightSlide.active == true) {
        if (direction == 'right') {
          console.log('POSITIOON BEFORE STARTING LOGIC---', position);
          if (index == 2) {
            position = 0;
          } else {
            console.log('indside right else');
            position = index + 1;
          }
        } else {
          if (index == 0) {
            position = 2;
          } else {
            position = index - 1;
          }
        }
      }
    });

    this.updateSlides(position);
  };

  newsClicked = data => {
    console.log('Props on news item click---', data);

    localStorage.setItem('fullNewsData', JSON.stringify(data));
    // sessionStorage
    this.props.actions.setFullNewsData(data);
    // this.setState({data:'state/props'})
    this.props.history.push('fullnews');
  };

  newsItemGeneral = newsItem => {
    return (
      <div className="single-news-card">
        <div className="card-desc-container">
          <div className="card-img">
            <img src={newsItem.urlToImage} alt="" />
          </div>
          <div className="card-title">
            {newsItem.title}
            <div className="card-desc">{newsItem.content}</div>
            <div className="card-date">
              <div className="card-author">{newsItem.author}</div>
              {newsItem.publishedAt.split('T')[0]}
            </div>
          </div>
        </div>
      </div>
    );
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
        <div className="hero-container wrapper">
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
                        <div className="single-news-card">
                          <div>{tab.img}</div>
                          <div>{tab.name}</div>
                        </div>
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
                  <div className="card" onClick={() => this.newsClicked(this.state.newscard[0])}>
                    <div className="card-img">
                      <img src={this.state.newscard[0].urlToImage} alt="" />
                    </div>
                    <div className="desc-container">
                      <div className="card-title"> {this.state.newscard[0].title}</div>
                      <div className="card-desc">{this.state.newscard[0].text}</div>
                      <div className="card-date">{this.state.newscard[0].date}</div>
                    </div>
                  </div>

                  <div className="card2">
                    <div className="desc-container">
                      <div className="card-title">{this.state.newscard[1].title}</div>
                      <div className="card-date">{this.state.newscard[1].date}</div>
                    </div>
                  </div>
                  <div className="card3">
                    <div className="desc-container">
                      <div className="card-img">
                        <img src={this.state.newscard[2].url} alt="" />
                      </div>
                      <div className="card-title">{this.state.newscard[2].title}</div>
                      <div className="card-date">{this.state.newscard[2].date}</div>
                    </div>
                  </div>
                </div>

                <div className="sub-inner">
                  <div className="card4">
                    <div className="card-img">
                      <img src={this.state.subnewscard[0].url} />
                    </div>
                    <div className="desc-container">
                      <div className="card-title">{this.state.subnewscard[0].title}</div>

                      <div className="card-date">{this.state.subnewscard[0].date}</div>
                    </div>
                  </div>
                  <div className="card5">
                    <div className="card-img">
                      <img src={this.state.subnewscard[1].url} />
                    </div>
                    <div className="desc-container">
                      <div className="card-title">{this.state.subnewscard[1].title}</div>

                      <div className="card-date">{this.state.subnewscard[1].date}</div>
                    </div>
                  </div>
                  <div className="card6">
                    <div className="card-title">{this.state.subnewscard[2].title}</div>
                  </div>
                  <div className="card7">
                    <div className="card-title">{this.state.subnewscard[3].title}</div>
                  </div>
                  <div className="card8">
                    <div className="card-title">{this.state.subnewscard[4].title}</div>
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
                  <span>
                    {this.state.currentNewsList &&
                      this.state.currentNewsList.map(newsItem => {
                        return this.newsItemGeneral(newsItem);
                      })}
                  </span>
                </div>
              </div>
            </div>
            <div className="left-hero-side">
              <div className="top-stories">
                <div className="left-side-title">Top stories</div>
                <div className="arrow-container">
                  <div className="leftarrow" onClick={() => this.changeSlides('left')}>
                    <img src="/assets/images/lftarrow.png" alt="" />
                  </div>
                  <div className="dots">{this.renderDots()}</div>
                  <div className="rightarrow" onClick={() => this.changeSlides('right')}>
                    <img src="/assets/images/forward.png" alt="" />
                  </div>
                </div>
              </div>

              <div className="right-div">
                {this.state.rightSlides.map(slide => {
                  console.log('testing outer slide is---', slide);

                  let ourSlide = null;

                  if (slide.active) {
                    ourSlide = slide;
                  }

                  return (
                    ourSlide &&
                    Object.values(ourSlide).map((val, index) => {
                      // return this.renderNewsChunk(val);

                      if (index < 4) {
                        console.log('testing Internal obj is---', val, index);
                        return (
                          <div className="news-chunk-container">
                            <img src={val.img} alt="" />
                            <div className="news-desc-container">
                              <div>{val.title}</div>

                              <div className="news-text">
                                <span>{val.name}</span>
                                <span className="news-date">{val.date}</span>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    })
                  );
                })}
              </div>
              <div className="right-overlay-img">
                <div className="right-inner-overlay-img">
                  <img src="/assets/images/right-inner.webp" alt="" />

                  <div className="right-inner-overlay-text">How Did van Gogh’s Turbulent Mind</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default WelcomePage;
function mapStateToProps(state) {
  return {
    home: state.home,
    // common: state.common,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);
