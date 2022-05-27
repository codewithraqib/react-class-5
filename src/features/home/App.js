import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import ContactUs from '../common/ContactUs';

// export default function App({ children }) {
//   return (
//     <div className="home-app">
//       {/* <div className="page-container">i am react</div> */}

//       <Header />
//       <div className="page-container">{children}</div>

//       <Footer />
//     </div>
//   );
// }

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      links: [
        { id: 1, name: 'Home', route: '/', active: true },
        { id: 2, name: 'About us', route: 'about-us', active: false },
        { id: 3, name: 'Contact us', route: 'ContactUs', active: false },
        { id: 4, name: 'Offices ', route: 'offices', active: false },
        // true,
      ],
      footerLinks: [
        {
          id: 1,
          name: 'About Company',
          head: true,
          subLinks: [
            { id: 1, name: 'About us', link: 'about-us' },
            { id: 2, name: 'Departments', link: 'second' },
            { id: 2, name: 'Outside Offices', link: 'offices' },
          ],
        },
        {
          id: 2,
          name: 'Social Links',
          head: true,
          subLinks: [
            { id: 1, name: 'Facebook', link: 'facebook' },
            { id: 2, name: 'Instagram', link: 'insta' },
          ],
        },
        {
          id: 3,
          name: 'Contact us',
          head: true,
          subLinks: [
            { id: 1, name: 'contact us', link: 'ContactUs' },
            { id: 2, name: '9999899998' },
          ],
        },
      ],
      myName: 'Sameer',
    };
  }

  componentDidMount() {
    this.scroll();
  }

  scroll = () => {
    window.addEventListener('scroll', event => {
      var scroll = event.currentTarget.scrollY;
      var menu = window.document.querySelector('.nav-container');
      var logoContainer = window.document.querySelector('.logo-container');
      console.log('Menu is----', menu);
      if (menu) {
        if (scroll > 100) {
          menu.className = 'nav-container nav-container-flex';
          logoContainer.className = 'logo-container logo-container-flex';
        }
        if (scroll < 90) {
          menu.className = 'nav-container';
          logoContainer.className = 'logo-container';
        }
      }
    });
  };

  onNavItemClick = val => {
    // console.log('nav item Clicked in APP.js', val);

    let newLinks = [];

    this.state.links.map(link => {
      // console.log('Current Nav Item-----', link);
      if (link.id == val.id) {
        newLinks.push({ ...link, active: true });
      } else {
        newLinks.push({ ...link, active: false });
      }
    });

    this.setState({ links: newLinks });

    this.props.history.push(val.route);
  };

  render() {
    return (
      <div className="home-app">
        {/* <div className="page-container">i am react</div> */}

        <Header
          myLinks={this.state.links}
          logo={'/assets/images/femmake-logo.jpg'}
          onNavClick={this.onNavItemClick}

          // somethihg={true}
          // myName="raqib"
        />
        <div className="page-container">{this.props.children}</div>

        <Footer history={this.props.history} footerLinks={this.state.footerLinks} />
      </div>
    );
  }
}

export default App;
