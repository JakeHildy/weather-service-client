import React, { Component } from "react";
import "./WeatherService.scss";

export class WeatherService extends Component {
  state = {
    inputCity: "",
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  getWeather = (e) => {
    e.preventDefault();
    console.log(`Get Weather for ${this.state.inputCity}`);
  };

  render() {
    return (
      <div className="weather-service">
        <form onSubmit={this.getWeather} className="weather-service__form">
          <label htmlFor="input-city">City</label>
          <input
            type="text"
            id="input-city"
            name="inputCity"
            placeholder="Enter City..."
            onChange={this.handleChange}
          />
          <button className="weather-service__submit-button">Go!</button>
        </form>
        <div className="weather-service__info">
          <h2 className="weather-service__info--city">Vancouver</h2>
          <h3 className="weather-service__info--temp">11°C</h3>
          <p className="weather-service__info--description">Light Rain</p>
          <p className="weather-service__info--feels-like">Feels Like 10</p>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="clear sky"
            className="weather-service__info--icon"
          />
        </div>
      </div>
    );
  }
}

export default WeatherService;