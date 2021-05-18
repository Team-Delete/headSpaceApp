import React from 'react';

class WeatherDay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      cityData: {},
      weatherData: [],
    }
  }

  render() {
    console.log(this.props.weatherData);
    return (
      <>
        <p>{this.props.weatherData.description}</p>
        <p>{this.props.weatherData.clouds}</p>
        <p>{this.props.weatherData.temp}</p>
      </>
    )
  }
}

export default WeatherDay;
