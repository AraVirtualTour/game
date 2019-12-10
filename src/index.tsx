import * as React from 'react';
import * as DOM from 'react-dom';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route 
// } from 'react-router-dom';

import Game from './game'

import './index.css';


export default class App extends React.Component<any, any> {
  public render() {
    return (
      <Game />
    );
  }
}

DOM.render(<App />, document.getElementById('root'));
