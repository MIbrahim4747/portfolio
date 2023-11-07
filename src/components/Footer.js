import React from "react";
import mainLogo from "../images/logo.png";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footerTop">
          <div className="footerLeft">
            <h2 className="offWhite">
              Got a project? <br />
              Lets talk.
            </h2>

            <p className="grayColor">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              aspernatur.
            </p>
            <a href="#">mibra4321@gmail.com &#10503;</a>
          </div>
          <div className="footerRight">
            <h2 className="offWhite">
              Estimate your project? <br />
              Let me know here.
            </h2>

            <form action="#" className="questions">
              <div className="question1 question offWhite">
                <label htmlFor="name">Whats your name?</label>
                <input type="text" name="name" id="name" autoComplete="on" />
              </div>
              <div className="question2 question offWhite">
                <label htmlFor="email">Your fancy email?</label>
                <input type="email" name="email" id="email" autoComplete="on" />
              </div>
              <div className="textArea offWhite">
                <div className="textArea-label">
                  <label htmlFor="project">Tell me about your project</label>
                  <div className="pin">
                    <button>
                      <i className="fas fa-paperclip grayColor"></i>
                    </button>
                    <button type="submit ">&#10503;</button>
                  </div>
                </div>
                <textarea
                  name="project"
                  id="project"
                  cols="30"
                  rows="3"
                  placeholder="Enter your thoughts here"
                ></textarea>
              </div>
            </form>
          </div>
        </div>
        <div className="footerBottom">
          <div className="logo">
            <img src={mainLogo} alt="logo" />
          </div>
          <h3 className="grayColor">Thanks htmlFor scrolling.</h3>
          <div className="socialLinks offWhite">
            <i className="fab fa-facebook-square fa-lg offWhite"></i>

            <i className="fab fa-instagram fa-lg offWhite"></i>

            <i className="fab fa-linkedin-in fa-lg offWhite"></i>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
