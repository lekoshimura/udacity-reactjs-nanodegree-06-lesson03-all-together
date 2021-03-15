import React from 'react';

class UserForm extends React.Component {
  state = {
    firstname: '',
    lastname: '',
    username: ''
  };

  onChangeFirstNameHandler = (event) => {
    this.setState({ firstname: event.target.value });
  };

  onChangeLastNameHandler = (event) => {
    this.setState({ lastname: event.target.value });
  };

  onChangeUsernameHandler = (event) => {
    this.setState({ username: event.target.value.toLowerCase() });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    const {firstname, lastname, username} = this.state;
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
      username: username
    };
    this.props.userFormOnSubmitHandler(user);
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
        <input type="submit" value="Add" />
      </form>
    )
  };
};

export default UserForm;