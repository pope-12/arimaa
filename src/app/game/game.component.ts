import { Component, OnInit } from '@angular/core';
import {GameService} from "./game.service";
import {Player} from "./player/player";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  public squares;
  public fromSquare;
  public currentPlayer: Player;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.squares = this.gameService.getSquares();
    this.currentPlayer = this.gameService.players.player1;
  }

  public clickSquare(square) {
    if (this.fromSquare) { //now we are trying to move to this square
      const currentPieceAtSquare = square.piece;
      square.piece = this.fromSquare.piece;
      this.fromSquare.piece = currentPieceAtSquare;
      this.fromSquare.activated = false;
      this.fromSquare = null;

      if (square.isHole) { //piece captured
        square.piece.player.lostPieces.push(square.piece);
        console.log(square.piece.player.lostPieces);
        square.piece = null;
      }
    } else if (square.piece) { //we are selecting the from square
      this.fromSquare = square;
      this.fromSquare.activated = true;
    }
  }

  public turnChange() {
    if (this.currentPlayer.number === this.gameService.players.player1.number) {
      this.currentPlayer = this.gameService.players.player2;
    } else if (this.currentPlayer.number === this.gameService.players.player2.number) {
      this.currentPlayer = this.gameService.players.player1;
    }
  }
}
