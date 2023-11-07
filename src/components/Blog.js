import React, { useState } from "react";

import Slide1 from "../images/man1.png";
import Slide2 from "../images/man2.png";
import Slide3 from "../images/man3.png";

function Blog() {
  let slides = [
    {
      src: Slide1,
      content:
        "Working with this guy as our web developer has been an absolute pleasure. Their attention to detail, coding skills, and dedication to the project were truly impressive. I couldn't be happier with the website they created, and I highly recommend their services.",
      name: "Jon Wale",
    },
    {
      src: Slide2,
      content:
        "I can't thank Ibrahim enough for the incredible work they did on my website. Their ability to grasp my vision and turn it into a functional, user-friendly site was remarkable. I am thrilled with the outcome and wouldn't hesitate to recommend them to others.",
      name: "Fared Gosma",
    },
    {
      src: Slide3,
      content:
        "I had the pleasure of hiring Ibrahim for a critical web development project, and they exceeded my expectations in every way. Their coding skills, problem-solving abilities, and dedication to the website's success were remarkable. I wholeheartedly endorse their work.",
      name: "Waleed Ahmed",
    },
  ];
  let [currentIndex, setSlideIndex] = useState(0);

  const slideIndicators = slides.map((slide, index) => (
    <span
      key={index}
      className={`slide-indicator ${index === currentIndex ? "active" : ""}`}
      onClick={() => goToSlide(index)}
    ></span>
  ));

  let goToSlide = (index) => {
    setSlideIndex(index);
  };
  return (
    <div>
      <section className="blog">
        <div className="blogTop">
          <div className="blogLeft">
            <h4 className="rightLine grayColor">blog</h4>
            <h2 className="offWhite">
              Whats new? <br />
              My blog and news
            </h2>
          </div>
          <div className="blogRight">
            <div className="blogDescription">
              <div className="blogDate">
                <h4>feb 29.blog</h4>
                <h3>let this be a lesson for you</h3>
                <a href="#">&#10503;</a>
              </div>
            </div>
            <div className="blogDescription">
              <div className="blogDate">
                <h4>feb 14.blog</h4>
                <h3>How do you use time tracking for projects?</h3>
                <a href="#">&#10503;</a>
              </div>
            </div>
            <div className="blogDescription">
              <div className="blogDate">
                <h4>feb 9.blog</h4>
                <h3>Ego and emphaty in design</h3>
                <a href="#">&#10503;</a>
              </div>
            </div>
          </div>
        </div>
        <div className="blogBottom">
          <div className="slideshow-container">
            <div className="slides">
              <div className="slide">
                <div className="image">
                  <img src={`${slides[currentIndex].src}`} alt="asdasd" />
                </div>
                <div className="content">
                  <div className="contentText">
                    <h2>
                      <i
                        className="fa-solid fa-quote-left fa-fade"
                        style={{ color: "#95989d" }}
                      ></i>
                    </h2>
                    <p>{slides[currentIndex].content}</p>
                    <h3 className="clientName">{slides[currentIndex].name}</h3>
                  </div>

                  <div className="slide-indicators">{slideIndicators}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
