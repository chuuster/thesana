import React from 'react';
import { ProtectedRoute } from "../util/route_util";
import { Switch } from 'react-router-dom';
import { HomePageContainer } from "./home_page/home_page_container";

const MainContent = () => (
  <div>maincontent</div>
  // <Switch>
  //   <ProtectedRoute exact path="/home" component={ HomePageContainer } />
  //   <ProtectedRoute exact path="/projects/:projectId" component={ProjectPage} />
  //   <ProtectedRoute exact path="/tasks/:taskId" component={ProjectPage} />
  // </Switch>
);

export default MainContent;