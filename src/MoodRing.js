import React, { Component } from 'react';
import './MoodRing.css';
import  Button from 'react-bootstrap';

class MoodRing extends React.Component {

  const Button = (props) => {
    const [color, setColors] = React.useState("");
    const [active, setActive] = React.useState(false);
    const handleClickButton = (name) => {
      setActive(true);
      setColors(name);
      if (active === true) {
        setActive(false);
        setColors("button");
      }
    };
  
    console.log(active);
    return (
      <button
        className={`button ${color}`}
        onClick={() => handleClickButton(props.name)}
      >
        {props.name}
      </button>
    );
  };
  
  const App = () => {
    const [names, setNames] = React.useState([
      "Red",
      "Orange",
      "Yellow",
      "Green",
      "Blue",
      "Pink",
      "Purple",
      "Brown",
      "Black",
      "White",
    ]);
  
    return (
      <div className="container">
        {names.map((name) => (
          <Button key={name} name={name} />
        ))}
      </div>
    );
  };
}  
// ReactDOM.render(<MoodRing />, document.querySelector("#root"));

export default MoodRing;
