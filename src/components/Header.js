import React, { useState } from "react";
import logoPng from "../images/logo.png";

function Header() {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navTop">
          <div className="logo">
            <img src={logoPng} alt="logo" />
          </div>
          <ul className={`navLinks ${isNavActive ? "activeLinks" : ""}`}>
            <li>
              <a href="#cards">Services</a>
            </li>
            <li>
              <a href="#portfolio">Work</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
          </ul>
          <div className="menu" onClick={toggleNav}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
        <div className="navBottom">
          <section className="navLeft">
            <div className="name">
              <h1>
                Muhammad <br />
                Ibrahim Iftikhar
              </h1>
            </div>
            <div className="socialLinks">
              <i className="fab fa-facebook-square fa-lg offWhite"></i>
              <i className="fab fa-instagram fa-lg offWhite"></i>
              <i className="fab fa-linkedin-in fa-lg offWhite"></i>
            </div>
          </section>
          <section className="navRight">
            <div className="introduction">
              <h4 className="rightLine grayColor">Introduction</h4>
              <h2 className="offWhite">
                Web developer and video editor, based in Pakistan.
              </h2>
              <p className="grayColor">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                voluptas, perspiciatis aut iste optio nisi ratione accusamus
                eum, at.
              </p>
            </div>
            <a href="#" className="story">
              My story &#10503;
            </a>
          </section>
        </div>
      </nav>
    </div>
  );
}

export default Header;
