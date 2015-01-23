
function Game() {
  this.whoseTurn = "red";
  this.board = [[], [], [], [], [], [], []];
  this.hasWinner = false;
}

// check valid move function
Game.prototype.validMove = function(columnIndex) {
  if (this.board[columnIndex].length < 6) {
    return true;
  } else {
    return false; // alert("Pick another column!");
  }
};

Game.prototype.insertToken = function(columnIndex) {
  this.board[columnIndex].push(this.whoseTurn);
  var inserted = {color: this.whoseTurn, row: (this.board[columnIndex].length - 1)};
  return inserted;
};
// at the end of each turn, switch whoseTurn

Game.prototype.checkHorizontal = function() {
  var counter = 0;
  for (var column = 0; column < 6; column++) {
    // console.log("checking horizontal");
    for (i = 0; i < this.board[column].length; i++) {

      if (this.board[column][i] === this.board[column + 1][i]) {
        counter += 1;
        console.log("Horizontal Count: " + counter);

        if (counter === 3) {
          this.hasWinner = true;
          alert("You won!");
          location.reload();
        }

      } else {
        counter = 0; // reset count
        // console.log("Counter reset")
      }
    }
  }
}

Game.prototype.checkVertical = function() {
  var counter = 0;
  for (var column = 0; column < 6; column++) {
    // console.log("checking vertical");
    // console.log("Now we are at " + column + " column");
    for (i = 0; i < this.board[column].length; i++) {

      if (this.board[column][i] === this.board[column][i + 1]) {
        counter += 1;
        console.log("Vertical Count: " + counter)

        if (counter === 3) {
          this.hasWinner = true;
          alert("You won!");
          location.reload();
        }

      } else {
        counter = 0; // reset count
      }
    }
  }
}


// check diagonal lower right --> upper left // bottom up
// board[column ++][row ++]
Game.prototype.checkDiagonal = function() {
  var counter = 0;
  for (var column = 0; column < 6; column++) {
    // console.log("checking diagonal");
    for (i = 0; i < this.board[column].length; i++) {

      if (this.board[column][i] === this.board[column + 1][i + 1]) {
        counter += 1;

        if (counter === 3) {
          this.hasWinner = true;
          alert("You won!");
          location.reload();
        }

      } else {
        counter = 0; // reset count
      }
    }
  }
}


// check diagonal lower left --> upper right
// board[outer --][row ++]












