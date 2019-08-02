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
      console.log('game over');
      this.gameOver();
    } else {
      this.setState({
        chosen: [...this.state.chosen, tgt],
        message: ""
      })
    }
    this.shuffle(images);
    console.log(this.state.chosen);


  }

  gameOver = () => {
    this.setState({
      chosen: [],
      message: "game over"
    })
    this.shuffle(images);
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
