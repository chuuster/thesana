import React from 'react';
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import MainContainer from "./main/main_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from 'react-router-dom';

const App = () => (
  <Switch>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <ProtectedRoute path="/" component={MainContainer} />
  </Switch>
);

export default App;

// const App = () => (
//   <div>
//     <header>
//       <Link to="/" className="header-link">
//         <h1>Bench BnB</h1>
//       </Link>
//       <GreetingContainer />
//     </header>
//     <Switch>
//       <AuthRoute exact path="/login" component={LogInFormContainer} />
//       <AuthRoute exact path="/signup" component={SignUpFormContainer} />
//       <ProtectedRoute exact path="/benches/new" component={BenchFormContainer} />
//       <Route path="/benches/:benchId" component={BenchShowContainer} />
//       <Route exact path="/" component={SearchContainer} />
//     </Switch>
//   </div>
// );

