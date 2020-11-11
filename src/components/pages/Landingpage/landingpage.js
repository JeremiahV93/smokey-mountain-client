import React from 'react';
import { Link } from 'react-router-dom';

class Landingpage extends React.Component {
  render() {
    return (
            <div>
            <Link to="/Auth">Login</Link>
            </div>
    );
  }
}

export default Landingpage;
