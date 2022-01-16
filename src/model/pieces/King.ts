import Board from '../Board';
import Piece from '../Piece';
import Spot from '../Spot';

export default class King extends Piece {
  #castlingDone: boolean = false;

  isCastlingDone(): boolean {
    return this.#castlingDone;
  }

  setCastlingDone(castlingDone: boolean) {
    this.#castlingDone = castlingDone;
  }

  canMove(board: Board, start: Spot, end: Spot): boolean {
    if (end.getPiece()?.isWhite() == this.isWhite()) {
      return false;
    }

    const x = Math.abs(start.getX() - end.getX());
    const y = Math.abs(start.getY() - end.getY());
    if (x + y === 1) {
      // TODO: check if this move will not result in the king
      // being attacked if so return true
      return true;
    }

    return this.isValidCastling(board, start, end);
  }

  isValidCastling(board: Board, start: Spot, end: Spot): boolean {
    if (this.isCastlingDone()) {
      return false;
    }

    // TODO: Logic for returning true or false
    return false;
  }

  isCastlingMove(start: Spot, end: Spot): boolean {
    // TODO: check if the starting and
    // ending position are correct
    return false;
  }
}