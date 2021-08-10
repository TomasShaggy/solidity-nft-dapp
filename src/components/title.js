import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { NavLink } from "react-router-dom";
import "../App.scss";

const Title = ({ lineContent, lineContent2, lineContent3 }) => {
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);

  useEffect(() => {
    gsap.from([line1, line2, line3], 0.8, {
      delay: 0.8,
      ease: "power3.out",
      y: 64,
      stagger: {
        amount: 0.15,
      },
    });
  }, [line1, line2]);
  return (
    <h1 class="page-title">
      <div className="line-wrap">
        <div ref={(el) => (line1 = el)} className="line">
          <NavLink
            to="/"
            exact
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            {lineContent}
          </NavLink>
        </div>
      </div>
      <div className="line-wrap">
        <div ref={(el) => (line2 = el)} className="line">
          <NavLink
            to="/about"
            exact
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            {lineContent2}
          </NavLink>
        </div>
      </div>
      <div className="line-wrap">
        <div ref={(el) => (line3 = el)} className="line">
          <NavLink
            to="/work"
            exact
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            {lineContent3}
          </NavLink>
        </div>
      </div>
    </h1>
  );
};

export default Title;
