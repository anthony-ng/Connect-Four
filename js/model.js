function Game(existingGameId) {
  this.id = existingGameId;
  if(!this.id){
    this.id = Math.floor(Math.random() * 10000000);
  }
  this.whoseTurn = "red";
  this.board = [[], [], [], [], [], [], []];
  this.hasWinner = false;
  this.moves = [];
}

Game.prototype.validMove = function(columnIndex) {
  if (this.board[columnIndex].length < 6) {
    return true;
  } else {
    return false;
  }
}

Game.prototype.insertToken = function(columnIndex) {
  this.board[columnIndex].push(this.whoseTurn);
  var inserted = {color: this.whoseTurn, row: (this.board[columnIndex].length - 1), col: columnIndex};
  this.moves.push(inserted);
  return inserted;
}

Game.prototype.checkHorizontal = function() {
  var redSeries = blackSeries = 0,
      lastFound = null;

  for (var row = 0; row < 6; row++) {

    for (var column = 0; column < 7; column++) {

      switch(this.board[column][row]){
        case 'black':
          blackSeries += 1;
          lastFound = 'black';
          break;

        case 'red':
          redSeries += 1;
          lastFound = 'red';
          break;

        case undefined:
          lastFound = 'undefined';
          blackSeries = redSeries = 0;
          break;
        default:
      }

      if (blackSeries == 4 || redSeries == 4) {
        this.hasWinner = true;
        swal("You won!", "", "success");
        location.reload();
      }
    }
  }
}

Game.prototype.checkVertical = function() {
  var counter = 0;
  for (var column = 0; column < 7; column++) {

    for (var row = 0; row < this.board[column].length; row++) {

      if (this.board[column][row] === this.board[column][row + 1]) {
        counter += 1;
        console.log("Vertical Count: " + counter)

        if (counter === 3) {
          this.hasWinner = true;
          swal("You won!", "", "success");
          location.reload();
        }

      } else {
        counter = 0; // reset count
      }
    }
  }
}

Game.prototype.checkDiagonal = function() {
  var counter = 0;
  for (var column = 0; column < 6; column++) {
    // console.log("checking diagonal");
    for (i = 0; i < this.board[column].length; i++) {

      if (this.board[column][i] === this.board[column + 1][i + 1]) {
        counter += 1;

        if (counter === 3) {
          this.hasWinner = true;
          swal("You won!", "", "success");
          location.reload();
        }

      } else {
        counter = 0; // reset count
      }
    }
  }
}