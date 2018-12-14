import React from 'react';
import MainDisplayContainer from "./main/main_display_container";
import SideBarContainer from "./side_bar/side_bar_container";
// import { ProtectedRoute } from "../util/route_util";

const Home = (props) => {
  return (
    <div className="home-container">
      <SideBarContainer />
      <MainDisplayContainer />
    </div>
  );
};

export default Home;