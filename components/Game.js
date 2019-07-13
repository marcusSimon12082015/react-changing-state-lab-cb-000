import React from 'react';
import Board from './Board';
import Status from './Status';
import solutions from './solutions';

export default class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      board:[null, null, null, null, null, null, null, null, null],
      turn:'X'
    };

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleReset (ev) {
  }

  handleClick (i, ev) {
  }

  getWinner () {
    return this.state.turn;
  }

  isComplete () {

  }

  render () {
    return (
      <div>
      <Board />
      if(this.isComplete){
        <Status winner={this.getWinner}/>
      }
      </div>
    );
  }
}
