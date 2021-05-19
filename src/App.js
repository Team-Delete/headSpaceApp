import React, { Component } from 'react';
import './App.css';
import Profile from './Profile';
import AboutUs from './AboutUs';
import Home from './Home';
import Jokes from './Jokes';
// import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
// import Weather from './Weather';
// import Quote from './Quote';
// import MoodRing from './MoodRing';
// import NavBar from './NavBar';
// import Mood from './Mood';
// temp imports to render weather
// import Error from './Error';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Weather from './Weather';
// import WeatherDay from './WeatherDay';

// Use for the main stream line component. Should have low functions, high imports for render.

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
    console.log('constructor runs');
  }

  componentDidMount() {
    console.log('componentDidMount runs');
  }

  // Render compenent -- shouldn't need bootstrap.

  render() {
    // const { isAuthenticated } = this.props.auth0;
    // console.log('render method runs');
    return (
      <>
        {/* <Home /> */}
        {/* <MoodRing /> */}
        {/* <Quote /> */}
        {/* <NavBar /> */}
        <Router>
          <Switch>
            {/* <Route
              exact path="/">{isAuthenticated ? <Profile /> : <Profile />}
            </Route> */}
            <Route exact path="/Profile">
              <Profile />
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
      </>
    );
  }
}

// export default withAuth0(App);
export default App;
