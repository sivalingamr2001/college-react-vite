import React from 'react';
import Feature from '../../components/feature/Feature';
import './college.css';

const College = () => (
 <div className="college section__margin" id="clg">
  <div className="college-feature">
    <Feature title="About Our College" text="Our college offers a transformative education, fostering innovation and creativity. We provide a vibrant campus life, cutting-edge research opportunities, and a commitment to academic excellence." />
  </div>
  <div className="college-heading">
    <h1 className="gradient__text">Unlock Your Potential with Us</h1>
    <p>Apply Now for Early Admission</p>
  </div>
  <div className="college-container">
    <Feature title="Student Life" text="Experience a rich and diverse student life with numerous clubs, activities, and events that cater to a wide range of interests and talents." />
    <Feature title="Academic Excellence" text="Our college boasts a robust curriculum, experienced faculty, and state-of-the-art facilities to ensure a comprehensive and high-quality education." />
    <Feature title="Career Opportunities" text="We provide extensive career services, internships, and networking opportunities to help students launch successful careers in their chosen fields." />
  </div>
</div>
);

export default College;
