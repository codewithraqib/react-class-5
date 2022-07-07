import React from 'react';
import * as actions from './redux/actions';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class NewPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rightcards: [],
      leftcards: [],
    };

    console.log('props in New Page----', this.props);

    this.props.actions.apiCall({
      url:
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=c7685bfac7fb4a529ff57df66844c838',
      method: 'GET',
      callback: res => {
        console.log('respnse from API is---', res);

        if (res && res.data && res.data.articles) {
          this.setState({
            rightcards: res.data.articles.slice(0, 9),
            leftcards: res.data.articles.slice(10, 19),
          });
        }
      },
    });
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
      <div key={index} className="side-img-container">
        <img src={val.urlToImage} />
        <div className="side-img-overlay">
          <div className="overlay-text">
            <span>{val.title}</span>
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
                      <img src={val.urlToImage} alt="" />
                    </div>
                    <div className="card-title">
                      {val.title}
                      <div className="card-date">{val.publishedAt.split('T')[0]}</div>
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
