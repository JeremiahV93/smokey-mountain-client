import React from 'react';
import { Link } from 'react-router-dom';

import Alert from '@material-ui/lab/Alert';

class Landingpage extends React.Component {
  render() {
    return (
            <div>
            <Alert severity="error"><Link to="/Auth">Please sign in to continue</Link></Alert>
            </div>
    );
  }
}

export default Landingpage;
