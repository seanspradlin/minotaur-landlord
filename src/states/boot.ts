class BootState extends Phaser.State {
  public preload() {
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.stage.backgroundColor = 0x88c070;
  }

  public create() {
    this.game.scale.maxWidth = this.game.width;
    this.game.scale.maxHeight = this.game.height;
    this.game.stage.smoothed = false;
  }
}

export default BootState;
