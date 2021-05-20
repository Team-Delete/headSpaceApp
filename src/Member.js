import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
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
          <div className="Social">
            <Button variant="link" href={this.props.linkedIn}>LinkedIn</Button></div>
          <div className="Social">
            <Button variant="link" href={this.props.gitHub}>gitHub</Button>
          </div>
        </Card>
      </>
    );
  }
}
export default Member;
