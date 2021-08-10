import React from "react";
import video from "../images/retro.mp4";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header grid grid-cols-5">
      <div className="col-span-3">
        <NavLink
          to="/"
          exact
          activeStyle={{
            fontWeight: "bold",
            color: "white",
          }}
        >
          <h1>TOMAS SCHLOGL</h1>
        </NavLink>
        <NavLink
          to="/about"
          exact
          activeStyle={{
            fontWeight: "bold",
            color: "white",
          }}
        >
          <h1>ABOUT</h1>
        </NavLink>
        <NavLink
          to="/experience"
          exact
          activeStyle={{
            fontWeight: "bold",
            color: "white",
          }}
        >
          <h1>EXPERIENCE</h1>
        </NavLink>
        <NavLink
          to="/work"
          exact
          activeStyle={{
            fontWeight: "bold",
            color: "white",
          }}
        >
          <h1>WORK</h1>
        </NavLink>
        <NavLink
          to="/contacts"
          exact
          activeStyle={{
            fontWeight: "bold",
            color: "white",
          }}
        >
          <h1>CONTACTS</h1>
        </NavLink>
      </div>
      <div className="uvodka-video-container col-span-2 flex justify-center items-center">
        {/*         <video muted autoPlay loop className="px-8">
          <source src={video} type="video/mp4" />
        </video>
 */}{" "}
      </div>
    </div>
  );
};

export default Header;
