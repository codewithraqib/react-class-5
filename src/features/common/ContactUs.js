import React from 'react';

class ContactUs extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};

   
  }

  render() {
    return (
  <div className='contact-main-container '>
     <div className="title">
            <span>Contact Us</span>
          </div>
          <div className="dot-line-container">
            <div className="dot"></div>
            <div className="line"></div>
          </div>
          <div className="description">
            <span>If you want to discuss and plan your business goals, Awesome! We love supporting our customers in differnet areas and guide them appropriatly to boost thei Business.</span>
          </div>
        <div className='contact-inner'>
          <div className='contacts'>
            <div>87238236823</div>
            <div>87238236823</div>
            <div>87238236823</div>
          </div>
          <div className='form'>
            <div> 
                    <input type="text"  id="name" placeholder="Name" required=""/>
            </div>
            <div> 
                    <input type="text"  id="Email id" placeholder="Email id" required=""/>
            </div>
            <div> 
                    <input type="text"  id="commet" placeholder="Describe Your Requirement" required=""/>
            </div>
            <div className='formBtn'> 
                    <input type="Submit" className='main-button' id="name" placeholder="Name" required=""/>
            </div>
   
  
          </div>
          <div className='info'>
            2nd Floor | Al Burj complex | Opposite Govt. Boys Degree College Pulwama
          </div>
        </div>

         
  </div>
    )
  }
}

export default ContactUs;
