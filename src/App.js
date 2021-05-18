import React, { Component } from 'react';
import Quote from './Quote';
import './App.css';
import Mood from './Mood';
import Profile from './Profile';
import AboutUs from './AboutUs';
import Home from './Home';
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    // city: '',
    // cityData: {},
    // weatherData: [],
    // // movieData: [],
    // searchedYet: false
    // };
    console.log('constructor runs');
  }

  componentDidMount() {
    console.log('componentDidMount runs');
  }


  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Quote />
        <Router>
          <Switch>
            <Route
              exact path="/">{isAuthenticated ? <Home /> : <Profile />}
            </Route>
            <Route exact path="/Profile">
              <Profile />
            </Route>
            <Route exact path="/AboutUs">
              <AboutUs />
            </Route>
            <Route exact path="/Mood">
              <Mood />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);

