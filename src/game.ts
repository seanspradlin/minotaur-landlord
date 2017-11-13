import BootState from './states/boot';

class Game extends Phaser.Game {
  constructor() {
    const config = {
      antialias: true,
      height: 256,
      renderer: Phaser.AUTO,
      width: 240,
    };
    super(config);
    this.state.add('boot', BootState);
    this.state.start('boot');
  }
}

export default Game;
