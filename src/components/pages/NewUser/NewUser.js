import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import moment from 'moment';
import userData from '../../../data/userData';

class NewUser extends React.Component {
state = {
  userName: '',
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
    userName, firstName, lastName, username, password, profileImageUrl, bio,
  } = this.state;

  let { date } = this.state;

  date = moment(date).format('YYYY-MM-DD');

  const newUser = {
    first_name: firstName,
    last_name: lastName,
    userName,
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
  this.setState({ userName: e.target.value });
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

    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className="paper">
      <Avatar className="avatar">
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <form className="form" noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="First Name"
              onChange={this.firstNameChange}
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lname"
              onChange={this.lastNameChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={this.emailChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="userName"
              label="User Name"
              name="userName"
              autoComplete="userName"
              onChange={this.usernameChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={this.passwordChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="bio"
              label="Bio"
              type="bio"
              id="bio"
              autoComplete="bio"
              onChange={this.bioChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="imgUrl"
              label="imgUrl"
              type="imgUrl"
              id="imgUrl"
              autoComplete="imgUrl"
              onChange={this.imageUrlChange}
            />
          </Grid>
          <Grid item xs={12}>
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={this.createAccount}
        >
          Sign Up
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Link href="/Auth" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  </Container>
  );
}
}

export default NewUser;
