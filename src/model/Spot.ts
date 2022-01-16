import Piece from './Piece';

export default class Spot {
  #piece!: Piece;
  #x!: number;
  #y!: number;

  constuctor(x: number, y: number, piece: Piece) {
    this.setPiece(piece);
    this.#x = x;
    this.#y = y;
  }

  getPiece(): Piece {
    return this.#piece;
  }

  setPiece(piece: Piece) {
    this.#piece = piece;
  }

  getX(): number {
    return this.#x;
  }

  setX(x: number) {
    this.#x = x;
  }

  getY(): number {
    return this.#y;
  }

  setY(y: number) {
    this.#y = y;
  }
}