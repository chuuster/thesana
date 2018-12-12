import React from 'react';
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import TopBarContainer from "./top_bar/top_bar_container";
import MainContainer from "./main_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from 'react-router-dom';

const App = () => (
  <Switch>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    {/* <ProtectedRoute path="/" component={MainContainer} /> */}
    <ProtectedRoute path="/" component={TopBarContainer} />
  </Switch>
);

export default App;