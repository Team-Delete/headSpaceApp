import React, { Component } from 'react';
// import './App.css';
import Profile from './Profile';
import AboutUs from './AboutUs';
import Home from './Home';
import Jokes from './Jokes';
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Mood from './Moods/Mood.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
    console.log('constructor runs');
  }

  componentDidMount() {
    console.log('componentDidMount runs');
  }

  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <div>
        <Router>
          <Switch>
            <Route
              exact path="/">{isAuthenticated ? <Profile /> : <Profile />}
            </Route>
            <Route exact path="/Profile">
              <Profile />
              <Mood />
            </Route>
            <Route exact path="/AboutUs">
              <AboutUs />
            </Route>
            <Route exact path="/Jokes">
              <Jokes />
            </Route>
            <Route exact path="/Home">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default withAuth0(App);

