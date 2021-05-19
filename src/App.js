import React, { Component } from 'react';
// import Quote from './Quote';
import './App.css';
// import Mood from './Mood';
// import Profile from './Profile';
// import Weather from './Weather';
import Jokes from './Jokes';
import Weather from './Weather';
// import axios from 'axios';
// import { withAuth0 } from '@auth0/auth0-react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from 'react-router-dom';
// import Weather from './Weather';
// import Jokes from './Jokes';
// temp imports to render weather
// import Error from './Error';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import WeatherDay from './WeatherDay';

// Use for the main stream line component. Should have low functions, high imports for render.

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
    
    console.log('render method runs');
    return (
      <>
        <Jokes jokeData={this.state.jokeData} />
        <Weather />
      </>
    );
  }
}

export default App;
