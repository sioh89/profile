import React from 'react';
import $ from 'jquery';
import './Board.css';

import oIcon from './assets/o.png';
import xIcon from './assets/x.png';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      values: new Array(9),
      count: 0,
      winner: 'none',
      current: 'x',
    }
  }

  handleClick(e) {
    e.preventDefault();

    console.log('clicked')
    
    if (this.state.count < 9) {
      console.log('this.state.count < 9')
      const square = parseInt($(e.currentTarget).attr('value'));

      console.log('this.state.values[square]', this.state.values[square]);
      if (this.state.values[square] === undefined) {
        console.log('this.state.values[square] === undefined')
        this.placePiece(square);
      }
    }
  }

  placePiece(num) {
    const update = this.state.values.slice();
    update[num] = this.state.current;

    this.setState({
      values: update,
      count: this.state.count + 1,
    })

    this.changePlayer();
  }

  changePlayer() {
    const other = {
      'x': 'o',
      'o': 'x',
    };

    this.setState({
      current: other[this.state.current],
    });
  }

  resetGame() {
    this.setState({
      values: new Array(9),
      count: 0,
      winner: 'none',
      current: 'x',
    });
  }

  render() {
    return (
      <div className="ttt-board">

        <div className="current">
          {`Current player is: ${this.state.current}`}
        </div>

        <button onClick={this.resetGame.bind(this)}>
          Reset
        </button>

        <div className="ttt-row ttt-row-1">
          {this.state.values[0] === undefined ? <div className="ttt-col ttt-col-1" value="0" onClick={this.handleClick.bind(this)}></div> : <img className={`ttt-col ttt-col-1 ${this.state.values[0]}`} src={this.state.values[0] === 'x' ? xIcon : oIcon}/>}
          {this.state.values[1] === undefined ? <div className="ttt-col ttt-col-2" value="1" onClick={this.handleClick.bind(this)}></div> : <img className={`ttt-col ttt-col-2 ${this.state.values[1]}`} src={this.state.values[1] === 'x' ? xIcon : oIcon}/>}
          {this.state.values[2] === undefined ? <div className="ttt-col ttt-col-3" value="2" onClick={this.handleClick.bind(this)}></div> : <img className={`ttt-col ttt-col-3 ${this.state.values[2]}`} src={this.state.values[2] === 'x' ? xIcon : oIcon}/>}
        </div>

        <div className="ttt-row ttt-row-2">
          {this.state.values[3] === undefined ? <div className="ttt-col ttt-col-1" value="3" onClick={this.handleClick.bind(this)}></div> : <img className={`ttt-col ttt-col-1 ${this.state.values[3]}`} src={this.state.values[3] === 'x' ? xIcon : oIcon}/>}
          {this.state.values[4] === undefined ? <div className="ttt-col ttt-col-2" value="4" onClick={this.handleClick.bind(this)}></div> : <img className={`ttt-col ttt-col-2 ${this.state.values[4]}`} src={this.state.values[4] === 'x' ? xIcon : oIcon}/>}
          {this.state.values[5] === undefined ? <div className="ttt-col ttt-col-3" value="5" onClick={this.handleClick.bind(this)}></div> : <img className={`ttt-col ttt-col-3 ${this.state.values[5]}`} src={this.state.values[5] === 'x' ? xIcon : oIcon}/>}
        </div>

        <div className="ttt-row ttt-row-3">
          {this.state.values[6] === undefined ? <div className="ttt-col ttt-col-1" value="6" onClick={this.handleClick.bind(this)}></div> : <img className={`ttt-col ttt-col-1 ${this.state.values[6]}`} src={this.state.values[6] === 'x' ? xIcon : oIcon}/>}
          {this.state.values[7] === undefined ? <div className="ttt-col ttt-col-2" value="7" onClick={this.handleClick.bind(this)}></div> : <img className={`ttt-col ttt-col-2 ${this.state.values[7]}`} src={this.state.values[7] === 'x' ? xIcon : oIcon}/>}
          {this.state.values[8] === undefined ? <div className="ttt-col ttt-col-3" value="8" onClick={this.handleClick.bind(this)}></div> : <img className={`ttt-col ttt-col-3 ${this.state.values[8]}`} src={this.state.values[8] === 'x' ? xIcon : oIcon}/>}
        </div>

      </div>
    );
  }
}

export default Board;