import React from 'react';

class Logout extends React.Component {
  logoutFunc = (e) => {
    e.preventDefault();
    localStorage.removeItem('authed');
    this.props.authToggle();
  };

  render() {
    return (
      <div className="button">
        <button className="btn btn-primary" onClick={this.logoutFunc}>Logout</button>
      </div>
    );
  }
}

export default Logout;
