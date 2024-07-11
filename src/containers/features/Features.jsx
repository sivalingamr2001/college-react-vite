import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Enhancing student trust and engagement",
    text: "From their diverse backgrounds, students actively engage in enriching discussions and events. We prioritize fostering trust and inclusivity across all college activities.",
  },
  {
    title: "Active participation leads to personal growth",
    text: "Encouraging students to actively participate in academic and extracurricular activities ensures personal growth and development. We provide ample opportunities for students to excel beyond their expectations.",
  },
  {
    title: "Clear communication for effective collaboration",
    text: "Maintaining clear and open communication channels enhances collaboration among students, faculty, and staff. We emphasize the importance of transparent and respectful communication in all interactions.",
  },
  {
    title: "Creating a supportive community",
    text: "We are committed to creating a supportive environment where every student feels valued and respected. Our community values diversity, equity, and inclusion as fundamental principles.",
  },
];

const Features = () => (
  <div className="features section__padding" id="dis">
    <div className="features-heading">
      <h1 className="gradient__text">
        Empowering Students Today for a Brighter Tomorrow
      </h1>
      <p>Join us to Discover and Excel in Your Journey</p>
    </div>
    <div className="features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
