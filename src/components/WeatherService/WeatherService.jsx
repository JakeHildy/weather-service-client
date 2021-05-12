import React, { Component } from "react";
import axios from "axios";
import "./WeatherService.scss";
import { kelvinToCelsius } from "./../../utils/tempConversion";

export class WeatherService extends Component {
  state = {
    inputCity: "",
    temp: "",
    feelsLike: "",
    description: "",
    icon: "",
    timestamp: "",
    name: "",
    weatherLoaded: false,
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  getWeather = async (e) => {
    e.preventDefault();
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
    const { inputCity } = this.state;

    // Get Weather from backend
    const weather = await axios.get(`${BACKEND_URL}weather?city=${inputCity}`);

    // Extract Relevant Info
    const { temp, feels_like: feelsLike } = weather.data.data.main;
    const { description, icon } = weather.data.data.weather[0];
    const { name, dt: timestamp } = weather.data.data;

    this.setState({
      name,
      temp,
      feelsLike,
      description,
      icon,
      timestamp,
      weatherLoaded: true,
    });
  };

  render() {
    const { name, temp, feelsLike, description, icon, timestamp } = this.state;

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
        {this.state.weatherLoaded && (
          <div className="weather-service__info">
            <h2 className="weather-service__info--city">{`${name}`}</h2>
            <h3 className="weather-service__info--temp">
              {`${kelvinToCelsius(temp)}`}°C
            </h3>
            <p className="weather-service__info--description">{`${description}`}</p>
            <p className="weather-service__info--feels-like">
              Feels Like {`${kelvinToCelsius(feelsLike)}`}
            </p>
            <img
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="clear sky"
              className="weather-service__info--icon"
            />
          </div>
        )}
      </div>
    );
  }
}

export default WeatherService;
