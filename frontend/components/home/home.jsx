import React from 'react';
import MainDisplayContainer from "./main/main_display_container";
import SideBarContainer from "./side_bar/side_bar_container";
import Modal from "../modal/modal"
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchProjects } from "../../actions/project_actions";
import { fetchTasks } from "../../actions/task_actions";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProjects: () => dispatch(fetchProjects()),
    fetchTasks: () => dispatch(fetchTasks()),
  };
};

class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    this.props.fetchProjects();
    this.props.fetchTasks();
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
