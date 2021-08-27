import Header from "./components/header";
import Footer from "./components/footer";
import Loading from "./components/loading";
import * as ROUTES from "./constants/routes";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

const Home = lazy(() => import("./pages/home"));
const Showcase = lazy(() => import("./pages/showcase"));
const Contacts = lazy(() => import("./pages/contacts"));
const Offer = lazy(() => import("./pages/offer"));

export default function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path={ROUTES.HOME} component={Home} exact />
          <Route path={ROUTES.SHOWCASE} component={Showcase} exact />
          <Route path={ROUTES.CONTACTS} component={Contacts} />
          <Route path={ROUTES.OFFER} component={Offer} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
}
