import React from "react";

import Title from "../components/title";

const Work = () => {
  return (
    <>
      <div className="page top-0 left-0 w-screen">
        <div className="inner">
          <Title
            lineContent1="Moje dosavadní práce"
            lineContent2="Prosím potvrďte to"
          />
        </div>
      </div>
      <section className="h-screen bg-yellow-300"></section>
    </>
  );
};

export default Work;
