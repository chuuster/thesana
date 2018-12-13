import React from 'react';
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import Main from "./main/main";
import Splash from "./splash/splash"
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from 'react-router-dom';

const App = () => (
  <Switch>
    <AuthRoute exact path="/" component={Splash}/>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <ProtectedRoute path="/home" component={Main} />
  </Switch>
);

export default App;