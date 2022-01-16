import Spot from "./Spot";

export default class Board {
  #boxes!: [[Spot]];
  
  constructor() {
    this.resetBoard();
  }

  getBox(x: number, y: number): Spot {
    if (x < 0 || x > 7 || y < 0 || y > 7) {
      throw new Error('Index out of bound');
    }

    return this.#boxes[x][y];
  }

  resetBoard() {
    // TODO: Board setup
  }
}