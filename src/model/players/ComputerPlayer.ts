import Player from "../Player";

export default class ComputerPlayer extends Player {
  constructor(whiteSide: boolean) {
    super(whiteSide, false);
  }
}