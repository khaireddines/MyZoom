import React from "react";
import {Route, Switch} from "react-router-dom";

import asyncComponent from "../util/asyncComponent";


const App = ({match}) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route exact path={`${match.url}ConferenceRoom`} component={asyncComponent(() => import('./ChatRooms'))}/> 
      <Route path={`${match.url}social`} component={asyncComponent(() => import('./inBuiltApps/'))}/> 
      <Route exact path={`${match.url}records`} component={asyncComponent(()=>import('./Records/'))} />
    </Switch>
  </div>
);

export default App;
