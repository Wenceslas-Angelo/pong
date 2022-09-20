class Ball {
  /**
   *
   *@param {Object} game
   */
  constructor(game) {
    this.game = game;
    this.positionX = this.game.width / 2;
    this.positionY = this.game.height / 2;
    this.width = 20;
    this.height = 20;
    this.velocity = 2;
    this.speedX = this.velocity;
    this.speedY = this.velocity;
  }

  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(ctx) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.positionX, this.positionY, this.width, this.height);
  }

  update() {
    if (this.positionX + this.width >= this.game.width || this.positionX <= 0) {
      this.positionX = this.game.width / 2;
      this.positionY = this.game.height / 2;
      this.velocity = 2;
      this.speedX = this.velocity;
      this.speedY = this.velocity;
    }
    if (this.positionY + this.height >= this.game.height) {
      this.speedY = -this.velocity;
    } else if (this.positionY <= 0) {
      this.speedY = this.velocity;
    }
    this.positionX += this.speedX;
    this.positionY += this.speedY;
  }
}

export default Ball;
