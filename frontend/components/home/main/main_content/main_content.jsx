import React from 'react';
import { ProtectedRoute } from "../../../../util/route_util";
import { Switch } from 'react-router-dom';
import HomePageContainer from "./home_page/home_page_container";
import ProjectPageContainer from "./project_page/project_page_container";

const MainContent = () => (
  <Switch>
    <ProtectedRoute exact path="/home" component={ HomePageContainer } />
    <ProtectedRoute path="/projects/:projectId/:taskId?" component={ProjectPageContainer} />
  </Switch>
);

export default MainContent;