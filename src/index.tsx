import * as React from 'react';
import * as DOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route 
} from 'react-router-dom';

import Game from './game'

import './index.css';


export default class App extends React.Component<any, any> {
  public render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Route path='/'>
          <Game />
        </Route>
      </Router>
    );
  }
}

DOM.render(<App />, document.getElementById('root'));
