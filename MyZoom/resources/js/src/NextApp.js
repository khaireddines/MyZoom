import React,{Suspense} from "react";
import { Provider, useSelector } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import {Route, Switch} from "react-router-dom";
import "./assets/vendors/style";
import "./styles/wieldy.less";
import CircularProgress from "./components/CircularProgress";
import configureStore, { history } from './appRedux/store';
const App = React.lazy(()=>import("./containers/App/index"));
const VideoRoom = React.lazy(() =>import("./containers/VideoRoom"));
const store = configureStore(/ provide initial state if any /);


const NextApp = () =>
  <Provider store={store}>
    <Suspense fallback={<CircularProgress/>}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/videoChatRoom_:roomID" render={(props)=>{
          let roomID = props.location.pathname.replace('/videoChatRoom_','');
         
          return(
            <VideoRoom roomID={roomID}/>
              
          )
        }} />
        <Route path="/" component={App}/>
      </Switch>
    </ConnectedRouter>
    </Suspense>
  </Provider>;



export default NextApp;
