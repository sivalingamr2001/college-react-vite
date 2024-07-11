import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => (
  <div className="blog section__padding" id="abt">
    <div className="blog-heading">
      <h1 className="gradient__text">
        A lot is happening, <br /> We are blogging about it.
      </h1>
    </div>
    <div className="blog-container">
      <div className="blog-container_groupA">
        <Article
          imgUrl={blog01}
          text="Our extensive library is a treasure trove of academic resources, featuring a vast collection of
					books,
					journals, and digital materials. It serves as a quiet and collaborative space for students to delve
					into
					research and expand their intellectual
					horizons."
        />
      </div>
      <div className="blog-container_groupB">
        <Article
          imgUrl={blog02}
          text="Our sports facilities cater to diverse interests with well-maintained fields and modern fitness centers."
        />
        <Article
          imgUrl={blog03}
          text="The canteen is a social space offering diverse, nutritious options to relax and recharge."
        />
        <Article
          imgUrl={blog04}
          text="Hogwarts' canteen is a vibrant hub for students to connect, offering diverse, delicious options."
        />
        <Article
          imgUrl={blog05}
          text="Hogwarts campus blends ancient architecture with magical innovation, featuring modern facilities and serene outdoor spaces."
        />
      </div>
    </div>
  </div>
);

export default Blog;
