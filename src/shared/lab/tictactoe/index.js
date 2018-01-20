import React from 'react';
import renderHTML from 'react-render-html';

import Board from './utils/Board';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.board = new Board();
  }

  render() {
    return (
      <div>
        <p>tic tac toe goes here</p>
        <Board />
      </div>
    );
  }
}

export default TicTacToe;