import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the content of the Home page.</p>
      <Link to="/About">Click here to navigate to About</Link>
    </div>
  );
};

export default Home;
