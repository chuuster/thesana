import React from 'react';
import TopBarContainer from './top_bar/top_bar_container'

class MainContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-content-container">
        <TopBarContainer />
      </div>
    )
  }
};

export default MainContent;