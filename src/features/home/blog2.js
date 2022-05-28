import React from 'react';

class Blog2 extends React.PureComponent {
  render() {
    return (
      <div className="blog2-main-container">
        <div className="left-blog">
          <div className="blog1-logo">
            <img src="/assets/images/logo.png" alt="" />
          </div>
          <div className="left-blog-links">
            <div>
              <img src="/assets/images/3916580.png" alt="" />
            </div>
            <div>
              <img src="/assets/images/6422200.png" alt="" />
            </div>
            <div>
              <img src="/assets/images/3916631.png" alt="" />
            </div>
            <div>
              <img src="/assets/images/3916582.png" alt="" />
            </div>
            <div>
              <img src="/assets/images/6422210.png" alt="" />
            </div>
          </div>
        </div>

        <div className="center-blog">
          <div className="center-blog-header">
            <div className="blog-header-left">
              <div className="header-img">
                <img src="/assets/images/logo.png" alt="" />
              </div>
              <div className="header-title">
                <div className="title">Markham Heid</div>
                <div>dfytukri</div>
              </div>
            </div>
            <div className="blog-header-right">
              <div className="header-right-icons">
                <img src="/assets/images/3916580.png" alt="" />
              </div>
              <div className="header-right-icons">
                <div>
                  <img src="/assets/images/3916582.png" alt="" />
                </div>
              </div>
              <div className="header-right-icons">
                <img src="/assets/images/6422210.png" alt="" />
              </div>
            </div>
          </div>
          <div className="main-center-cantainer">
            <div className="title">
              <span>How to Take a Break from Yourself</span>
            </div>
            <div className="title-desc">
              <span>
                Escaping from your routines can help you escape from repetitive, <br />
                unhelpful thoughts
              </span>
            </div>
            <div className="center-desc-main">
              <div className="cntr-desc-img">
                <img src="/assets/images/dow.jpg" alt="" />
              </div>
              <div className="center-desc">
                Idon’t always find myself to be good company. Like a friend who only talks about his
                own hang-ups, my inner monologue can get pretty tiresome. Honestly, that again?
                Can’t we give it a rest?
                <br />I think most of us feel this from time to time, this desire to get away from
                ourselves. But all the usual remedies — entertainment or exercise, alcohol or drugs
                — tend to work only in small doses, if they work at all. Rely on any of them too
                regularly and they become habits, which is often just a gentle synonym for
                compulsions.
                <br />
                I’ve written before in this space about the brain-dulling effect of an overly
                routinized life. The novelist Rachel Cusk put a finer point on it when she wrote
                that “habits kill what is essential in ourselves.” If you’re feeling worn out by the
                stuff going on in your head, that’s a sure sign you need to change its inputs — give
                your mind something new to chew on so that it stops chewing on itself.
                <br />
                Here, the research on vacations can be instructive. Idon’t always find myself to be
                good company. Like a friend who only talks about his own hang-ups, my inner
                monologue can get pretty tiresome. Honestly, that again? Can’t we give it a rest?
                <br />I think most of us feel this from time to time, this desire to get away from
                ourselves. But all the usual remedies — entertainment or exercise, alcohol or drugs
                — tend to work only in small doses, if they work at all. Rely on any of them too
                regularly and they become habits, which is often just a gentle synonym for
                compulsions.
                <br />
                I’ve written before in this space about the brain-dulling effect of an overly
                routinized life. The novelist Rachel Cusk put a finer point on it when she wrote
                that “habits kill what is essential in ourselves.” If you’re feeling worn out by the
                stuff going on in your head, that’s a sure sign you need to change its inputs — give
                your mind something new to chew on so that it stops chewing on itself.
                <br />
                Here, the research on vacations can be instructive.
              </div>
              <div className="vid-tag">
                {/* <video width="320" height="240" autoplay>
               <source src="https://youtu.be/t0Q2otsqC4I" type="video/mp4"/>
               jhfqgyfYUGGGYU
  
               
               
               </video> */}
                <iframe
                  width="420"
                  height="315"
                  sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
                  src={`https://youtube.com/embed/t0Q2otsqC4I?autoplay=0`}
                ></iframe>
                {/* <iframe className='video'
        title='Youtube player'
        // sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
        src={`https://youtube.com/embed/t0Q2otsqC4I?autoplay=0`}>
        
</iframe> */}
              </div>
              I’ve written before in this space about the brain-dulling effect of an overly
              routinized life. The novelist Rachel Cusk put a finer point on it when she wrote that
              “habits kill what is essential in ourselves.” If you’re feeling worn out by the stuff
              going on in your head, that’s a sure sign you need to change its inputs — give your
              mind something new to chew on so that it stops chewing on itself.
              <br />
              Here, the research on vacations can be instructive.
            </div>

            <div className="center-blog-card">
              <div className="cntr-blog-desc">
                <div className="cntr-card-time">
                  <div>
                    <span>4 days ago</span>
                  </div>
                  <div className="cnter-card-star">
                    <img src="/assets/images/star.png" alt="" />
                  </div>
                </div>
                <div className="title"> This day in history</div>
                <div className="title-history">
                  Potter had already been paying the higher price for some time, shoveling money
                  into monopolists’ gaping maws.
                </div>
                <div className="cntr-card-share">
                  <div className="time-read">
                    <div className="time-desc">This day in history</div>
                    <div className="read-time"> 4 min read</div>
                  </div>
                  <div className="share-icon">
                    <img src="/assets/images/share.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="cntr-blog-img">
                <img src="/assets/images/mss.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="right-blog">
          <div className="search">
            <input type="search" id="gsearch" name="gsearch" placeholder="Search" />
          </div>
          <div className="right-img">
            <img src="/assets/images/mss.jpg" alt="" />
          </div>
          <div className="right-title">Markham Heid</div>

          <div className="right-followers">245K followers</div>
          <div className="right-desc">
            I write about health, science, and psychology. My work has appeared in Time magazine,
            the New York Times, Vice, and elsewhere. I live in Germany. Follow
          </div>
          <div className="right-follow-button">
            <div>
              <button className="follow-button" name="follow" type="submit">
                Follow
              </button>
            </div>
            <div className="follow-icon">
              <img src="/assets/images/3916631.png" alt="" />
            </div>
          </div>
          <div className="title-Medium">More from Medium</div>
          <div className="right-cards">
            <div className="head">
              <div className="icon-name">
                <div className="icon">
                  <img src="/assets/images/mss.jpg" alt="" />
                </div>
                <div className="name">
                  {' '}
                  <span>kevin peterson</span>
                </div>
              </div>

              <div className="description">
                {' '}
                <span> what is new in flutter 3</span>
              </div>
            </div>
            <div className="image-container">
              <div className="right-blog-img">
                <img src="/assets/images/mss.jpg" alt="" />{' '}
              </div>
            </div>
          </div>
          {/* fgYIF */}
          <div className="right-cards">
            <div className="head">
              <div className="icon-name">
                <div className="icon">
                  <img src="/assets/images/mss.jpg" alt="" />
                </div>
                <div className="name">
                  {' '}
                  <span>kevin peterson</span>
                </div>
              </div>

              <div className="description">
                {' '}
                <span> what is new in flutter 3</span>
              </div>
            </div>
            <div className="image-container">
              <div className="right-blog-img">
                <img src="/assets/images/mss.jpg" alt="" />{' '}
              </div>
            </div>
          </div>
          {/* YFY */}
          <div className="right-cards">
            <div className="head">
              <div className="icon-name">
                <div className="icon">
                  <img src="/assets/images/mss.jpg" alt="" />
                </div>
                <div className="name">
                  {' '}
                  <span>kevin peterson</span>
                </div>
              </div>

              <div className="description">
                {' '}
                <span> what is new in flutter 3</span>
              </div>
            </div>
            <div className="image-container">
              <div className="right-blog-img">
                <img src="/assets/images/mss.jpg" alt="" />{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Blog2;
