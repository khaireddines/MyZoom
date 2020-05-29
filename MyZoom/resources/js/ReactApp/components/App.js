import React,{lazy,Suspense} from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

const MainPage = lazy(()=>import('./MainPage/MainPage'));
const Chat = lazy(()=>import('./chat/chat'));


import { Container } from "@material-ui/core";
class App extends React.Component {
    
    render() {
        return (
            <Container maxWidth="xl" style={{height: '99vh'}}>
                <Router>
                        <Switch>
                        <Suspense fallback={<div>Loading</div>}>

                            <Route exact path="/" component={MainPage} />
                            <Route exact path="/chat" component={Chat} />
                            </Suspense>
                        </Switch>
                </Router>
            </Container>
        );
    }
}

export default App;
