import React from "react";
import logo from "../../assets/images/Hog.png";
import "./footer.css";

const Footer = () => (
  <div className="footer section__padding" id="cont">
    <div className="footer-heading">
      <h1 className="gradient__text">
        Do you want to step in to the future before others
      </h1>
    </div>

    <div className="footer-btn">
      <p>Apply Now for Early Admission</p>
    </div>

    <div className="footer-links">
      <div className="footer-links_logo">
        <img src={logo} alt="logo" />
        <p>
          The Grate Britten, <br /> All Rights Reserved
        </p>
      </div>
      <div className="footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="footer-links_div">
        <h4>College</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="footer-links_div">
        <h4>Get in touch</h4>
        <p>Hogwarts College</p>
        <p>Castle Road, Hogsmeade, Scotland</p>
        <p>Phone: +44 1234 567890</p>
        <p>Email: info@hogwarts.edu</p>
      </div>
    </div>

    <div className="footer-copyright">
      <p>@2024 Hogwarts. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
