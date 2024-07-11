import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="possibility section__padding" id="possibility">
  <div className="possibility-image">
    <img src={possibilityImage} alt="possibility" />
  </div>
  <div className="possibility-content">
    <h4>Apply Now for Early Admission</h4>
    <h1 className="gradient__text">Explore endless possibilities <br /> in real-world education</h1>
    <p>Experience the diversity of knowledge and practical skills that prepare you for real-time challenges. Our community values innovation, collaboration, and leadership in addressing today's global issues.</p>
    <h4>Apply Now for Early Admission</h4>
  </div>
</div>
);

export default Possibility;
