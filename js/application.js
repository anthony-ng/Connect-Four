// on ready

$(document).ready(function() {
  var game = new Game();
  var myFirebaseRef = new Firebase("blazing-torch-1243.firebaseIO.com/" + game.id);
  myFirebaseRef.set({whoseTurn: "red", moves: game.moves});

  myFirebaseRef.on("value", function(snapshot){
      game.whoseTurn = snapshot.val().whoseTurn;
    });


  $('td').on('click', function() {
  var column = $(this).attr('data-col');
  if (game.validMove(column)) {
    if (game.whoseTurn === "red") {
      myFirebaseRef.set({whoseTurn: "black"});
    } else if (game.whoseTurn === "black") {
      myFirebaseRef.set({whoseTurn: "red" });
    }

    var obj = game.insertToken(column);

    myFirebaseRef.update({moves: game.moves});
    $('*[data-row="' + obj.row + '"] *[data-col="' + column + '"]').addClass(obj.color);
      game.checkHorizontal();
      game.checkVertical();
      game.checkDiagonal();
  }
  });
});
