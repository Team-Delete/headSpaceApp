import React from 'react';
import './aboutUs.css';
import NavBar from './Profile';
import Member from './Member';
import CardDeck from 'react-bootstrap/CardDeck';

class AboutUs extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <h1 className="title">About us</h1>
        <CardDeck>
          <Member
            name="Adrian Milsap"
            imgSrc="adrian.png"
            bio="Software engineer with a UX Design background. Super nerd looking for full-time work."
            linkedIn="https://www.linkedin.com/in/adrianmilsap/"
            gitHub="https://github.com/hirobius"
          />
          <Member
            name="Anthony Williams"
            imgSrc="anthony.jpg"
            bio="Student at CodeFellows, Software Development, Systems Administrator, Red Hat Linux Administrator, DoD Contractor, Software Developer."
            linkedIn="https://www.linkedin.com/in/anthonyjwilliams15/"
            gitHub="https://github.com/Williamsjanthony15"
          />
          <Member
            name="Kassie Bradshaw"
            imgSrc="kassie.jpg"
            bio="Emergent software developer specializing in Python."
            linkedIn="https://www.linkedin.com/in/kassie-bradshaw-2021"
            gitHub="https://github.com/kassiebradshaw"
          />
          <Member
            name="Kevin Henry"
            imgSrc="kevin.jpg"
            bio="I'm a Developer with a passion for solving problems for people. I've been in people operations for the last few years and I'm looking to make a shift into a more technical role with a larger impact. I want to help build something that empowers people around the world."
            linkedIn="http://linkedin.com/in/skhenry"
            gitHub="https://github.com/kevinhenry"
          />
        </CardDeck>
      </>
    );
  }
}
export default AboutUs;
