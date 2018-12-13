import React from 'react';
import MainContentContainer from "./main_content/main_content_container";
import SideBarContainer from "./side_bar/side_bar_container";
// import { ProtectedRoute } from "../util/route_util";
// import { Switch } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <SideBarContainer />
      <MainContentContainer />
    </div>
  );
};

export default Home;