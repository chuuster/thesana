import React from 'react';
import TopBarContainer from './top_bar/top_bar_container';
import MainContentContainer from "./main/main_content_container";

class MainDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-display-container">
        <TopBarContainer />
        <MainContentContainer />
      </div>
    )
  }
};

export default MainDisplay;