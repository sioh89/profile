import React from 'react';
import {
  labRoutes,
  labPairs,
} from './labRoutes.js';
import TicTacToe from './tictactoe/index.js';
import './Lab.css';

class Lab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLab: '',
    }
    this.changeLab = this.changeLab.bind(this);
    this.getLabComponent = this.getLabComponent.bind(this);
  }

  changeLab(lab) {
    this.setState({
      currentLab: lab,
    })
  }

  getLabComponent(Component) {
    if (Component) {
      return <Component />;
    } else {
      return <div>Please select a lab</div>;
    }
  }

  render() {
    return (
      <div className="card horizontal blue-grey darken-1">

        <div className="card-image">
          <div className="collection with-header">
            <h5 className="collection-header">Labs</h5>
            {labRoutes.map((item, i) => {
              return (
                <button
                  key={'labroutes'+i}
                  href=""
                  onClick={() => {this.changeLab(item)}}
                  className={`collection-item${this.state.currentLab === item? ' active' : ''}`}
                >{item}</button>
              );
            })}
          </div>
        </div>

        <div className="card-stacked">
          <div className="card-content white-text">
            <span className="card-title">Lab</span>
            <p>Lab component!</p>
            {this.getLabComponent(labPairs[this.state.currentLab])}
          </div>
        </div>
      </div>
    );
  }
};

export default Lab;