import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

class UpdateNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      noteState: this.props.note,
      showModal: false,
    };
  }

  handleShowModal = () => {
    this.setState({ showModal: true });
  }

  handleHideModal = () => {
    this.setState({ showModal: false });
  }

  updateNoteState = (event) => {
    this.setState({noteState: event.target.value});
  }

  handleUpdateNote = (event) => {
    event.preventDefault();
    const SERVER = process.env.REACT_APP_BACKEND;
    axios.put(`${SERVER}/moods/${this.props.moodId}?email=${this.props.email}`, {
      mood: this.props.mood,
      note: this.state.noteState
    }).then((response) => {
      this.props.updateMoods(response.data);
      alert('Your note has been updated');
    });
  }

  render() {
    return (
      <>
        <Button id="update-button" onClick={this.handleShowModal}>Update Note</Button>

        <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
          <Modal.Header>
            <Modal.Title>Want to update your note?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleUpdateNote}>
              <Form.Group controlId="updateNotesForm">
                <Form.Label>Change your note here:</Form.Label>
                <Form.Control as="textarea" rows={2} onInput={this.updateNoteState} />
              </Form.Group>
              <Button id="submit-mood" type="submit" onClick={this.handleHideModal}>Submit change</Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default UpdateNote;