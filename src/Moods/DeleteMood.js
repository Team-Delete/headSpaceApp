import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { withAuth0 } from '@auth0/auth0-react';

class DeleteMood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  timeout = (delay) => {
    return new Promise((res) => setTimeout(res, delay));
  }

  handleDelete = async() => {
    while (this.props.auth0.isLoading === true) {
      await this.timeout(200);
    }
    const SERVER = process.env.REACT_APP_BACKEND;
    const email = this.props.auth0.user.email;
    const id = this.props.moodId;
    axios.delete(`${SERVER}/moods/${id}?email=${email}`)
      .then((response) => {
        this.props.updateMoods(response.data);
        console.log(response.data);
        alert('Your entry has been deleted');
      });
  }

  render() {
    return (
      <Button id="delete-button" onClick={this.handleDelete}>Delete Entry</Button>
    );
  }
}

export default withAuth0(DeleteMood);
