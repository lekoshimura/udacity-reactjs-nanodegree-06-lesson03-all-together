import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from './UserForm'

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
    userlist: []
  };

  userFormOnSubmitHandler = (user) => {
    const { userlist } = this.state;
    const userAlreadyAdded = userlist.filter(item => item.username === user.username).length > 0;
    if ( userAlreadyAdded ) {
      alert("ERROR: username already added!");
      return;
    };
    userlist.push(user);
    this.setState((currentState) => ({ userList: userlist }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <UserForm
          userFormOnSubmitHandler={this.userFormOnSubmitHandler}
          />
      </div>
    );
  }
}

export default App;