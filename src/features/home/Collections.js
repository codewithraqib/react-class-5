import React from 'react';
import ReactSlider from 'react-slider';

class Collections extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
    console.log('Props in collection are----', this.props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="collection-container ">
        <div className="product-title">
          <span>PRODUCTS</span>
        </div>

        <div className="content-wrapper">
          <div className="product-container">
            <div className="product-cards">
              <div className="show-main-desc">
                <div>Showing 1–12 of 68 results</div>
                <div className="sorting-btn">
                  <select name="sorting" id="sorting">
                    <option>default sorting:</option>
                    <option>sort by latest</option>
                    <option>sort by price low to high</option>
                    <option>sort by price high to low </option>
                  </select>
                </div>
              </div>

              <div className="product-inner-cards">
                <div className="product-card1">
                  <div className="card-img">
                    <img src="/assets/images/IMG7.jpg" />
                    <div className="cart-overlay-btn">
                      <span className="cart-plus">+</span>
                    </div>
                  </div>

                  <div className="card-title">SHAWALS</div>
                  <div className="card-desc">card-desc filter-container</div>
                </div>

                <div className="product-card1">
                  <div className="card-img">
                    <img src="/assets/images/IMG8.jpg" />
                    <div className="cart-overlay-btn">
                      <span className="cart-plus">+</span>
                    </div>
                  </div>
                  <div className="card-title">SHAWALS</div>
                  <div className="card-desc">card-desc filter-container</div>
                </div>

                <div className="product-card1">
                  <div className="card-img">
                    <img src="/assets/images/IMG6.jpg" />
                    <div className="cart-overlay-btn">
                      <span className="cart-plus">+</span>
                    </div>
                  </div>
                  <div className="card-title">SHAWALS</div>
                  <div className="card-desc">card-desc filter-container</div>
                </div>
              </div>

              <div className="product-inner-cards">
                <div className="product-card1">
                  <div className="card-img">
                    <img src="/assets/images/IMG7.jpg" />
                    <div className="cart-overlay-btn">
                      <span className="cart-plus">+</span>
                    </div>
                  </div>

                  <div className="card-title">SHAWALS</div>
                  <div className="card-desc">card-desc filter-container</div>
                </div>

                <div className="product-card1">
                  <div className="card-img">
                    <img src="/assets/images/IMG8.jpg" />
                    <div className="cart-overlay-btn">
                      <span className="cart-plus">+</span>
                    </div>
                  </div>
                  <div className="card-title">SHAWALS</div>
                  <div className="card-desc">card-desc filter-container</div>
                </div>

                <div className="product-card1">
                  <div className="card-img">
                    <img src="/assets/images/IMG6.jpg" />
                    <div className="cart-overlay-btn">
                      <span className="cart-plus">+</span>
                    </div>
                  </div>
                  <div className="card-title">SHAWALS</div>
                  <div className="card-desc">card-desc filter-container</div>
                </div>
              </div>

              <div className="product-inner-cards">
                <div className="product-card1">
                  <div className="card-img">
                    <img src="/assets/images/IMG7.jpg" />
                    <div className="cart-overlay-btn">
                      <span className="cart-plus">+</span>
                    </div>
                  </div>

                  <div className="card-title">SHAWALS</div>
                  <div className="card-desc">card-desc filter-container</div>
                </div>

                <div className="product-card1">
                  <div className="card-img">
                    <img src="/assets/images/IMG8.jpg" />
                    <div className="cart-overlay-btn">
                      <span className="cart-plus">+</span>
                    </div>
                  </div>
                  <div className="card-title">SHAWALS</div>
                  <div className="card-desc">card-desc filter-container</div>
                </div>

                <div className="product-card1">
                  <div className="card-img">
                    <img src="/assets/images/IMG6.jpg" />
                    <div className="cart-overlay-btn">
                      <span className="cart-plus">+</span>
                    </div>
                  </div>
                  <div className="card-title">SHAWALS</div>
                  <div className="card-desc">card-desc filter-container</div>
                </div>
              </div>
            </div>

            <div className="filter-container">
              <div className="filter-inner">filter-container</div>

              <div>
                <ReactSlider
                  className="horizontal-slider"
                  thumbClassName="example-thumb"
                  trackClassName="example-track"
                  defaultValue={[0, 100]}
                  ariaLabel={['Leftmost thumb', 'Rightmost thumb']}
                  renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                  pearling
                  minDistance={10}
                />
              </div>
              <div className="links-container">
                <div className="link">Home</div>
                <div className="link">Clothing(2)</div>
                <div className="link">Shawls(12)</div>
                <div className="link">Home Decor(5)</div>
                <div className="link">Patterns(5)</div>
                <div className="link">Wallets(5)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Collections;
