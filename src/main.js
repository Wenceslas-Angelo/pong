import Paddle from "./js/Paddle.js";
import Ball from "./js/Ball.js";

const canvas = document.getElementById("canvas1");
const context = canvas.getContext("2d");

let speed = 5;
let key = {
  upIsPressed: false,
  downIsPressed: false,
};

canvas.width = 800;
canvas.height = 400;

const paddleUser = new Paddle(10, 10);
const paddleComp = new Paddle(canvas.width - 20, 10);
const ball = new Ball(canvas.width / 2, canvas.height / 2);

//Move paddle user
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      key.upIsPressed = true;
      break;
    case "ArrowDown":
      key.downIsPressed = true;
      // paddleUser.velocity = speed;
      break;
  }
});

document.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "ArrowUp":
      key.upIsPressed = false;
      break;
    case "ArrowDown":
      key.downIsPressed = false;
      break;
  }
});

const paddleCompUpdate = () => {
  const ballCenterY = ball.positionY + ball.height / 2;
  const paddleCompCenterY = paddleComp.positionY + paddleComp.height / 2;
  if (ballCenterY > paddleCompCenterY) {
    paddleComp.velocity = 5;
  } else if (ballCenterY < paddleCompCenterY) {
    paddleComp.velocity = -5;
  }
};

/**
 *
 * @param {{positionX:number, positionY:number, width: number, height: number}} rect1
 * @param {{positionX:number, positionY:number, width: number, height: number}} rect2
 * @returns Boolean
 */
function checkCollision(rect1, rect2) {
  const collideXOne = rect1.positionX < rect2.positionX + rect2.width;
  const collideXTwo = rect1.positionX + rect1.width > rect2.positionX;
  const collideYOne = rect1.positionY < rect2.positionY + rect2.height;
  const collideYTwo = rect1.height + rect1.positionY > rect2.positionY;
  const rectIsCollide =
    collideXOne && collideXTwo && collideYOne && collideYTwo;
  return rectIsCollide;
}

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  paddleUser.update(context, canvas.height);
  paddleComp.update(context, canvas.height);
  ball.update(context, canvas.width, canvas.height);
  paddleCompUpdate();

  // Move paddle user
  if (key.upIsPressed) {
    paddleUser.velocity = -speed;
  } else if (key.downIsPressed) {
    paddleUser.velocity = speed;
  } else {
    paddleUser.velocity = 0;
  }

  // Check collision
  if (checkCollision(ball, paddleComp)) {
    ball.speedX = -ball.velocity;
  } else if (checkCollision(ball, paddleUser)) {
    ball.speedX = ball.velocity;
  }
  requestAnimationFrame(animate);
}

animate();
