import React from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';

class Mood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      mood: '',
      note: '',
      moodsArr: [],
    };
  }

  componentDidMount() {
    this.getUsersMoods();
  }

  // handleUpdateState = (update) => {
  //   this.setState({moodsArr: update});
  // }

  getUsersMoods = async() => {
    const SERVER = process.env.REACT_APP_BACKEND;
    const moods = await axios.get(`${SERVER}/users`, {params: {email: 'kassie.r.bradshaw@gmail.com'}});
    console.log('this is the returned data for moods', moods);
    this.setState({moodsArr: moods});
  }

  render() {
    return (
      <Container>
        <p>Here is a thing</p>
      </Container>
    );
  }
}

export default Mood;
