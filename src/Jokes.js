import React from 'react';
import axios from 'axios';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Jokes.css';

class Jokes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.getJoke();
  }

  getJoke = async () => {
    try {
      let jokeData = await axios.get(`https://v2.jokeapi.dev/joke/Programming?format=json&blacklistFlags=nsfw,sexist&type=single&lang=en&amount=1`);
      // console.log(jokeData.data.joke);
      this.setState({ jokeData: jokeData.data.joke });
    } catch (err) {
      console.log(`error found!!! ${err.message}`);
      this.setState({ error: `${err.message}: ${err.message.data}` });
    }
  }

  handleMoodSubmit = async (event) => {
    event.preventDefault();
    try {
      this.getJoke();
    } catch (err) {
      console.log(err);
      this.setState({ error: `${err.message}: ${err.message.data}` });
    }
  }

  render() {
    return (
      <>
        <button onClick={this.handleMoodSubmit}>
          Get another joke!
        </button>
        <div id='joke-container'>
          <h6 id='joke--text'>{this.state.jokeData}</h6>
        </div>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Nav>
            <Nav.Link href="/Home">headSpace</Nav.Link>
            <Nav.Link href="/Profile">Profile</Nav.Link>
            <Nav.Link href="/Jokes">Jokes</Nav.Link>
            <Nav.Link href="/AboutUs">About Us</Nav.Link>
            {/* {isAuthenticated ? <LogoutButton /> : <LoginButton />} */}
          </Nav>
        </Navbar>
      </>
    );
  }
}

export default Jokes;
