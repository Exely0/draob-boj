import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>Welcome to the About Page</h1>
      <p>This is the content of the About page.</p>
      <Link to="/">Click here to navigate to Home</Link>
    </div>
  );
};

export default About;
