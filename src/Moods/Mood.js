import React from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import AddMood from './AddMood.js';
import UpdateMood from './UpdateMood.js';
import DeleteMood from './DeleteMood.js';

class Mood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'kassie.r.bradshaw@gmail.com',
      mood: '',
      note: '',
      moodsArr: [],
      hasVoted: false
    };
  }

  componentDidMount() {
    this.getUsersMoods();
  }

  hasVoted = () => {
    this.setState({ hasVoted: true });
  }

  handleUpdateMoods = (update) => {
    this.setState({ moodsArr: update });
  }

  getUsersMoods = async () => {
    const SERVER = process.env.REACT_APP_BACKEND;
    const moods = await axios.get(`${SERVER}/moods/${this.state.email}`);
    console.log('this is the returned data for moods', moods.data);
    this.setState({ moodsArr: moods.data });
  }

  render() {
    const data = this.state.moodsArr;
    return (
      <Container id="mood-container">
        {this.state.hasVoted ?
          <CardDeck />
          :
          <AddMood
            updateMoods={this.handleUpdateMoods}
            hasVoted={this.hasVoted}
          />}
        <CardDeck>
          {data.map((mood, idx) => (
            <Card className="card" key={idx}>
              <Card.Body>
                <Card.Title>{mood.mood}</Card.Title>
                <Card.Text>{mood.note}</Card.Text>
              </Card.Body>
              <UpdateMood
                moodId={mood._id}
                email={this.state.email}
                mood={mood.mood}
                note={mood.note}
                updateMoods={this.handleUpdateMoods}
              />
              <DeleteMood
                moodId={mood._id}
                email={this.state.email}
                moodList={this.state.moodsArr}
                updateMoods={this.handleUpdateMoods}
              />
            </Card>
          ))}
        </CardDeck>
      </Container>
    );
  }
}

export default Mood;
