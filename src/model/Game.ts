import Board from "./Board";
import Move from "./Move";
import Player from "./Player";
import Spot from "./Spot";
import Piece from "./Piece";

export default class Game {
  #players!: Player[];
  #board: Board = new Board();
  #currentTurn!: Player;
  #status: GameStatus = GameStatus.ACTIVE;
  #movesPlayed!: Move[];

  constructor(p1: Player, p2: Player) {
    this.#players = [p1, p2];

    // this.#board.resetBoard();

    if (p1.isWhiteSide()) {
      this.#currentTurn = p1;
    } else {
      this.#currentTurn = p2;
    }

    this.#movesPlayed = [];
  }

  isEnd(): boolean {
    return this.getStatus() != GameStatus.ACTIVE;
  }

  getStatus(): GameStatus {
    return this.#status;
  }

  setStatus(status: GameStatus) {
    this.#status = status;
  }

  playerMove(player: Player, startX: number, startY: number, endX: number, endY: number) {
    const startBox: Spot = this.#board.getBox(startX, startY);
    const endBox: Spot = this.#board.getBox(endX, endY);
    const move: Move = new Move(player, startBox, endBox);
    return this.makeMove(move, player);
  }

  makeMove(move: Move, player: Player) {
    const sourcePiece: Piece = move.getStart().getPiece();
    const destPiece = move.getEnd().getPiece();
    if (!sourcePiece) {
      return false;
    }
    
    // player is valid
    if (player !== this.#currentTurn) {
      return false;
    }

    // player is moving their piece;
    if (sourcePiece.isWhite() != player.isWhiteSide()) {
      return false;
    }

    // move is valid
    if (!sourcePiece.canMove(this.#board, move.getStart(), move.getEnd())) {
      return false;
    }

    if (destPiece !== null) {
      destPiece.setKilled(true);
      // move.setPieceKilled(destPiece);
    }
  }
}

enum GameStatus {
  ACTIVE,
  BLACK_WIN,
  WHITE_WIN,
  FORFEIT,
  STALEMATE,
  RESIGNATION
}