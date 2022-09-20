class Paddle {
  /**
   *
   * @param {Object} game
   * @param {Number} positionX
   * @param {Number} positionY
   */
  constructor(game, positionX, positionY) {
    this.game = game;
    this.positionX = positionX;
    this.positionY = positionY;
    this.width = 10;
    this.height = 100;
    this.velocity = 0;
    this.speed = 5;
  }

  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(ctx) {
    ctx.fillStyle = "#fff";
    ctx.fillRect(this.positionX, this.positionY, this.width, this.height);
  }

  update() {
    const newPositionY = this.positionY + this.velocity;
    if (newPositionY > 0 && newPositionY + this.height < this.game.height)
      this.positionY += this.velocity;
  }
}

export default Paddle;
