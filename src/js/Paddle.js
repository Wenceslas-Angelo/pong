class Paddle {
  /**
   *
   * @param {number} positionX
   * @param {number} positionY
   */
  constructor(positionX, positionY) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.width = 10;
    this.height = 100;
    this.velocity = 0;
  }

  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(ctx) {
    ctx.fillStyle = "#fff";
    ctx.fillRect(this.positionX, this.positionY, this.width, this.height);
  }

  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} canvasHeight
   */
  update(ctx, canvasHeight) {
    this.draw(ctx);
    const newPositionY = this.positionY + this.velocity;
    if (newPositionY > 0 && newPositionY + this.height < canvasHeight)
      this.positionY += this.velocity;
  }
}

export default Paddle;
