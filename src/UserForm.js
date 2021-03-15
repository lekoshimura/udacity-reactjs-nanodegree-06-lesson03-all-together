import React from 'react';

class UserForm extends React.Component {
  state = {
    firstname: '',
    lastname: '',
    username: '',
    gamesplayed: 0
  };

  onChangeFirstNameHandler = event => {
    this.setState({ firstname: event.target.value.trim() });
  };

  onChangeLastNameHandler = event => {
    this.setState({ lastname: event.target.value.trim() });
  };

  onChangeUsernameHandler = event => {
    this.setState({ username: event.target.value.trim().toLowerCase() });
  };

  onChangeGamesPlayedHandler = event => {
    this.setState({ gamesplayed: event.target.value.trim() });
  };

  areFieldsEmpty = () => {
    const {firstname, lastname, username} = this.state;
    return firstname.length === 0 && lastname.length === 0 && username.length === 0;
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    const {firstname, lastname, username, gamesplayed} = this.state;
    if (firstname.length === 0) {
      alert("ERROR: Type the first name");
      return;
    };
    if (lastname.length === 0) {
      alert("ERROR: Type the last name");
      return;
    };    
    if (username.length === 0) {
      alert("ERROR: Type the username");
      return;
    };
    const user = {
      firstname: firstname,
      lastname: lastname,
      username: username,
      gamesplayed: gamesplayed
    };
    let submissionOk = this.props.userFormOnSubmitHandler(user);
    if (submissionOk) {
      this.setState({ firstname: '' });
      this.setState({ lastname: '' });
      this.setState({ username: '' });
      this.setState({ gamesplayed: 0 });
    };
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <h2>Add User</h2>
        <div>
          <input 
            type="text"
            name="firstname"
            placeholder="first name"
            value={this.state.firstname}
            onChange={this.onChangeFirstNameHandler} />
          <input
            type="text"
            name="lastname"
            placeholder="last name"
            value={this.state.lastname}
            onChange={this.onChangeLastNameHandler} />
        </div>
        <div>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.onChangeUsernameHandler} />
        </div>
        <div>
          <p>games played by user:
          <input
            style={{width: '40px'}}
            type="number"
            name="gamesplayed"
            placeholder="games played"
            value={this.state.gamesplayed}
            onChange={this.onChangeGamesPlayedHandler} />
          </p>
        </div>
        <button type="submit" disabled={this.areFieldsEmpty()}>Add</button>
      </form>
    )
  };
};

export default UserForm;