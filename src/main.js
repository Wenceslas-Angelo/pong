import Paddle from "./js/Paddle.js";

const canvas = document.getElementById("canvas1");
const context = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 400;

const paddleUser = new Paddle(10, 10);

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  paddleUser.draw(context);
  requestAnimationFrame(animate);
}

animate();
