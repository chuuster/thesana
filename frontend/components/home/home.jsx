import React from 'react';
import MainDisplayContainer from "./main/main_display_container";
import SideBarContainer from "./side_bar/side_bar_container";
import Modal from "../modal/modal"
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchProjects } from "../../actions/project_actions";
import { fetchTasks } from "../../actions/task_actions";
import { fetchTeamMembers } from "../../actions/session_actions"

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProjects: () => dispatch(fetchProjects()),
    fetchTasks: () => dispatch(fetchTasks()),
    fetchTeamMembers: () => dispatch(fetchTeamMembers())
  };
};

class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    this.props.fetchTasks();
    this.props.fetchProjects();
    this.props.fetchTeamMembers();
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
