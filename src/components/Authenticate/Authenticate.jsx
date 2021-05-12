import React, { Component } from "react";
import axios from "axios";
import "./Authenticate.scss";
import ErrorMessage from "./../ErrorMessage/ErrorMessage";

export class Authenticate extends Component {
  state = {
    input: "",
    inputError: "",
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  attemptLogin = async (e) => {
    e.preventDefault();
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
    const { input } = this.state;

    // Ensure Code field isn't left empty
    if (input === "") {
      this.setState({ inputError: "Please Enter code" });
      return;
    }

    // Log into backend
    try {
      const token = await axios.get(`${BACKEND_URL}login`);
    } catch (err) {
      console.log(`💣 === ERROR LOGGING IN === 💣`, err);
      this.setState({ inputError: "Incorrect Credentials (its 'thinkific')" });
    }
  };

  render() {
    const { inputError } = this.state;
    return (
      <div className="authenticate">
        <form onSubmit={this.attemptLogin} className="authenticate__form">
          <label className="authenticate__form--label" htmlFor="input">
            Access Phrase
          </label>
          <div className="authenticate__form--cta">
            <input
              className="authenticate__form--input"
              type="text"
              id="input"
              name="input"
              placeholder="Enter access phrase..."
              onChange={this.handleChange}
            />
            <button className="authenticate__form--button">Enter</button>
          </div>
          {inputError && <ErrorMessage errorText={inputError} />}
        </form>
      </div>
    );
  }
}

export default Authenticate;
