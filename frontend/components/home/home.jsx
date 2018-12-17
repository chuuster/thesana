import React from 'react';
import MainDisplayContainer from "./main/main_display_container";
import SideBarContainer from "./side_bar/side_bar_container";
import Modal from "../modal/modal"
import { connect } from "react-redux";
import { fetchProjects } from "../../actions/project_actions";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProjects: () => dispatch(fetchProjects())
  };
};

class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    this.props.fetchProjects();
  }
  
  render() {
    return (
      <div className="home-container">
        <Modal />
        <SideBarContainer />
        <MainDisplayContainer />
      </div>
    );
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Home);
