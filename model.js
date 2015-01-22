var Game = {
  // holds whose turn => undefined variable, will be assigned red or black
  var whoseTurn? = "red", // will indicate "red" or "black"
  // hold board representation => nested array, each array is a column
  // max length for each column is 6
  var board = [[], [], [], [], [], [], []],
  var hasWinner? = false,
}

// check win
Game.prototype.checkWin = function() {
  // check horizontal

  // check vertical

  // check diagonal


// if someone has won, hasWinner? = true, winner will be value of whoseTurn?

}

// check valid move function
// if array length is less than 6, return true
// function will be called on individual column array
// this is column
Game.prototype.validMove? = function() {
  if (this.length < 6) {
    return true;
  }
}

// if validMove?, push whoseTurn? onto selected array
// this is column
Game.prototype.insertToken = function() {
  if (this.validMove?) {
    this.push(whoseTurn?)
  }
}

// at the end of each turn, switch whoseTurn?

// representation of game:

while (hasWinner? === false) {
  if (whoseTurn? === "red") {
    checkWin();
    // player select a column
    validMove?();
    // if (validMove?()) {
      insertToken();
    // }
      whoseTurn? = "black" // switch players
  } else if (whoseTurn? === "black") {
      checkWin();
    // player select a column
    validMove?();
    if (validMove?()) {
      insertToken();
    }
      whoseTurn? = "red" // switch players
    }
  }
