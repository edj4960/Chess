import Board from '../Board';
import Piece from '../Piece';
import Spot from '../Spot';

export default class Knight extends Piece {

  canMove(_Board: Board, start: Spot, end: Spot): boolean {
    if (end.getPiece()?.isWhite() == this.isWhite()) {
      return false;
    }

    const x: number = Math.abs(start.getX() - end.getX());
    const y: number = Math.abs(start.getY() - end.getY());
    return x * y == 2;
  }
}