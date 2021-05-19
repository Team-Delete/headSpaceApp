import React, { Component } from 'react';
import Quote from './Quote';
import './App.css';
// import MoodRing from './MoodRing';
// import NavBar from './NavBar';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('Home Render Works');
    return (
      <>

        <Quote />
        {/* <MoodRing /> */}
        <NavBar />

        <a rel="nofollow" href="https://HeadSpaceApp.netlify.app"><img src="https://chart.googleapis.com/chart?cht=qr&chl=http%3A%2F%2FHeadSpaceApp.netlify.app&chs=180x180&choe=UTF-8&chld=L|2" alt="Login Here" /> </a>
      </>
    );
  }
}

export default Home;
