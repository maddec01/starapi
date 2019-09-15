import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';

import LandingPage from './containers/Landing';
import SwapiAppPage from './containers/SwapiApp';
import AboutPage from './containers/About';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const App = () => (
  <React.Fragment>
    <Header />
    <BrowserRouter>
      <Navigation />
      <Switch>
          <Route path={ROUTES.APP_1} component={ SwapiAppPage } />
          <Route path={ROUTES.ABOUT} component={ AboutPage } />
          <Route exact path={ROUTES.LANDING} component={ LandingPage } />
          <Redirect from='*' to={ROUTES.LANDING} />
      </Switch>
    </BrowserRouter>
    <Footer />
  </React.Fragment>
);

export default App;
