import React, { Component } from 'react';
import './MoodRing.css';

class MoodRing extends Component {

const bgChange (id) => {
  document.body.style.background = document.getElementById(id).innerHTML;
}

render() {
  return (
    <div>
      <head>
        <title>MoodRing</title>
      </head>
      <body>
        <div>
          <a onClick="bgChange(id)" id="a">#e74c3c</a>
          <a onClick="bgChange(id)" id="b">#e67e22</a>
          <a onClick="bgChange(id)" id="c">#f1c40f</a>
          <a onClick="bgChange(id)" id="d">#2ecc71</a>
          <a onClick="bgChange(id)" id="e">#3498db</a>
          <a onClick="bgChange(id)" id="f">#fd79a8</a>
          <a onClick="bgChange(id)" id="g">#8e44ad</a>
          <a onClick="bgChange(id)" id="h">#964B00</a>
          <a onClick="bgChange(id)" id="i">#2d3436</a>
          <a onClick="bgChange(id)" id="j">#ffffff</a>
        </div>
      </body>
    </div>
  );
}
}

export default MoodRing;
