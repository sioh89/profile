import React from 'react';
import TicTacToe from './tictactoe/index.js';

class Lab extends React.Component {
  render() {
    return (
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Lab</span>
          <p>Lab component!</p>
          <TicTacToe />
        </div>
      </div>
    );
  }
};

export default Lab;