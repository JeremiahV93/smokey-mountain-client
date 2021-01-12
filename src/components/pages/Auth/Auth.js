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

class Auth extends React.Component {
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
      if (res.data.valid) {
        console.log(res.data);
        localStorage.setItem('authed', true);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user_id', res.data.user_id);
        localStorage.setItem('isStaff', res.data.is_staff);

        this.props.authToggle();
      }
    })
    .catch((err) => console.error(err));
}

passwordChange = (e) => {
  e.preventDefault();
  this.setState({ password: e.target.value });
}

usernameChange = (e) => {
  e.preventDefault();
  this.setState({ username: e.target.value });
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
          Sign in
        </Typography>
        <form className="form" noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="userName"
            label="User Name"
            name="userName"
            autoComplete="userName"
            autoFocus
            onChange={this.usernameChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={this.passwordChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.verifyEmail}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/NewUser" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
}

export default Auth;
