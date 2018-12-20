import React from 'react';

export default class UserPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    };
    this.selectName = this.selectName.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({ inputVal: event.currentTarget.value });
  }

  matches() {
    const names = this.props.users.map(user => `${user.fname} ${user.lname}`);
    const matches = [];

    if (this.state.inputVal.length === 0) {
      return names;
    }

    names.forEach(name => {
      const sub = name.slice(0, this.state.inputVal.length);
      if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matches.push(name);
      }
    });

    if (matches.length === 0) {
      matches.push('No matches');
    }

    return matches;
  }

  selectName(event) {
    const name = event.currentTarget.innerText;
    this.setState({ inputVal: name });
  }

  renderNameList() {
    const results = this.matches().map((match, i) => {
      return (
        <li 
          key={i} 
          onClick={this.selectName}>{match}</li>
      );
    });

    return (
      <div className="dropdown">
        <ul id="assignee-dropdown" className="dropdown-content-assignee">
          {results}
        </ul>
      </div>
    );
  }

  handleAssigneeDropdown(id) {
    return (e) => {
      e.preventDefault();
      e.stopPropagation();
      handleDropdownClick(id)();
    }
  }

  render() {
    return (
      <div className='assignee-section'>
        <div className='assignee-button-section' onClick={this.handleAssigneeDropdown("assignee-dropdown")}>

          <div className="dashed-circle-icon">
            <svg viewBox="0 0 32 32">
              <path d="M16,18c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S20.4,18,16,18z M16,4c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S19.3,4,16,4z" />
              <path d="M29,32c-0.6,0-1-0.4-1-1v-4.2c0-2.6-2.2-4.8-4.8-4.8H8.8C6.2,22,4,24.2,4,26.8V31c0,0.6-0.4,1-1,1s-1-0.4-1-1v-4.2C2,23,5,20,8.8,20h14.4c3.7,0,6.8,3,6.8,6.8V31C30,31.6,29.6,32,29,32z" />
            </svg>
          </div>

          <input
            onChange={this.handleInput}
            value={this.state.inputVal}
            placeholder='Name' />
          
          {this.renderNameList()}
        </div>
      </div>
    );
  }
};

// <div className="assignee-section">
//   <div className="assignee-button">
//     <div className="dashed-circle-icon">
//       <svg viewBox="0 0 32 32">
//         <path d="M16,18c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S20.4,18,16,18z M16,4c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S19.3,4,16,4z" />
//         <path d="M29,32c-0.6,0-1-0.4-1-1v-4.2c0-2.6-2.2-4.8-4.8-4.8H8.8C6.2,22,4,24.2,4,26.8V31c0,0.6-0.4,1-1,1s-1-0.4-1-1v-4.2C2,23,5,20,8.8,20h14.4c3.7,0,6.8,3,6.8,6.8V31C30,31.6,29.6,32,29,32z" />
//       </svg>
//     </div>
//     <div>Unassigned</div>
//   </div>
// </div>