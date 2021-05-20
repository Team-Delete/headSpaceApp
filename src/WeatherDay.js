import React from 'react';

class WeatherDay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      cityData: {},
      weatherData: [],
    };
  }

  render() {
    console.log(this.props.weatherData);
    return (
      <>
        <h4>Today in Seattle: {this.props.weatherData.temp}, {this.props.weatherData.description}</h4>
      </>
    );
  }
}

export default WeatherDay;
