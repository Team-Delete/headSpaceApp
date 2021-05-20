import React from 'react';
import Card from 'react-bootstrap/Card';
// import CardDeck from 'react-bootstrap/CardDeck';
// import ListGroup from 'react-bootstrap/ListGroup';
// import ListGroupItem from 'react-bootstrap/ListGroupItem';

class Member extends React.Component {
  render() {
    return (
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.imgSrc} />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>{this.props.bio}</Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href={this.props.linkedIn}>LinkedIn</Card.Link>
            <Card.Link href={this.props.gitHub}>gitHub</Card.Link>
          </Card.Body>
        </Card>
      </>
    );
  }
}
export default Member;
