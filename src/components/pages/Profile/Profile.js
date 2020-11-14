import React from 'react';
import {
  Collapse, Button, CardBody, Card,
} from 'reactstrap';

import userData from '../../../data/userData';

class Profile extends React.Component {
    state = {
      user: {},
      isOpen: false,
      firstName: '',
      lastName: '',
      displayName: '',
    };

    updateUser = (e) => {
      const {
        firstName, lastName, displayName, user,
      } = this.state;
      const updatedUser = {
        first_name: firstName,
        last_name: lastName,
        display_name: displayName,
        email: user.email,
        date: user.date,
      };

      const JsonUser = JSON.stringify(updatedUser);
      userData.updateUser(user.id, JsonUser)
        .then((res) => {
          this.props.history.push('./home');
        })
        .catch((err) => console.error(err));
    }

    componentDidMount() {
      userData.getUserbyID(localStorage.getItem('user_id'))
        .then((res) => this.setState({ user: res.data }))
        .catch((err) => console.error(err));
    }

    updateFirst = (e) => {
      e.preventDefault();
      this.setState({ firstName: e.target.value });
    }

    updateLast = (e) => {
      e.preventDefault();
      this.setState({ lastName: e.target.value });
    }

      updateDisplay = (e) => {
        e.preventDefault();
        this.setState({ displayName: e.target.value });
      }

      render() {
        const { user, isOpen } = this.state;
        const toggle = () => this.setState({ isOpen: !isOpen });

        return (
        <div>
            <h1>User Settings</h1>
            <h2>Weclome {user.first_name} </h2>
            <div>
            <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Update Account</Button>
              <Collapse isOpen={isOpen}>
              <Card>
                <CardBody>
                <form>
                    <div className="form-group">
                      <label htmlFor="First Name">First Name:</label>
                      <input type="First Name" onChange={this.updateFirst} className="form-control" aria-describedby="First Namehelp" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Last Name">Last Name:</label>
                      <input type="Last Name" onChange={this.updateLast} className="form-control" aria-describedby="Last Namehelp" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="categoryName">Display Name:</label>
                      <input type="categoryName" onChange={this.updateDisplay} className="form-control" aria-describedby="emailHelp" />
                    </div>
                    <button onClick={this.updateUser} className="btn btn-primary">Submit Updates</button>
                  </form>
                </CardBody>
              </Card>
            </Collapse>
          </div>
        </div>
        );
      }
}

export default Profile;
