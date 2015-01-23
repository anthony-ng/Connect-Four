// on ready

$(document).ready(function() {
  var myFirebaseRef = new Firebase("blazing-torch-1243.firebaseIO.com");
  var game = new Game();
  myFirebaseRef.set({
    whoseTurn: "red"
  });
  $('td').on('click', function() {
  var column = $(this).attr('data-col');
  if (game.validMove(column)) {
    if (game.whoseTurn === "red") {
      myFirebaseRef.set({whoseTurn: "black"});
    } else if (game.whoseTurn === "black") {
      myFirebaseRef.set({whoseTurn: "red" });
    }
    myFirebaseRef.on("value", function(snapshot){
      game.whoseTurn = snapshot.val().whoseTurn;
    });
    var obj = game.insertToken(column);
    $('*[data-row="' + obj.row + '"] *[data-col="' + column + '"]').addClass(obj.color);
      game.checkHorizontal();
      game.checkVertical();
      game.checkDiagonal();
  }
  });
});
