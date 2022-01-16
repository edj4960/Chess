import Board from './Board';
import Spot from './Spot';

export default abstract class Piece {
  #killed: boolean = false;
  #white: boolean = false;

  constructor(white: boolean) {
    this.#white = white;
  }
  
  isWhite(): boolean {
    return this.#white;
  }

  setWhite(white: boolean) {
    this.#white = white;
  }

  isKilled(): boolean {
    return this.#killed;
  }

  setKilled(killed: boolean) {
    this.#killed = killed;
  }

  abstract canMove(Board: Board, start: Spot, end: Spot): boolean;
}