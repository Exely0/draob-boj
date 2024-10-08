import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="[&>*]:text-center">
      <h1 className="">
        Bienvenue sur <span>Infact</span>
      </h1>
      <div className="">
        <Link to="/Main">Click here to find your job</Link>
      </div>
    </div>
  );
};

export default Welcome;
