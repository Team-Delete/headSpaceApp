import React from 'react';
import axios from 'axios';

class Jokes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  getJoke = async () => {
    try {
      let jokeData = await axios.get(`https://v2.jokeapi.dev/joke/Dark?format=json&blacklistFlags=nsfw,sexist&type=single&lang=en&amount=1`);
      // console.log(jokeData.data.joke);
      this.setState({ jokeData: jokeData.data.joke });
    } catch (err) {
      console.log(`error found!!! ${err.message}`);
      this.setState({ error: `${err.message}: ${err.message.data}` });
    }
  }

  handleMoodSubmit = async (event) => {
    // event.preventDefault();
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
          Set Mood + Call Joke API
        </button>
        <div id='joke-container'>
          <h6 id='joke--text'>{this.state.jokeData}</h6>
        </div>
      </>
    );
  }
}

export default Jokes;
