import * as ROUTES from "../constants/routes";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-container bg-dark-blue h-32 flex justify-end items-center">
      <NavLink to={ROUTES.HOME}>
        <h1 className="header-logo absolute left-3">DIANA</h1>
      </NavLink>

      <ul className="flex text-white">
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
  );
}
