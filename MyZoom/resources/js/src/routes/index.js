import React from "react";
import {Route, Switch} from "react-router-dom";

import asyncComponent from "../util/asyncComponent";

import InBuiltApps from "./inBuiltApps/";

const App = ({match}) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route exact path={`${match.url}sample`} component={asyncComponent(() => import('./SamplePage'))}/> 
      <Route  path={`${match.url}social`} component={asyncComponent(() => import('./inBuiltApps/'))}/> 
      
    </Switch>
  </div>
);

export default App;
