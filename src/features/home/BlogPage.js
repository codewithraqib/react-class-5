import React from 'react';


class BlogPage extends React.PureComponent{



    render(){

        return(
            <div className="blog-main-container content-wrapper">
            <div className='blog-inner'>
            <div className='title'>
                    <span>13 Social Media Calendars, Tools, & Templates to Plan Your Content</span>
                    <div className='sub-title'>
                        <span>Written by Sophia Bernazzani @soph_bern</span>
                        </div>   
                </div>
                <div className='image-container'>
                <img src="/assets/images/logo.png" alt="" />
                </div>

            </div>
             
                <div className='desc-container'>
                    <div className='title'>
                        <span>Freemium Pricing Strategy</span>
                    </div>
                    <div className='desc'>
                        <span>Let's say it takes $20 per year to support a user on your freemium plan. If you have 100 users, that would mean you're spending $2,000 total to support them, but most won't upgrade to one of your paid options — remember, the average conversion rate for a freemium plan typically falls between 2-5%.

                        <br/> If 2.5% of those freemium users ultimately convert, then the customer acquisition cost for your freemium strategy is $800. Once you arrive at that figure, you would need to see how it stacks up to your Customer Lifetime Value to see whether freemium is worth your time.</span>

                    </div>
                  </div>
                  <div className='line'></div>
                  <div className='icon'>


                  </div>
                  <div className='Articles-container'>
                      <div className='title'>
                          <span>Related Articles</span>
                          </div>
                          <div className='art-cards'>
                              <div className='card'>
                              <div className="img-container">
                                <img src="/assets/images/dow.jpg" alt="" />
                             </div>
                             <div className='card-desc'>
                             <div className="title">Publish</div>
                               <div>Don't forget to share this post!.</div>
                             </div>
                              
                              </div>
                              <div className='card'>
                              <div className="img-container">
                                <img src="/assets/images/dow.jpg" alt="" />
                             </div>
                             <div className='card-desc'>
                             <div className="title">Publish</div>
                               <div>Don't forget to share this post!.</div>
                             </div>
                              
                              </div>
                              <div className='card'>
                              <div className="img-container">
                                <img src="/assets/images/dow.jpg" alt="" />
                             </div>
                             <div className='card-desc'>
                             <div className="title">Publish</div>
                               <div>Don't forget to share this post!.</div>
                             </div>
                              
                              </div>
                              
                          

                              
                          
                              

                          </div>

                  </div>
            </div>
            
            
        )
    }
}


export default BlogPage;