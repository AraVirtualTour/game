import React from 'react';
import Phaser from 'phaser';

import { config } from './config';

export default class Game extends React.Component<any, any> {
  public game: Phaser.Game;
  
  constructor(props: any) {
    super(props);
    this.game = new Phaser.Game(config);
  }

  public render() {
    return (
      <div className='App' />
    );
  }
}
