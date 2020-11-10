import React from 'react';
import userData from '../../../data/userData';

class Auth extends React.Component {
state = { 
    email: "",
}
verifyEmail = (e) => {
    e.preventDefault();
    const { email } = state;
    userData.authUserByEmail(email)
        .then((res) => resolve(res))
        .catch((err) => console.error(err))
}

emailChange = (e) => {
    e.preventDefault();
    this.setState({ email: e.target.value })
}

    render() {
        return (
            <form className='col-6 offset-3'>
            <div className="form-group">
              <label htmlFor="email">email</label>
              <input type="text" onChange={this.emailChange} className="form-control" id="email" placeholder="please submit your email" />
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.verifyEmail}>Login</button>
          </form>
        );
    }
}

export default Auth
