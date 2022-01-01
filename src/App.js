import * as ROUTES from "./constants/routes";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import DropList from "./components/DropList";

/* const Home = lazy(() => import("./pages/home"));
const Showcase = lazy(() => import("./pages/showcase"));
const Contacts = lazy(() => import("./pages/contacts"));
const Offer = lazy(() => import("./pages/offer"));
 */
export default function App() {
  return (
    <Router>
      <Switch>
        <DropList />
      </Switch>
    </Router>
  );
}
