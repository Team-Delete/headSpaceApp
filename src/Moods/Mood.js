import React from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';

class Mood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'kassie.r.bradshaw@gmail.com',
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
    const moods = await axios.get(`${SERVER}/moods/${this.state.email}`);
    //  {params: {email: this.state.email}});
    console.log('this is the returned data for moods', moods.data);
    this.setState({moodsArr: moods.data});
  }

  render() {
    return (
      <Container>
        
      </Container>
    );
  }
}

export default Mood;
