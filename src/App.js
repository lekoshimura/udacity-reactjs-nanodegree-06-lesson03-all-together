import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from './UserForm';
import UsersList from './UsersList';
import ToggleGamesPlayed from './ToggleGamesPlayed'

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
    userslist: [],
    showGamesPlayed: true
  };

  userFormOnSubmitHandler = (user) => {
    let submissionOk = false;
    const { userslist } = this.state;
    const userAlreadyAdded = userslist.filter(item => item.username === user.username).length > 0;
    if ( userAlreadyAdded ) {
      alert("ERROR: username already added!");
      return submissionOk;
    };
    userslist.push(user);
    this.setState((currentState) => ({ usersList: userslist }));
    submissionOk = true;
    return submissionOk;
  };

  toggleGamesPlayedHandler = (show) => {
    this.setState({showGamesPlayed: show});
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <main>
          <UserForm
            userFormOnSubmitHandler={this.userFormOnSubmitHandler} />
          <hr style={{width: '480px'}}/>
          <ToggleGamesPlayed
            showGamesPlayed={this.state.showGamesPlayed}
            toggleGamesPlayedHandler={this.toggleGamesPlayedHandler} />
          <hr style={{width: '480px'}}/>
          <UsersList
            showGamesPlayed={this.state.showGamesPlayed}
            userslist={this.state.userslist} />
        </main>
      </div>
    );
  }
}

export default App;