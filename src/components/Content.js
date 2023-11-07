import React from "react";
import Logo1 from "../images/logo1.png";
import Logo2 from "../images/Delano Hotel (1).png";
import Logo3 from "../images/Markus Lanz (1).png";
import Logo4 from "../images/Walt Disney Studios Motion Pictures.png";

function Content() {
  return (
    <div>
      <section className="contentWrapper">
        <div className="content1">
          <section className="contact">
            <div className="contactLeft">
              <h4 className="rightLine grayColor">contact</h4>
              <h2 className="offWhite">Any type of querry & discussion</h2>
              <p className="grayColor lessWidth">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                autem nisi ex temporibus nesciunt exercitationem.
              </p>
              <a href="#" className="EMAIL">
                mibra4321@gmail.com &#10503;
              </a>
            </div>
            <div className="contactRight">
              <h2 className="offWhite lessWidth">
                You cannot use up creativity, the more you use the more you have
                in the significant mind.
              </h2>
              <p className="grayColor lessWidth">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                beatae consectetur asperiores quod quidem neque, labore error
                veritatis nesciunt aperiam, dolorum quia voluptatem
              </p>

              <div className="expClient">
                <div className="experience">
                  <span className="number">14</span>
                  <span className="text grayColor">years of experience</span>
                </div>
                <div className="client">
                  <div className="client">
                    <span className="number">187</span>
                    <span className="text grayColor">Satified Clients</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="cards">
            <div className="card card1 active">
              <div className="cardLogo">
                <i className="fa-solid fa-cube fa-beat-fade"></i>
              </div>
              <div className="cardText">
                <h2 className="offWhite">
                  Product <br />
                  Designer
                </h2>
                <h4 className="grayColor">124 Projects</h4>
              </div>
            </div>
            <div className="card card2">
              <div className="cardLogo">
                <i className="fa-solid fa-pen-nib fa-beat-fade fa-rotate-90"></i>
              </div>
              <div className="cardText">
                <h2 className="offWhite">
                  Branding <br />
                  Designer
                </h2>
                <h4 className="grayColor">37 Projects</h4>
              </div>
            </div>
            <div className="card card3">
              <div className="cardLogo">
                <i className="fa-solid fa-laptop-code fa-beat-fade"></i>
              </div>
              <div className="cardText">
                <h2 className="offWhite">
                  Full Stack <br />
                  Developer.
                </h2>
                <h4 className="grayColor">62 Projects.</h4>
              </div>
            </div>
          </section>
        </div>
        <div className="content2">
          <section className="logos">
            <div>
              <img src={Logo1} alt="logo1" />
              <img src={Logo2} alt="logo2" />
              <img src={Logo3} alt="logo3" />
              <img src={Logo4} alt="logo4" />
            </div>
            <div>
              <img src={Logo4} alt="logo4" />
              <img src={Logo3} alt="logo3" />
              <img src={Logo2} alt="logo2" />
              <img src={Logo1} alt="logo1" />
            </div>
          </section>
          <section className="portfolio">
            <div className="pfText">
              <h4 className="rightLine grayColor">portfolio</h4>
              <h2 className="offWhite">
                All works, <br />
                Selected projects.
              </h2>
              <p className="grayColor">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                autem nisi ex temporibus nesciunt exercitationem.
              </p>
              <a href="#">Explore More &#10503;</a>
            </div>
            <div className="pfimage pfimage1"></div>
            <div className="pfimage pfimage2"></div>
            <div className="pfimage pfimage3"></div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Content;
