import React from 'react';
import * as actions from './redux/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PDFViewer } from 'react-view-pdf';
import { PDFReader } from 'reactjs-pdf-reader';
import { MobilePDFReader } from 'reactjs-pdf-reader';
import { TextField } from 'precise-ui';



class WelcomePage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
 
    };


  }

  
  render() {
    return (
      <div className="home-welcome-page">
           <PDFViewer
           url="http://www.africau.edu/images/default/sample.pdf"
            // document={{
            //     url:'https://ncert.nic.in/textbook/pdf/kebo108.pdf',
            // }}
        />
         {/* <div style={{overflow:'scroll',height:600}}>
            <MobilePDFReader url='https://arxiv.org/pdf/quant-ph/0410100.pdf'/>
           </div> */}
           {/* <PDFViewer url="http://www.africau.edu/images/default/sample.pdf" /> */}
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
