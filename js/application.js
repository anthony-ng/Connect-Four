// on ready
$(document).ready(function() {
  // listen for click on TDs
  var game = new Game();

  // while (game.hasWinner) {
    $('td').on('click', function() {
    // assign column to the td data-col
    var column = $(this).attr('data-col');
    console.log(game);
    if (game.validMove(column)) {
      var obj = game.insertToken(column);
      // $(this.attr(data.data-row)).addClass(data.color)
      $('*[data-row="' + obj.row + '"] *[data-col="' + column + '"]').addClass(obj.color);
      game.checkHorizontal();
      game.checkVertical();
      game.checkDiagonal();
    }
    })
  // }
    // ask model if valid move
    // aside: model will decide if it's valid
    // if it is, model will push new red or black piece to the column,
    // depending on the turn cycle
    // will return color, data-row if valid
    // if (game.validMove(column)) {
    //   game.insertToken(column);
    // }


});
