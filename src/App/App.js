import React from 'react';

import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import './App.scss';

import userData from '../data/userData';

import Home from '../components/Home/home';
import LandingPage from '../components/Landingpage/landingpage';

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false
    ? (<Component {...props} {...rest} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};
const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true
    ? (<Component {...props} {...rest} />)
    : (<Redirect to={{ pathname: '/landingPage', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

const RoutesContainer = ({ authed, setBackgroundcolor }) => (
    <div>
      <Switch>
        <PrivateRoute path="/home" component={Home} authed={authed}/>

        <PublicRoute path='/landingPage' component={LandingPage} authed={authed}/>

        <Redirect from='*' to='/home' />
      </Switch>
    </div>
);

class App extends React.Component {
  state = {
    authed: false,
    userData: null,
  };

  componentDidMount() {
    // userData.getUserbyID(1)
    //   .then((res) => this.setState({ userData: res.data }))
    //   .catch((err) => console.error(err));
  }

  render() {
    const { authed } = this.state;
    return (
      <div>
        <BrowserRouter>
          <h1>HI TEAM</h1>
          <RoutesContainer authed={authed} />
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
