import React from 'react';
import * as actions from './redux/actions';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class NewPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rightcards: [
        {
          url: '/assets/images/ricardoz.jpg',
          text: 'How Did van Goghs Turbulent Mind Depict One of the Most Complex Concepts',
          date: '12/34/4444',
          author: 'json',
        },
        {
          url: '/assets/images/ricardou.jpg',
          text:
            'Stay entertained all the time! Book tickets for movies, concerts, live events, sports, activities, and much more on BookMyShow. Stream live events from the',
          date: '12/34/4444',
          author: 'Android Bot',
        },
        {
          url: '/assets/images/ricardoz.jpg',
          text:
            'Read the latest news and updates on Bookmyshow, Bookmyshow information at Business Standard.',
          date: '12/34/4444',
          author: 'Noob',
        },
        {
          url: '/assets/images/ricardou.jpg',
          text: 'How Did van Goghs Turbulent Mind Depict One of the Most Complex Concepts',
          date: '12/34/4444',
          author: 'json',
        },
      ],
      leftcards: [
        {
          url: '/assets/images/ricardov.jpg',
          text: 'How Did van Goghs Turbulent Mind',
        },
        {
          url: '/assets/images/ricardoz.jpg',
          text: 'How Did van Goghs Turbulent Mind',
        },
        {
          url: '/assets/images/ricardov.jpg',
          text: 'How Did van Goghs Turbulent Mind',
        },
        {
          url: '/assets/images/ricardou.jpg',
          text: 'How Did van Goghs Turbulent Mind',
        },
      ],
    };
  }

  firstPage = data => {
    console.log('Props in newpage---', this.props);

    localStorage.setItem('fullNewsData', JSON.stringify(data));
    // sessionStorage
    this.props.actions.setFullNewsData(data);
    // this.setState({data:'state/props'})
    this.props.history.push('fullnews');
  };

  createSideNewsItem = (val, index) => {
    return (
      // <div className="img-overlay">
      //   <img src={val.url} />
      //   <div className="overlay-text">
      //     <span>{val.text}</span>
      //   </div>
      // </div>

      <div key={index} className="side-img-container">
        <img src={val.url} />
        <div className="side-img-overlay">
          <div className="overlay-text">
            <span>{val.text}</span>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="newpage-conatainer ">
        <div className="news-headline-container">
          <div className="headline-img">
            <img src="/assets/images/natural3.jpg" />
          </div>
          <div className="headline-text">
            <span>
              How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?
              Pick the yellow peach that looks like a sunset with its red, orange, and pink coat
              skin, peel it off with your teeth. Sink them into unripened
            </span>
          </div>
        </div>
        <div className="inner-news-container">
          <div className="news-left-container">
            {this.state.rightcards.map((val, index) => {
              return (
                <div className="card1" onClick={() => this.firstPage(val)}>
                  <div className="desc-container">
                    <div className="card-img">
                      <img src={val.url} />
                    </div>
                    <div className="card-title">
                      {val.text}
                      <div className="card-date">{val.date}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="news-right-container">
            {this.state.leftcards.map((val, index) => {
              return this.createSideNewsItem(val, index);
            })}
          </div>
        </div>
      </div>
    );
  }
}

// export default NewPage;

/* istanbul ignore next */
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

export default connect(mapStateToProps, mapDispatchToProps)(NewPage);
