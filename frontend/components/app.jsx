import React from 'react';
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import Home from "./home/home";
import Splash from "./splash/splash";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Redirect } from 'react-router-dom';

const App = () => (
  <Switch>
    <AuthRoute exact path="/" component={Splash}/>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <ProtectedRoute path="/home" component={Home} />
    <Redirect to="/" />
  </Switch>
);

export default App;