import React from 'react';
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';
import Index from './pages/index';

import NotFound from './pages/not-found';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';
// import './index.css';

const Router = () => {
  return (
    <BrowserRouter >
      <Switch>
        <Route exact path="/" component={Index}/>
        <Route exact path="/index" component={Index}/>

        <Route component={NotFound} />
      </Switch>
      <Alert stack={{limit: 3}} />
    </BrowserRouter>
  );
};
export default Router;

