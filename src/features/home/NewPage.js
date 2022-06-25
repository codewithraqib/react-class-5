import React from 'react';

class NewPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rightcards: [
        {
          url: '/assets/images/ricardoz.jpg',
          text: 'How Did van Goghs Turbulent Mind Depict One of the Most Complex Concepts',
          date: '12/34/4444',
        },
        {
          url: '/assets/images/ricardou.jpg',
          text: 'How Did van Goghs Turbulent Mind Depict One of the Most Complex Concepts',
          date: '12/34/4444',
        },
        {
          url: '/assets/images/ricardoz.jpg',
          text: 'How Did van Goghs Turbulent Mind Depict One of the Most Complex Concepts',
          date: '12/34/4444',
        },
        {
          url: '/assets/images/ricardou.jpg',
          text: 'How Did van Goghs Turbulent Mind Depict One of the Most Complex Concepts',
          date: '12/34/4444',
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
        this.setState({data:'state/props'})
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
                <div className="card10" onClick={() => this.firstPage(this.data)}>
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

export default NewPage;
