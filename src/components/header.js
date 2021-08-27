import * as ROUTES from "../constants/routes";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="fixed header-container">
      <div className=" bg-dark-blue h-28 flex justify-end items-center relative w-screen">
        <NavLink to={ROUTES.HOME}>
          <h1 className="header-logo absolute left-14 text-default-orange">
            DIANA
          </h1>
        </NavLink>

        <ul className=" md:flex hidden text-white pr-14">
          <NavLink
            to={ROUTES.HOME}
            exact
            activeClassName="active-header"
            className="header-li"
          >
            <li>Úvod</li>
          </NavLink>
          <NavLink
            to={ROUTES.OFFER}
            activeClassName="active-header"
            className="header-li"
          >
            <li>Výběr</li>
          </NavLink>
          <NavLink
            to={ROUTES.SHOWCASE}
            activeClassName="active-header"
            className="header-li"
          >
            <li>Galerie</li>
          </NavLink>
          <NavLink
            to={ROUTES.CONTACTS}
            activeClassName="active-header"
            className="header-li"
          >
            <li>Kontakty</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
