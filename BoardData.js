// class that contain all the pieces
class BoardData {
  constructor(pieces) {
    this.pieces = pieces;
    this.currentTurn = DARK_PLAYER;
    this.win = undefined;
  }

  // Returns piece in row, col, or undefined if not exists
  getPiece(row, col) {
    for (const piece of this.pieces) {
      if (piece.row === row && piece.col === col) {
        return piece;
      }
    }
    return undefined;
  }

  removePiece(row, col) {
    for (let i = 0; i < this.pieces.length; i++) {
      let piece = this.pieces[i];
      if (piece.row === row && piece.col === col) {
        if (piece.type === "king") {
          this.win = this.currentTurn;
        }
        // Remove piece at index i
        this.pieces.splice(i, 1);
      }
    }
  }

  // isEmpty(row, col) {
  //   return this.getPiece(row, col) === undefined;
  // }

  isPlayer(row, col, player) {
    const piece = this.getPiece(row, col);
    return piece !== undefined && piece.player === player;
  }

  opposite() {
    if (this.currentTurn === DARK_PLAYER)
      this.currentTurn = WHITE_PLAYER;
    else
      this.currentTurn = DARK_PLAYER;
  }
}