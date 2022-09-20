class Ball {
  /**
   *
   * @param {number} X
   *@param {number} Y
   */
  constructor(X, Y) {
    this.positionX = X;
    this.positionY = Y;
    this.width = 20;
    this.height = 20;
    this.velocity = 5;
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

  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} canvasWidth
   * @param {number} canvasHeight
   */
  update(ctx, canvasWidth, canvasHeight) {
    this.draw(ctx);
    if (this.positionX + this.width >= canvasWidth) {
      this.speedX = -this.velocity;
    } else if (this.positionX <= 0) {
      this.speedX = this.velocity;
    }
    if (this.positionY + this.height >= canvasHeight) {
      this.speedY = -this.velocity;
    } else if (this.positionY <= 0) {
      this.speedY = this.velocity;
    }
    this.positionX += this.speedX;
    this.positionY += this.speedY;
  }
}

export default Ball;
