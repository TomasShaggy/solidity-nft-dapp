import React from "react";
import Title from "../components/title";
import "../App.scss";

const About = () => {
  return (
    <div className="inner absolute left-2 top-2">
      <Title lineContent="Home" lineContent2="About" lineContent3="Work" />
      <p className="other">piči funguj</p>
    </div>
  );
};

export default About;
