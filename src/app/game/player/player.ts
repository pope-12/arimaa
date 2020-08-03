import {Piece} from "../pieces/piece";

export class Player {
  public readonly name: string;
  public readonly number: number;
  public readonly lostPieces: Piece[] = [];

  constructor(name: string, number: number) {
    this.name = name;
    this.number = number;
  }
}
