import Piece from "./Piece";
import Player from "./Player";
import Spot from "./Spot";


export default class Move {
  #player!: Player;
  #start!: Spot;
  #end!: Spot;
  #pieceMoved!: Piece;
  #pieceKilled: Piece | null = null;
  #castlingMove: boolean = false;

  constructor(player: Player, start: Spot, end: Spot) {
    this.#player = player;
    this.#start = start;
    this.#end = end;
    this.#pieceMoved = start.getPiece();
  }

  isCastlingMove(): boolean {
    return this.#castlingMove;
  }

  setCastlingMove(castlingMove: boolean) {
    return this.#castlingMove = castlingMove;
  }

  getStart(): Spot {
    return this.#start;
  }

  getEnd(): Spot {
    return this.#end;
  }

  setPieceKilled() {
    
  }
}