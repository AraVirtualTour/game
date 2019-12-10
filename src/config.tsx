import Phaser from 'phaser';
import TestScene from './scenes/testScene'

export const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.CANVAS,
  parent: 'root',
  width: window.innerWidth * window.devicePixelRatio,
  height: window.innerHeight * window.devicePixelRatio,
  scale: {
      mode: Phaser.Scale.NONE,
      autoCenter: Phaser.Scale.NO_CENTER
  },

  scene: TestScene,

  seed: [ (Date.now() * Math.random()).toString() ],

  title: '',
  url: 'https://phaser.io',
  version: '',

  input: {
      keyboard: {
          target: window
      },
      mouse: {
          target: null,
          capture: true
      },
      activePointers: 1,
      touch: {
          target: null,
          capture: true
      },
      smoothFactor: 0,
      gamepad: false,
      windowEvents: true,
  },
  disableContextMenu: false,

  backgroundColor: '#909090',

  render: {
      antialias: true,
      antialiasGL: true,
      pixelArt: false,
      roundPixels: false,
      transparent: false,
      clearBeforeRender: true,
      premultipliedAlpha: true,
      failIfMajorPerformanceCaveat: false,
      powerPreference: 'default', // 'high-performance', 'low-power' or 'default'
      batchSize: 2000,
      desynchronized: false,
  },

  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 400 }
    }
  },

  loader: {
      baseURL: '',
      path: '',
      maxParallelDownloads: 4,
      crossOrigin: undefined,
      responseType: '',
      async: true,
      user: '',
      password: '',
      timeout: 0
  },

  dom: {
      createContainer: false,
      behindCanvas: false,
  },

  fps: {
      min: 10,
      target: 60,
      forceSetTimeOut: false,
      deltaHistory: 10
  },

  banner: {
      hidePhaser: false,
      text: '#ffffff',
      background: [
          '#ff0000',
          '#ffff00',
          '#00ff00',
          '#00ffff',
          '#000000'
      ]
  }
}