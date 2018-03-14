import React from 'react';
import './Styles/Portfolio.css';

class Portfolio extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return(
      <div id="portfolio">
        <h1 id="portfolioHeader"> Applications </h1>

        <div className="tidder work wow fadeIn" data-wow-duration="2s">


        <div className="description">
            <h2 className="portHeader"> Tidder </h2>
            <p className="text-muted small">A news and content aggregation site for discussion built off the Reddit API</p>
            <div className="line"></div>
            <p className="mainDescription">
              Tidder is work in progress application working off an API with a dense amount of information.
              <br/>
              <br/>
              Users can navigate through the popular content on the front page and across different topics.
              Within each topic, users can browse subreddits and their respective postings. 
              Individual posts can be previewed on page with live media embedding.
            </p>
            <a className="hoverLink visitSite" target="_blank" href="https://fptidder.firebaseapp.com/">Visit site</a>
          </div>

        <div id="carouselExampleIndicators5" className="zoom carousel carousel-right slide workSS" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators5" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators5" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators5" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="modal-image workSS" src="/assets/T1.png" alt="First slide"/>
                <div className="carousel-caption">
                  <p className="text-muted small">Home + Content Preview</p>
                </div>
              </div>

              <div className="carousel-item">
                <img className="modal-image workSS" src="/assets/T2.png" alt="second slide"/>
                <div className="carousel-caption">
                  <p className="text-muted small">Topic View</p>
                </div>
              </div>

              <div className="carousel-item">
                <img className="modal-image workSS" src="/assets/T3.png" alt="third slide"/>
                <div className="carousel-caption">
                  <p className="text-muted small">Subreddit View + Autocomplete Search</p>
                </div>
              </div>
              
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators5" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators5" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
        </div>
  
        </div>

        <div className="hackerArena  bluish work wow fadeIn" data-wow-duration="2s">
        <div id="carouselExampleIndicators" className="zoom carousel carousel-left slide workSS" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="modal-image workSS" src="/assets/HA0.png" alt="First slide"/>
                <div className="carousel-caption">
                  <p className="text-muted small">Classic Mode / In Game</p>
                </div>
              </div>

              <div className="carousel-item">
                <img className="modal-image workSS" src="/assets/HA1.png" alt="second slide"/>
                <div className="carousel-caption">
                  <p className="text-muted small">Home / Login</p>
                </div>
              </div>

              <div className="carousel-item">
                <img className="modal-image workSS" src="/assets/HA2.png" alt="third slide"/>
                <div className="carousel-caption">
                  <p className="text-muted small">Home / Introduction</p>
                </div>
              </div>

              <div className="carousel-item">
                <img className="modal-image workSS" src="/assets/HA3.png" alt="fourth slide"/>
                <div className="carousel-caption">
                  <p className="text-muted small">Home / Game Modes</p>
                </div>
              </div>

              <div className="carousel-item">
                <img className="modal-image workSS" src="/assets/HA4.png" alt="fifth slide"/>
                <div className="carousel-caption">
                  <p className="text-muted small">Home / Disruptions</p>
                </div>
              </div>
              <div className="carousel-item">
                <img className="modal-image workSS" src="/assets/HA5.png" alt="sixth slide"/>
                <div className="carousel-caption">
                  <p className="text-muted small">Profile / Statistics</p>
                </div>
              </div>
              <div className="carousel-item">
                <img className="modal-image workSS" src="/assets/HA6.png" alt="seventh slide"/>
                <div className="carousel-caption">
                  <p className="text-muted small">Home / Team</p>
                </div>
              </div>
              
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>

          <div className="description">
            <h2 className="portHeader"> Hacker Arena </h2>
            <p className="text-muted small">An online multiplayer application where programmers can compete against others in real time to finish coding challenges.</p>
            <div className="line"></div>
            <p className="mainDescription">Hacker Arena is our solution to cookie cutter coding challenge conundrum.
              We sought out to make the process of learning coding less monotonous by implementing different mechanics into the lifecycle of a toy problem solution.
              <br />
              <br />
              Players can choose one of four game modes Classic, Pair, Code Run, and Solo. Across these different modes, players will interact with with others in real time,
              sending and receiving <em>disruptions</em> that will change user interfaces, all while racing to finish the challenge.
            </p>
            <a className="hoverLink visitSite" target="_blank" href="https://hacker-arena.com/">Visit site</a>
          </div>
    
          
        </div>

        <div className="legacyLearning work wow fadeIn" data-wow-duration="2s">
        <div className="description">
            <h2 className="portHeader"> Legacy Learning </h2>
            <p className="text-muted small">A   platform   for   teachers   and   students   to   create   and   access   course   material   in   an   organized   manner.</p>
            <div className="line"></div>
            <p className="mainDescription">Legacy Learning is an application for educators to create lessons in a slideshow format by aggregating content across the web.
              Students can browse through public presentations to find their course specific slides and other resources.
              <br />
              <br/>
              Users can construct slide decks utilizing text, article embedding, images, or videos with annotation overlays. Within each
              lesson, users can communicate on a complementary discussion board or in real-time with a live chat. 
            </p>
          </div>

          <div id="carouselExampleIndicators2" className="zoom carousel carousel-right slide workSS" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators2" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
              <li data-target="#carouselExampleIndicators2" data-slide-to="3"></li>
              <li data-target="#carouselExampleIndicators2" data-slide-to="4"></li>
              <li data-target="#carouselExampleIndicators2" data-slide-to="5"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="modal-image workSS" src="/assets/LL.png" alt="First slide"/>
                <div className="carousel-caption">
                  <p className="text-muted small">Login</p>
                </div>
              </div>

              <div className="carousel-item">
                <img className="modal-image workSS" src="/assets/LL1.png" alt="third slide"/>
                <div className="carousel-caption">
                  <p className="text-muted small">Home</p>
                </div>
              </div>

              <div className="carousel-item">
                <img className="modal-image workSS" src="/assets/LL2.png" alt="third slide"/>
                <div className="carousel-caption">
                  <p className="text-muted small">Home / Lessons Collection</p>
                </div>
              </div>

              <div className="carousel-item">
                <img className="modal-image workSS" src="/assets/LL3.png" alt="fourth slide"/>
                <div className="carousel-caption">
                  <p className="text-muted small">Create Lesson / Video Search</p>
                </div>
              </div>

              <div className="carousel-item">
                <img className="modal-image workSS" src="/assets/LL4.png" alt="fifth slide"/>
                <div className="carousel-caption">
                  <p className="text-muted small">View Lesson / Video + Annotations</p>
                </div>
              </div>
              <div className="carousel-item">
                <img className="modal-image workSS" src="/assets/LL5.png" alt="sixth slide"/>
                <div className="carousel-caption">
                  <p className="text-muted small">View Lesson / Article + Chat</p>
                </div>
              </div>

            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          
        </div>

        <div className="snackReactor bluish work wow fadeIn" data-wow-duration="2s">
          
          <div id="carouselExampleIndicators3" className="zoom carousel carousel-left slide workSS" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators3" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators3" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators3" data-slide-to="2"></li>
              <li data-target="#carouselExampleIndicators3" data-slide-to="3"></li>
              <li data-target="#carouselExampleIndicators3" data-slide-to="4"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className=" workSS" src="/assets/SR.png" alt="First slide"/>
                <div className="carousel-caption">
                  <p className="text-muted small">Results Screen / Final Selection</p>
                </div>
              </div>

              <div className="carousel-item">
                <img className="modal-image workSS" src="/assets/SR1.png" alt="second slide"/>
                <div className="carousel-caption">
                  <p className="text-muted small">Results Screen / Two Selections</p>
                </div>
              </div>

              <div className="carousel-item">
                <img className="modal-image workSS" src="/assets/SR2.png" alt="third slide"/>
                <div className="carousel-caption">
                  <p className="text-muted small">Results Screen / Five Selections</p>
                </div>
              </div>

              <div className="carousel-item">
                <img className="modal-image workSS" src="/assets/SR3.png" alt="fourth slide"/>
                <div className="carousel-caption">
                  <p className="text-muted small">Home</p>
                </div>
              </div>
              
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators3" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators3" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>

          <div className="description">
            <h2 className="portHeader"> Snack Reactor</h2>
            <p className="text-muted small">Food   finder   application   to   help   indecisive   users   choose   meals   by   fetching   businesses   within   walking   distance.</p>
            <div className="line"></div>
            <p className="mainDescription">Snack Reactor is the answer to the crippling obstacle affecting millions of 
              people a day. <em>Where do you want to eat?</em> Snack Reactor removes much of the decision process by 
              randomly producing nearby restaurants, which users can then filter to their own liking. 
              <br/>
              <br/>
              Users will receive recommendations for five locations to eat near the user's current location, selecting two, users will
              then allow the next guest to pick a final location. Upon selecting a final location, users will receive a customize route 
              to the restaurant from their location, with an option to send a SMS message to notify other guests.
            </p>
          </div>
        </div>

        <div className="partyStarty work wow fadeIn" data-wow-duration="2s">
        <div className="description">
            <h2 className="portHeader"> Party Starty </h2>
            <p className="text-muted small">Event planning   application   for   gathering   general   consensus   of   interest   in   activities.</p>
            <div className="line"></div>
            <p className="mainDescription">Party Starty is the answer to the second most crippling obstacle affecting
              hundreds of people a day. <em> What shoud we do? </em> Party Starty aims to organize the party planning process
              by allowing guests to vote for preferred activities.
              <br/>
              <br/>
              Event planners can create events, with location, time and descriptions. After an event is created, guests can
              add a movie queue, retrieving titles from our movie database. Movies are then sorted accordingly based on the number of
              votes the title has.  
            </p>
          </div>

          <div id="carouselExampleIndicators4" className="zoom carousel carousel-right slide workSS" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators4" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators4" data-slide-to="1"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="modal-image workSS" src="/assets/PS.png" alt="First slide"/>
                <div className="carousel-caption">
                  <p className="text-muted small">Event Creation / Movie Queue</p>
                </div>
              </div>

              <div className="carousel-item">
                <img className="modal-image workSS" src="/assets/PS1.png" alt="second slide"/>
                <div className="carousel-caption">
                  <p className="text-muted small">Event Creation / Settings</p>
                </div>
              </div>

              
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators4" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators4" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          
        </div>

      </div>
    )
  }
}

export default Portfolio;