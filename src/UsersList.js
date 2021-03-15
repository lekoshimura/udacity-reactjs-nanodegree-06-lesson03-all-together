import React from 'react';

class UsersList extends React.Component {
  render() {
    return (
      <div>
        <h2>Users</h2>
        <ol>
          {this.props.userslist.map((user, index) => (<li key={index}> {user.username} played {user.gamesplayed} game(s).</li>))}
        </ol>
      </div>
    )
  };
};

export default UsersList;