import React from 'react';

class Collections extends React.PureComponent {
  render() {
    return (
      <div className="collection-container ">
        <div className="product-title">
          <span>PRODUCTS</span>
        </div>

        <div className='content-wrapper'>
        <div className="product-container">
          <div className="product-cards">
            <div className="show-main-desc">
              <div>Showing 1–12 of 68 results</div>
              <div className='sorting-btn'>
                
                
                
                <select name="sorting" id="sorting">
                <option>default sorting:</option>
                  <option >sort by latest</option>
                  <option >sort by price low to high</option>
                  <option >sort by price high to low </option>
                 
                </select>
              </div>
            </div>

            <div className="product-inner-cards">
              <div className="product-card1">
                <div className="card-img">
                  <img src="/assets/images/clth.jpeg" />
                </div>
                <div className="card-title">C A R D T I T L E</div>
                <div className="card-desc">card-desc filter-container</div>
              </div>

              <div className="product-card1">
                <div className="card-img">
                  <img src="/assets/images/clth.jpeg" />
                </div>
                <div className="card-title">C A R D T I T L E</div>
                <div className="card-desc">card-desc filter-container</div>
              </div>

              <div className="product-card1">
                <div className="card-img">
                  <img src="/assets/images/clth.jpeg" />
                </div>
                <div className="card-title">C A R D T I T L E</div>
                <div className="card-desc">card-desc filter-container</div>
              </div>
            </div>
          </div>

          <div className="filter-container">
            <div className="filter-inner">filter-container</div>
            <div className="links-container">
              <div className="link">Home</div>
              <div className="link">Clothing</div>
              <div className="link">Shawls</div>
              <div className="link">Home Decor</div>
            </div>
          </div>
        </div>

        </div>

        
      </div>
    );
  }
}

export default Collections;
