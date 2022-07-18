import React from 'react';
import * as actions from './redux/actions';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class FullNews extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
    console.log('props in fullnews--------', this.props);
  }

  componentDidMount() {
    if (this.props && this.props.home && this.props.home.fullNewsData) {
      this.setState({ currentNewsItem: this.props.home.fullNewsData });
    }
  }

  render() {
    return this.state.currentNewsItem ? (
      <div className="newpage-conatainer ">
        <div className="news-headline-container">
          <div className="headline-img">
            <img src={this.state.currentNewsItem.urlToImage} alt="" />
          </div>
          <div className="date-and-author">
            <span className="author">{this.state.currentNewsItem.author}</span>

            {
              this.state.currentNewsItem && this.state.currentNewsItem.publishedAt ? 
              <span className="date">{ this.state.currentNewsItem.publishedAt.split('T')[0]}</span>
              : <span className="date">{ this.state.currentNewsItem && this.state.currentNewsItem.date && this.state.currentNewsItem.date.split('T')[0]}</span>
            }
          </div>
          <div className="headline-text">
            <span>{this.state.currentNewsItem.title}</span>
          </div>
          <div className="headline-text-desc">
            <span>{this.state.currentNewsItem.description}</span>
          </div>
        </div>
      </div>
    ) : (
      <span>No news</span>
    );
  }
}

// export default FullNews;

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

export default connect(mapStateToProps, mapDispatchToProps)(FullNews);
