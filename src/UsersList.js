import React from 'react';

class UsersList extends React.Component {
  label = (user) => {
    return this.props.showGamesPlayed
      ? `${user.username} played ${user.gamesplayed} game(s)`
      : `${user.username} played x game(s)`;
  };

  render() {
    return (
      <div>
        <h2>Users</h2>
        <ol>
          {this.props.userslist.map((user, index) => (<li key={index}> {this.label(user)}.</li>))}
        </ol>
      </div>
    )
  };
};

export default UsersList;