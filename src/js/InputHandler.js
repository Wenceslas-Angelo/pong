class InputHandler {
  /**
   *
   * @param {Object} game
   */
  constructor(game) {
    this.game = game;

    this.key = {
      upIsPressed: false,
      downIsPressed: false,
    };

    window.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowUp":
          this.key.upIsPressed = true;
          break;
        case "ArrowDown":
          this.key.downIsPressed = true;
          break;
      }
    });

    window.addEventListener("keyup", (event) => {
      switch (event.key) {
        case "ArrowUp":
          this.key.upIsPressed = false;
          break;
        case "ArrowDown":
          this.key.downIsPressed = false;
          break;
      }
    });
  }
}

export default InputHandler;
