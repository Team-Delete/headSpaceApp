import React from 'react';
import axios from 'axios';
import WeatherDay from './WeatherDay';

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

  getWeatherData = async () => {
    try {
      let weatherData = await axios.get(`http://localhost:3002/weather`, {
        params: {
          lat: '47.606',
          lon: '-122.332'
        }
      });
      this.setState({
        weatherData: weatherData.data[0]
      })
    } catch (err) {
      console.log(`error found!!! ${err.message}`);
      this.setState({ error: `${err.message}: ${err.message.data}` });
    }
  }

  render() {
    return (
      <>
        <WeatherDay weatherData={this.state.weatherData} />
      </>
    )
  }
}

export default Weather;
