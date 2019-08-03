import React from 'react';
import './App.css';
import Scoreboard from './Scoreboard.js';
import Gameboard from './Gameboard.js';
import images from './images';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosen: [],
      message: ""
    };
  }

  shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  onClick = (e) => {
    let tgt = e.target.getAttribute('data-img');
    if (this.state.chosen.includes(tgt)) {
      this.gameOver();
    } else {
      this.setState({
        chosen: [...this.state.chosen, tgt],
        message: ""
      }, () => {
        if (this.state.chosen.length >= 9) {
          this.win();
        }
      })
    }
    this.shuffle(images);
  }

  gameOver = () => {
    this.setState({
      chosen: [],
      message: "game over"
    })
  }

  win = () => {
    this.setState({
      chosen: [],
      message: "! You Win !"
    })
  }

  render() {
    return (
      <div className="App" >
        <Scoreboard state={this.state} />
        <Gameboard images={images} action={this.onClick} />
      </div>
    );
  }
}
