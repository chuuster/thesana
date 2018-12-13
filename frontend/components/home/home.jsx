import React from 'react';
import MainContentContainer from "./main_content/main_content_container";
import SideBarContainer from "./side_bar/side_bar_container";
// import { ProtectedRoute } from "../util/route_util";

const Home = () => {
  return (
    <div className="home-container">
      <SideBarContainer />
      <MainContentContainer />
    </div>
  );
};

export default Home;