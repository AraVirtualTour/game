import Phaser from 'phaser';
import loadImg from '../assets/char1.png'

export default class TestScene extends Phaser.Scene {
  public scaleRatio: number;

  constructor() {
    super({ key: 'TestScene' });
    this.scaleRatio = window.devicePixelRatio / 3;
  }

  preload() {
    this.load.image('character', loadImg);
  }

  create() {
    this.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'character');
  }
}