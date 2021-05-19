import React from 'react';
import Navbar  from './Profile';
import Quote from './Quote';



class Home extends React.Component {
  render() {
    console.log('im working');
    return (
      <>
        <h1>Home Screen</h1>
        <Navbar />
        <Quote />

        <a rel="nofollow" href="https://HeadSpaceApp.netlify.app"><img src="https://chart.googleapis.com/chart?cht=qr&chl=http%3A%2F%2FHeadSpaceApp.netlify.app&chs=180x180&choe=UTF-8&chld=L|2" alt="Login Here" /> </a>
      </>
    );
  }
}

export default Home;
