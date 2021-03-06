import WeatherService from "./components/WeatherService/WeatherService";
import Authenticate from "./components/Authenticate/Authenticate";
import "./App.scss";
import React, { Component } from "react";

class App extends Component {
  state = { loggedIn: false };

  componentDidMount() {
    if (sessionStorage.getItem("token")) {
      this.setState({ loggedIn: true });
    }
  }

  login = () => {
    this.setState({ loggedIn: true });
  };

  logout = () => {
    this.setState({ loggedIn: false });
  };

  render() {
    return (
      <div className="app">
        <h1 className="app__title">Thinkific Weather Service</h1>
        <h2 className="app__author">By Jacob Hildebrandt</h2>
        {this.state.loggedIn ? (
          <WeatherService logout={this.logout} />
        ) : (
          <Authenticate login={this.login} />
        )}
      </div>
    );
  }
}

export default App;
