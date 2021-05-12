import WeatherService from "./components/WeatherService/WeatherService";
import Authenticate from "./components/Authenticate/Authenticate";
import "./App.scss";
import React, { Component } from "react";

class App extends Component {
  state = { loggedIn: false };
  render() {
    return (
      <div className="app">
        <h1 className="app__title">Thinkific Weather Service</h1>
        <h2 className="app__author">By Jacob Hildebrandt</h2>
        {this.state.loggedIn ? <WeatherService /> : <Authenticate />}
      </div>
    );
  }
}

export default App;
