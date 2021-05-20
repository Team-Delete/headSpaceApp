import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap/Button';

class DeleteMood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  handleDelete = () => {
    const SERVER = process.env.REACT_APP_BACKEND;
    axios.delete(`${SERVER}/moods/${this.props.moodId}?email=${this.props.email}`)
      .then((response) => {
        this.props.updateMoods(response.data);
        alert('Your entry has been deleted');
      });
  }

  render() {
    return (
      <Button id="delete-button" onClick={this.handleDelete}>Delete Entry</Button>
    );
  }
}

export default DeleteMood;