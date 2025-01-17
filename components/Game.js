import React from 'react';
import Board from './Board';
import Status from './Status';
import Field from './Field';
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
    ev.preventDefault();
    this.setState({board:this.state.board.fill(null)});
  }

  handleClick (i, ev) {
    ev.preventDefault();
    var player = 'X';
    if (this.state.turn === 'X') {
      player = 'O';
    }
    this.setState(board => {
      const newBoard = [...this.state.board];
      newBoard[i] = this.state.turn;
      return {board:newBoard};
    });
    this.setState({turn:player});
  }

  getWinner () {
    let board = this.state.board;
    let winner = undefined;
    solutions.some(function(combo){
      if(board[combo[0]] !== null && board[combo[0]] === board[combo[1]] &&
        board[combo[1]] === board[combo[2]]){
        winner = board[combo[0]];
      }
    });
    return winner;
  }

  isComplete () {
    return this.state.board.every(x => x === 'X' || x === 'O');
  }

  render () {
    let className = 'game';
    return (
      <div className={className}>
      <Board board={this.state.board} onClick={this.handleClick}/>
      {this.isComplete() ? <Status winner={this.getWinner()} /> : null}
      <button onClick={this.handleReset} className='game__reset'>Reset</button>
      </div>
    );
  }
}
