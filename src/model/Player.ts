export default abstract class Player {
  whiteSide!: boolean;
  humanPlayer!: boolean;

  constructor(whiteSide: boolean, humanPlayer: boolean) {
    this.whiteSide = whiteSide;
    this.humanPlayer = humanPlayer;
  }

  isWhiteSide(): boolean {
    return this.whiteSide;
  }

  isHumanPlayer(): boolean {
    return this.humanPlayer;
  }
}