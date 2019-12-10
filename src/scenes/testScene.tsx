import Phaser from 'phaser';
import loadImg from '../assets/logo.png'

export default class TestScene extends Phaser.Scene {
  public scaleRatio: number;

  constructor() {
    super({ key: 'TestScene' });
    this.scaleRatio = window.devicePixelRatio / 3;
  }

  preload() {
    this.load.image('phaser-logo', loadImg);
  }

  create() {
    this.add.sprite(this.game.canvas.width / 2, this.game.canvas.height / 2, 'phaser-logo');
  }
}