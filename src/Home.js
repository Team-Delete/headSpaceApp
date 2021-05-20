import React, { Component } from 'react';
import Quote from './Quote';
import Button from 'react-bootstrap/Button';
import './App.css';
import './Home.css';
// import './MoodRing.css';
// import MoodRing from './MoodRing';
// import NavBar from './NavBar';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      // color: 'Blue',
      // color: 'Red',
      // color: 'Green',
      button: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState({
      color:!this.state.color
    });
  }
  // changeBodyBg(color){
  //   document.body.style.background = color;
  // }
  // const backgroundColor = () => {
  //   const [color, setColors] = this.state.color({
  //     'Yellow',
  //     'Blue',
  //     'Green',
  // componentDidMount() {
  //   this.setState({
  //     color: color['green'],
  //   )};
  // )
  // getBackground = () => {
  //   this.state.color = 'green';
  // }
  //   })
  // }
  // const changeBgColor = () =>{
  // return document.body.style.backgroundColor = color;
  // }
  // <button type="button" onClick={changeBgColor('red')}>Mad</button>
  render() {
    console.log('Home Render Works');
    return (
      // <div className="container">
      <div>
        {/* <div className = {this.state.color}> */}
        <Button id='happy' type="button" className ="btn btn-happpy">Happy</Button>
        <Button id='sad' type="button" className ="btn btn-sad">Sad</Button>
        {/* <Button color='Yellow' className = "bgchange" onClick={this.state.color(`id="a"`)}>Happy</Button> */}
        <Button className={this.state.button ? 'buttonTrue': 'buttonFalse'} onClick={this.handleClick}>Excited</Button>
        {/* <Button id='excited' type="button" className ="btn btn-excited">Excited</Button> */}
        <Button id='Angry' type="button" className ="btn btn-angry">Angry</Button>
        <Button id='Meh' type="button" className ="btn btn-meh">Meh</Button>
        {/* <button type='button' class='Red'>Red</button> */}
        {/* <button className={`button ${color}`} onClick={() document.body.body=> handleClickButton(props.name)}></button> */}
        {/* <h1>headSpace</h1> */}
        <Quote />
        {/* <MoodRing /> */}
        {/* <NavBar /> */}

        <a rel="nofollow" href="https://HeadSpaceApp.netlify.app"><img src="https://chart.googleapis.com/chart?cht=qr&chl=http%3A%2F%2FHeadSpaceApp.netlify.app&chs=180x180&choe=UTF-8&chld=L|2" alt="Login Here" /> </a>
      </div>
    );
  }
}

export default Home;
