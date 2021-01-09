import React from 'react';

import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import './App.scss';

import SingleArticle from '../components/pages/Articles/SingleArticle';
import EditArticle from '../components/pages/Articles/EditArticle';
import NewArticle from '../components/pages/Articles/NewArticle';
import Articles from '../components/pages/Articles/Articles';
import Navbar from '../components/pages/Navbar/Navbar';
import Auth from '../components/pages/Auth/Auth';
import Home from '../components/pages/Home/home';
import LandingPage from '../components/pages/Landingpage/landingpage';
import Categories from '../components/pages/Categories/Categories';
import Tags from '../components/pages/Tags/Tags';
import Profile from '../components/pages/Profile/Profile';
import NewUser from '../components/pages/NewUser/NewUser';
import Comments from '../components/pages/Comments/Comments';

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

const RoutesContainer = ({ authed, authToggle }) => (
    <div>
      <Switch>
        <PrivateRoute path="/home" component={Home} authed={authed}/>
        <PrivateRoute path="/categories" component={Categories} authed={authed}/>
        <PrivateRoute path="/tags" component={Tags} authed={authed} />
        <PrivateRoute exact path="/articles" component={Articles} authed={authed} />
        <PrivateRoute path="/articles/:articleId" component={SingleArticle} authed={authed}/>
        <PrivateRoute path="/articles/:categoryId" component={Articles} authed={authed} />
        <PrivateRoute path="/newarticle" component={NewArticle} authed={authed} />
        <PrivateRoute path='/profile' component={Profile} authed={authed} />
        <PrivateRoute path='/comments' component={Comments} authed={authed} />

        <PrivateRoute path="/editarticles/:articleId" component={EditArticle} authed={authed} />
        <PublicRoute path='/landingPage' component={LandingPage} authed={authed}/>
        <PublicRoute path='/auth' component={Auth} authed={authed} authToggle={authToggle} />
        <PublicRoute path='/newuser' component={NewUser} authed={authed} authToggle={authToggle} />

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
    if (localStorage.getItem('authed') === 'true') {
      this.setState({ authed: true });
    }
  }

  authToggle = () => {
    const { authed } = this.state;
    this.setState({ authed: !authed });
  }

  render() {
    const { authed } = this.state;

    return (
      <div>
        <BrowserRouter>
          <Navbar authed={authed} authToggle={this.authToggle}/>
          <RoutesContainer authed={authed} authToggle={this.authToggle}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
