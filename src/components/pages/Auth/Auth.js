import React from 'react';
import moment from 'moment';
import userData from '../../../data/userData';

class Auth extends React.Component {
state = {
  email: '',
  firstName: '',
  lastName: '',
  date: Date.now(),
  username: '',
  password: '',
  bio: '',
  profileImageUrl: '',
}

verifyEmail = (e) => {
  e.preventDefault();
  const { username, password } = this.state;
  let user = { username, password };
  user = JSON.stringify(user);

  userData.authUser(user)
    .then((res) => {
      if (res) {
        localStorage.setItem('authed', true);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user_id', res.data.user_id);

        this.props.authToggle();
      }
    })
    .catch((err) => console.error(err));
}

createAccount = (e) => {
  e.preventDefault();
  const {
    email, firstName, lastName, username, password, profileImageUrl, bio,
  } = this.state;

  let { date } = this.state;

  date = moment(date).format('YYYY-MM-DD');

  const newUser = {
    first_name: firstName,
    last_name: lastName,
    email,
    username,
    created_on: date,
    password,
    bio,
    profile_image_url: profileImageUrl,

  };
  const jsonUser = JSON.stringify(newUser);

  userData.addUser(jsonUser)
    .then((res) => {
      if (res.data.valid === true) {
        localStorage.setItem('authed', true);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user_id', res.data.user_id);
        this.props.authToggle();
      } else {
        console.error('incorrecct password and/or username');
      }
    })
    .catch((err) => console.error(err));
}

usernameChange = (e) => {
  e.preventDefault();
  this.setState({ username: e.target.value });
}

emailChange = (e) => {
  e.preventDefault();
  this.setState({ email: e.target.value });
}

passwordChange = (e) => {
  e.preventDefault();
  this.setState({ password: e.target.value });
}

firstNameChange = (e) => {
  e.preventDefault();
  this.setState({ firstName: e.target.value });
}

lastNameChange = (e) => {
  e.preventDefault();
  this.setState({ lastName: e.target.value });
}

usernameChange = (e) => {
  e.preventDefault();
  this.setState({ username: e.target.value });
}

bioChange = (e) => {
  e.preventDefault();
  this.setState({ bio: e.target.value });
}

imageUrlChange = (e) => {
  e.preventDefault();
  this.setState({ profileImageUrl: e.target.value });
}

render() {
  return (
    <div>
      <h1>Current Users</h1>
      <form className='col-6 offset-3'>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" onChange={this.usernameChange} className="form-control" id="username" placeholder="please submit your username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="text" onChange={this.passwordChange} className="form-control" id="password" placeholder="please submit your password" />
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.verifyEmail}>Login</button>
      </form>

    <h1>New Users</h1>
      <form className='col-6 offset-3 '>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" onChange={this.emailChange} className="form-control" id="email" placeholder="email" />
        </div>
        <div className="form-group">
          <label htmlFor="First Name">First Name</label>
          <input type="text" onChange={this.firstNameChange} className="form-control" id="First Name" placeholder="First Name" />
        </div>
        <div className="form-group">
          <label htmlFor="Last Name">Last Name</label>
          <input type="text" onChange={this.lastNameChange} className="form-control" id="Last Name" placeholder="Last Name" />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" onChange={this.usernameChange} className="form-control" id="usernamee" placeholder="username" />
        </div>
        <div className="form-group">
          <label htmlFor="Password">Password</label>
          <input type="text" onChange={this.passwordChange} className="form-control" id="Password" placeholder="Password" />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <input type="text" onChange={this.bioChange} className="form-control" id="bio" placeholder="Add some information to share with other users :)" />
        </div>
        <div className="form-group">
          <label htmlFor="profile_image_url">Profile Pic URL</label>
          <input type="text" onChange={this.imageUrlChange} className="form-control" id="profile_image_url" placeholder="url" />
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.createAccount}>Create Account</button>
      </form>

    </div>
  );
}
}

export default Auth;
