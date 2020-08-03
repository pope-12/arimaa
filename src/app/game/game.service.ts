import { Injectable } from '@angular/core';
import {Rook} from "./pieces/rook";
import {Player} from "./player/player";
import {Pawn} from "./pieces/pawn";
import {Knight} from "./pieces/knight";
import {Bishop} from "./pieces/bishop";
import {Queen} from "./pieces/queen";
import {King} from "./pieces/king";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public readonly players = {
    player1: new Player('Robert', 1),
    player2: new Player('Rachel', 2),
  }
  private board = {
    squares: {}
  }

  constructor() {
    this.board.squares = {
      a: {1: {piece: new Rook(this.players.player1)}, 2: {piece: new Pawn(this.players.player1)}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {piece: new Pawn(this.players.player2)}, 8:{piece: new Rook(this.players.player2)}},
      b: {1: {piece: new Knight(this.players.player1)}, 2: {piece: new Pawn(this.players.player1)}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {piece: new Pawn(this.players.player2)}, 8:{piece: new Knight(this.players.player2)}},
      c: {1: {piece: new Bishop(this.players.player1)}, 2: {piece: new Pawn(this.players.player1)}, 3: {isHole: true}, 4: {}, 5: {}, 6: {isHole: true}, 7: {piece: new Pawn(this.players.player2)}, 8:{piece: new Bishop(this.players.player2)}},
      d: {1: {piece: new Queen(this.players.player1)}, 2: {piece: new Pawn(this.players.player1)}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {piece: new Pawn(this.players.player2)}, 8:{piece: new Queen(this.players.player2)}},
      e: {1: {piece: new King(this.players.player1)}, 2: {piece: new Pawn(this.players.player1)}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {piece: new Pawn(this.players.player2)}, 8:{piece: new King(this.players.player2)}},
      f: {1: {piece: new Bishop(this.players.player1)}, 2: {piece: new Pawn(this.players.player1)}, 3: {isHole: true}, 4: {}, 5: {}, 6: {isHole: true}, 7: {piece: new Pawn(this.players.player2)}, 8:{piece: new Bishop(this.players.player2)}},
      g: {1: {piece: new Knight(this.players.player1)}, 2: {piece: new Pawn(this.players.player1)}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {piece: new Pawn(this.players.player2)}, 8:{piece: new Knight(this.players.player2)}},
      h: {1: {piece: new Rook(this.players.player1)}, 2: {piece: new Pawn(this.players.player1)}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {piece: new Pawn(this.players.player2)}, 8:{piece: new Rook(this.players.player2)}},
    }
  }

  public getSquares() {
    return Object.keys(this.board.squares).map(rowLetter => {
      return Object.keys(this.board.squares[rowLetter]).map(colNumber => {
        return {
          row: rowLetter,
          column: colNumber,
          piece: this.board.squares[rowLetter][colNumber].piece,
          isHole: this.board.squares[rowLetter][colNumber].isHole
        };
      })
    })
  }
}
