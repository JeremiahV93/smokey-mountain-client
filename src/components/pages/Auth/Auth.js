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
      if (res) {
        localStorage.setItem('authed', true);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user_id', res.data.user_id);

        this.props.authToggle();
      }
    })
    .catch((err) => console.error(err));
}

// createAccount = (e) => {
//   e.preventDefault();
//   const {
//     userName, firstName, lastName, username, password, profileImageUrl, bio,
//   } = this.state;

//   let { date } = this.state;

//   date = moment(date).format('YYYY-MM-DD');

//   const newUser = {
//     first_name: firstName,
//     last_name: lastName,
//     userName,
//     username,
//     created_on: date,
//     password,
//     bio,
//     profile_image_url: profileImageUrl,

//   };
//   const jsonUser = JSON.stringify(newUser);

//   userData.addUser(jsonUser)
//     .then((res) => {
//       if (res.data.valid === true) {
//         localStorage.setItem('authed', true);
//         localStorage.setItem('token', res.data.token);
//         localStorage.setItem('user_id', res.data.user_id);
//         this.props.authToggle();
//       } else {
//         console.error('incorrecct password and/or username');
//       }
//     })
//     .catch((err) => console.error(err));
// }

// usernameChange = (e) => {
//   e.preventDefault();
//   this.setState({ username: e.target.value });
// }

// emailChange = (e) => {
//   e.preventDefault();
//   this.setState({ userName: e.target.value });
// }

// passwordChange = (e) => {
//   e.preventDefault();
//   this.setState({ password: e.target.value });
// }

// firstNameChange = (e) => {
//   e.preventDefault();
//   this.setState({ firstName: e.target.value });
// }

// lastNameChange = (e) => {
//   e.preventDefault();
//   this.setState({ lastName: e.target.value });
// }

// usernameChange = (e) => {
//   e.preventDefault();
//   this.setState({ username: e.target.value });
// }

// bioChange = (e) => {
//   e.preventDefault();
//   this.setState({ bio: e.target.value });
// }

// imageUrlChange = (e) => {
//   e.preventDefault();
//   this.setState({ profileImageUrl: e.target.value });
// }

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
