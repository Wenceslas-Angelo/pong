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
    this.velocity = 5;
  }

  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(ctx) {
    ctx.fillStyle = "#fff";
    ctx.fillRect(this.positionX, this.positionY, this.width, this.height);
  }
}

export default Paddle;
