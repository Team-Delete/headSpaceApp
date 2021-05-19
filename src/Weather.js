import React from 'react';
import axios from 'axios';
// import { withAuth0, useAuth0 } from '@auth0/auth0-react';
// import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherDay from './WeatherDay';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      weatherData: [],
      searchedYet: false
    };
    console.log('constructor runs');
  }

  componentDidMount() {
    this.getWeatherData();
    console.log('componentDidMount runs');
  }
  
  // part 1

  getWeatherData = async () => {
    try {
      let weatherData = await axios.get(`http://localhost:3002/weather`, {
        params: {
          lat: '47.606',
          lon: '-122.332'
        }
      });
      // console.log('this works', weatherData);
      this.setState({
        weatherData: weatherData.data[0]
      })
    } catch (err) {
      console.log(`error found!!! ${err.message}`);
      this.setState({ error: `${err.message}: ${err.message.data}` });
    }
  }
  

  // part 2

  // handleMoodSubmit = async (event) => {
  //   // event.preventDefault();
  //   try {
  //     this.getJoke();
  //   } catch (err) {
  //     console.log(err);
  //     this.setState({ error: `${err.message}: ${err.message.data}` });
  //   }
  // }


  // part 3

  // handleLogin = async (event) => {
  //   // event.preventDefault();
  //   // try {
  //   //   let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.147c380296b5e463e0f911244af73a5e&q=Seattle&format=json`);
  //   //   let cityTarget = cityData.data[0];
  //   //   this.setState({
  //   //     cityName: cityTarget.display_name,
  //   //     lat: cityTarget.lat,
  //   //     lon: cityTarget.lon,
  //   //     searchedYet: true
  //   //   });
  //     // this.getWeatherData();
  //     console.log(this.state);
  //   // } catch (err) {
  //     // console.log(err);
  //     // this.setState({ error: `${err.message}: ${err.message.data}` });
  //   // }
  // }

  render() {
    return (
      <>
        <WeatherDay weatherData={this.state.weatherData} />
      </>
    )
  }
}

export default Weather;
