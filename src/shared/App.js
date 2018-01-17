import React from 'react';
import {
  Switch,
  Route,
  Link,
  withRouter,
} from 'react-router-dom';
import routes from './routes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: this.props.location.pathname,
    }
  }

  render() {
    return (
      <div className="App">
  
        <div className="App-header">
          <div className="App-header-text">
            <h2>Rich Oh</h2>
            <div className="App-header-subtext">
              <p>a software engineer</p>
              <p>in los angeles</p>
            </div>
          </div>
        </div>
  
        <div className="app-body">
  
          <ul className="menu collection">
            <Link to="/"        className={`collection-item${this.state.currentPage === '/' ? ' active' : ''}`}        onClick={() => this.setState({currentPage:'/'})}>Home</Link>
            <Link to="/about"   className={`collection-item${this.state.currentPage === '/about' ? ' active' : ''}`}   onClick={() => this.setState({currentPage:'/about'})}>About</Link>
            <Link to="/ongoing" className={`collection-item${this.state.currentPage === '/ongoing' ? ' active' : ''}`} onClick={() => this.setState({currentPage:'/ongoing'})}>Ongoing</Link>
            <Link to="/lab"     className={`collection-item${this.state.currentPage === '/lab' ? ' active' : ''}`}     onClick={() => this.setState({currentPage:'/lab'})}>Lab</Link>
            <Link to="/contact" className={`collection-item${this.state.currentPage === '/contact' ? ' active' : ''}`} onClick={() => this.setState({currentPage:'/contact'})}>Contact</Link>
          </ul>
  
          <Switch>
            {routes.map((route, i) => <Route key={i} {...route} />)}
          </Switch>
  
        </div>
        
      </div>
    );
  }
}

export default withRouter(App);