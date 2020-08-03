import {Player} from "../player/player";

export abstract class Piece {
  public abstract readonly name: string;
  public readonly fillColor: string;
  public readonly outlineColor: string;

  constructor(public readonly player: Player) {
    if (this.player.number === 2) {
      this.fillColor = '#abe7ec';
      this.outlineColor = '#1a279e';
    } else if (this.player.number === 1) {
      this.fillColor = '#ffffff';
      this.outlineColor = '#ba1414';
    }
  }
}
