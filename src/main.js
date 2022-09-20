import Game from "./js/Game.js";

const canvas = document.getElementById("canvas1");
const context = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 400;

const game = new Game(canvas.width, canvas.height);

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  game.update();
  game.draw(context);

  requestAnimationFrame(animate);
}

animate();
