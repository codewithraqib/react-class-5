import React from 'react';

class FullNews extends React.PureComponent {
  constructor(props) {
    super(props);
    

    this.state = {
    };
    console.log('------ props in fullnews' , this.props)
  }


  render() {
  
    return (
    
      <div className="newpage-conatainer ">
        <div className="news-headline-container">
          <div className="headline-img">
            <img src="/assets/images/market.jpg" />
          </div>
          <div className="headline-text">
            <span>
              How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?
              Pick the yellow peach that looks like a sunset with its red, orange, and pink coat
              skin, peel it off with your teeth. Sink them into unripened
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default FullNews;
