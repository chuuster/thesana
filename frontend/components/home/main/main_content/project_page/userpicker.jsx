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

  render() {
    const results = this.matches().map((match, i) => {
      return (
        <li key={i} onClick={this.selectName}>{match}</li>
      );
    });

    return (
      <div>
        <div className='auto'>
          <input
            onChange={this.handleInput}
            value={this.state.inputVal}
            placeholder='Search...' />
          <ul>
            {results}
          </ul>
        </div>
      </div>
    );
  }
};