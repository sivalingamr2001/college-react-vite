import React from "react";
import ai from "../../assets/images/hogwarts-logo.png";
import "./header.css";

const Header = () => (
  <div className="header section__padding" id="home">
    <div className="header-content">
      <h1 className="gradient__text">
        Wit beyond measure is man's greatest treasure.
      </h1>
      <em className="gradient__text">-Rowena Ravenclaw</em>
      <p>
        Enlightenment unfolds within these hallowed halls. Experiences enrich
        every moment. Pursuit of knowledge and community brings joy and
        transformation. Tradition and innovation create a vibrant tapestry of
        learning and growth.
      </p>

      <div className="header-content__people">
        <p>Stay informed! Receive our college newsletter via email</p>
      </div>

      <div className="header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>
    </div>

    <div className="header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
