import React, { Component } from 'react';
import axios from 'axios';

class JokeList extends Component {
  static defaultProps = {
    getJoke: 10
  };
  async componentDidMount() {
    // Load jokes via axios
    let response = await axios.get("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" }
    });
    console.log(response.data.joke);
  }

  render() {
    return (
      <div>
        <h1>Joke List</h1>
      </div>
    );
  }
}

export default JokeList;