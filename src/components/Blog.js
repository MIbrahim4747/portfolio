import React, { useState } from "react";

import Slide1 from "../images/Free Photo _ Guy in hooded sweatshirt in the dark.jpg";
import Slide2 from "../images/Premium_Photo___Medium_shot_of_man_using_a_laptop-removebg-preview.png";
import Slide3 from "../images/decentMan.jpg";

function Blog() {
  let slides = [
    {
      src: Slide1,
      content:
        "asbdbasbhiqaraiosdioasd huiohasdhashdashdha udfh ufh  f asd f sdf s udfa UA UAS ",
    },
    {
      src: Slide2,
      content:
        "ASD HAHSD UASHD HASD IOIAOS ASDH OASHD AOS OAISH IOASHD AOHSD A SDOAHSDOIAHSODHO OIAS HD OASHD I",
    },
    {
      src: Slide3,
      content:
        "ASDH ASD AISD AW R AWR QWR QW AS 9Q W W   ASDIAS JH ASID HIASD 0A9 SASD HASD AS 9AS ",
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
