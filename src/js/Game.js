import Paddle from "./Paddle.js";
import Ball from "./Ball.js";
import InputHandler from "./InputHandler.js";

class Game {
  constructor(canvasWidth, canvasHeight) {
    this.width = canvasWidth;
    this.height = canvasHeight;
    this.paddleUser = new Paddle(this, 10, this.height / 2);
    this.paddleComp = new Paddle(this, this.width - 20, this.height / 2);
    this.ball = new Ball(this);
    this.inputHandler = new InputHandler(this);

    this.userScoreTxt = document.querySelector(".score__user");
    this.computerScoreTxt = document.querySelector(".score__computer");

    this.userScore = 0;
    this.compScore = 0;
  }

  update() {
    // Move paddle user
    if (this.inputHandler.key.upIsPressed) {
      this.paddleUser.velocity = -this.paddleUser.speed;
    } else if (this.inputHandler.key.downIsPressed) {
      this.paddleUser.velocity = this.paddleUser.speed;
    } else {
      this.paddleUser.velocity = 0;
    }
    this.paddleUser.update();

    // Move paddle computer
    const ballCenterY = this.ball.positionY + this.ball.height / 2;
    const paddleCompCenterY =
      this.paddleComp.positionY + this.paddleComp.height / 2;
    if (ballCenterY > paddleCompCenterY) {
      this.paddleComp.velocity = 5;
    } else if (ballCenterY < paddleCompCenterY) {
      this.paddleComp.velocity = -5;
    }

    if (this.ball.positionX >= this.width / 2 && this.ball.speedX > 0) {
      this.paddleComp.update();
    } else {
      this.paddleComp.velocity = 0;
    }

    // Move ball
    // Check collision
    if (Game.checkCollision(this.ball, this.paddleComp)) {
      this.ball.speedX = -this.ball.velocity;
      this.ball.velocity += 1;
    } else if (Game.checkCollision(this.ball, this.paddleUser)) {
      this.ball.speedX = this.ball.velocity;
      this.ball.velocity += 1;
    }
    this.ball.update();

    // lose condition
    if (this.ball.positionX + this.ball.width >= this.width) {
      this.userScore += 1;
      this.userScoreTxt.innerHTML = this.userScore;
    } else if (this.ball.positionX <= 0) {
      this.compScore += 1;
      this.computerScoreTxt.innerHTML = this.compScore;
    }
  }

  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(ctx) {
    this.paddleUser.draw(ctx);
    this.paddleComp.draw(ctx);
    this.ball.draw(ctx);
  }

  /**
   *
   * @param {{positionX:number, positionY:number, width: number, height: number}} rect1
   * @param {{positionX:number, positionY:number, width: number, height: number}} rect2
   * @returns Boolean
   */
  static checkCollision(rect1, rect2) {
    const collideXOne = rect1.positionX < rect2.positionX + rect2.width;
    const collideXTwo = rect1.positionX + rect1.width > rect2.positionX;
    const collideYOne = rect1.positionY < rect2.positionY + rect2.height;
    const collideYTwo = rect1.height + rect1.positionY > rect2.positionY;
    const rectIsCollide =
      collideXOne && collideXTwo && collideYOne && collideYTwo;
    return rectIsCollide;
  }
}

export default Game;
