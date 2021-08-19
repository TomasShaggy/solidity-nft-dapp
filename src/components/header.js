import * as ROUTES from "../constants/routes";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-container bg-dark-blue h-32 flex justify-end items-center">
      <Link to={ROUTES.HOME}>
        <h1 className="header-logo absolute left-3">DIANA</h1>
      </Link>

      <ul className="flex">
        <Link to={ROUTES.HOME}>
          <li className="header-li">Úvod</li>
        </Link>
        <Link to={ROUTES.OFFER} exact>
          <li className="header-li">Výběr</li>
        </Link>
        <Link to={ROUTES.SHOWCASE}>
          <li className="header-li">Galerie</li>
        </Link>
        <Link to={ROUTES.CONTACTS}>
          <li className="header-li">Kontakty</li>
        </Link>
      </ul>
    </div>
  );
}
