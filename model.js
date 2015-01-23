function Game() {
  // holds whose turn => undefined variable, will be assigned red or black
  var whoseTurn? = "red"; // will indicate "red" or "black"
  // hold board representation => nested array, each array is a column
  // max length for each column is 6
  var board = [[], [], [], [], [], [], []];
  var hasWinner? = false;
}


// check win
// Game.prototype.checkWin = function() {
  // check horizontal

  // check vertical

  // check diagonal

  // if someone has won, hasWinner? = true, winner will be value of whoseTurn?

// }


// check valid move function
// if array length is less than 6, return true
// function will be called on individual column array
// this is column
Game.prototype.validMove? = function(columnIndex) {
  if (this.board[columnIndex].length < 6) {
    return true;
  } else {
    return false; // alert("Pick another column!");
  }
}

// if validMove?, push whoseTurn? onto selected array
// this is column
Game.prototype.insertToken = function(columnIndex) {
  this.board[columnIndex].push(whoseTurn?);
  var inserted = {color: this.whoseTurn, row: (columnIndex.length - 1)};
  return inserted;
}

// at the end of each turn, switch whoseTurn?

// representation of game:


while (this.hasWinner? === false) {
  if (this.whoseTurn? === "red") {
    // 2nd: player select a column
    if(this.validMove?) {
      this.insertToken();
    }
    // 1st: check win
    this.checkWin();

    this.whoseTurn? = "black"; // switch players
  } else if (this.whoseTurn? === "black") {
    // 2nd: player select a column
    if(this.validMove?) {
      this.insertToken();
    }
    this.checkWin();

    this.whoseTurn? = "red"; // switch players
  }
}


// event listener - click on button to insert token
// button will reference specific column



