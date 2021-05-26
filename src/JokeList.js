import React, { Component } from 'react';
import axios from 'axios';

class JokeList extends Component {
  static defaultProps = {
    getJoke: 10
  };
  /** initalize state */
  constructor(props) {
    super(props);
    this.state = { jokes: [] };
  }

  async componentDidMount() {
    // Load jokes via axios | want json format not html
    let jokes = [];
    while (jokes.length < this.props.getJoke) {
      let response = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" }
      });
      jokes.push(response.data.joke)
    }
    this.setState({ jokes: jokes });
    //console.log(jokes);
  }

  render() {
    return (
      <div className='JokeList'>
        <h1>Joke List</h1>
        <div className='JokeList-jokes'>
          {this.state.jokes.map(j => (
            <div>{j}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default JokeList;