import Player from "../Player";

export default class HumanPlayer extends Player {
  constructor(whiteSide: boolean) {
    super(whiteSide, true);
  }
}