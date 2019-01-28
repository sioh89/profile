import React from 'react';
import s from './App.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import {
  Switch,
  Route,
  Link,
  withRouter,
} from 'react-router-dom';
import routes from './routes';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          {routes.map((route, i) => <Route key={i} {...route} />)}
        </Switch>
      </div>
    );
  }
}

export default withStyles(s)(withRouter(App));
