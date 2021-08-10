import { NavLink } from "react-router-dom";
import video from "../images/retro.mp4";

import "../App.scss";

export default function Header() {
  return (
    <div className="header">
      <NavLink to="/" exact>
        home
      </NavLink>
      <NavLink to="/about" exact>
        about
      </NavLink>
    </div>
    /*     <div className="header">
      <div className="container-uvodka grid grid-cols-12 min-h-screen">
        <NavLink className="uvodka-links-wrapper col-span-8 pl-4">
          <h1>TOMAS SCHLOGL</h1>
          <h1>ABOUT</h1>
          <h1>EXPERIENCES</h1>
          <h1>WORK</h1>
          <h1>CONTACTS</h1>
        </NavLink>

        <div className="text-video-wrapper col-span-3 grid grid-rows-6 ">
          <div className="row-span-2 flex justify-center items-center ">
            <video autoPlay loop muted>
              <source src={video} type="video/mp4" />
            </video>
          </div>

          <div className="row-span-4 flex justify-center items-center">
            <p className="text-xl text-center leading-loose row-span-4 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod at
              impedit dolores nobis, qui voluptatibus tenetur, distinctio nihil
              quibusdam eos tempore, et eveniet! Et ea quaerat, quo corrupti,
              vel quisquam dolore officia fugiat accusantium ullam nobis eveniet
              asperiores cum sapiente, non animi. Vitae error porro cupiditate
              molestiae repudiandae minima cumque. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div className="col-span-1 md:flex hidden "></div>
      </div>
    </div>
 */
  );
}
