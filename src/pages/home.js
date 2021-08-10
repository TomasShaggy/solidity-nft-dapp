import React from "react";
import Title from "../components/title";
import "../App.scss";

const Home = () => {
  return (
    <div className="inner absolute left-2 top-2">
      <Title lineContent="Home" lineContent2="About" lineContent3="Work" />
      <div>
        <p className="other">piči funguj pls pls</p>
      </div>
    </div>
  );
};

export default Home;
