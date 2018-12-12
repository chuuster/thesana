import React from 'react';

const TopBarIndex = (props) => {
  return (
    <ul>
      <li>Hi! You are logged in.</li>
      <li><button onClick={() => props.logout()}>Log Out</button></li>
    </ul>
  )
}

export default TopBarIndex;