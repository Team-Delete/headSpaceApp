import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

class AddMood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'kassie.r.bradshaw@gmail.com',
      mood: '',
      note: '',
      color: '',
      number: ''
    };
  }

  componentDidMount() {
  }

  handleCreateMood = (event) => {

    this.setState({
      mood: event.target.value,
    });
    console.log(this.state.mood);
  };

  handleMoodNote = (event) => {
    this.setState({
      note: event.target.value,
    });
    console.log(this.state.note);
  };

  handleAddMood = (event) => {
    event.preventDefault();
    console.log('form was submitted');
    axios.post(`${process.env.REACT_APP_BACKEND}/moods`, {
      email: this.state.email,
      mood: this.state.mood,
      note: this.state.note,
      color: this.state.color,
      number: this.state.number
    })
      .then((response) => {
        console.log('server response: ', response.data);
        console.log('mood was added');
        alert('Your mood has been submitted!');
      });
  }

  render() {
    return (
      <Container>
        <h1>How Are You Feeling Today?</h1>
        <h4>You will be able to see your mood history after submitting!</h4>
        <Button variant="Warning" value="happy" size="lg" onClick={this.handleCreateMood}>Happy</Button>
        <Button variant="Primary" value="sad" size="lg" onClick={this.handleCreateMood}>Sad</Button>
        <Button variant="Success" value="excited" size="lg" onClick={this.handleCreateMood}>Excited</Button>
        <Button variant="Danger" value="angry" size="lg" onClick={this.handleCreateMood}>Angry</Button>
        <Button variant="Secondary" value="meh" size="lg" onClick={this.handleCreateMood}>Meh</Button>
        <Form>
          <Form.Group controlId="notesForm">
            <Form.Label>Add a note about how you are feeling and save it to your history:</Form.Label>
            <Form.Control as="textarea" rows={5} onInput={this.handleMoodNote} />
          </Form.Group>
          <Button variant="light" type="submit" onClick={this.handleAddMood}>Submit your mood!</Button>
        </Form>
      </Container>
    );
  }
}

export default AddMood;
