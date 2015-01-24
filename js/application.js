$(document).ready(function() {

  var game = new Game();
  var myFirebaseRef = new Firebase("blazing-torch-1243.firebaseIO.com/" + game.id);
  var myFirebaseMovesRef = new Firebase("blazing-torch-1243.firebaseIO.com/" + game.id + '/moves');

  myFirebaseRef.set({whoseTurn: "red", moves: game.moves});


  myFirebaseRef.on("value", function(snapshot){
      game.whoseTurn = snapshot.val().whoseTurn;
    });

  myFirebaseMovesRef.on("value", function(snapshot){

    var row = snapshot.order;
  });

  myFirebaseMovesRef.on('child_added', function(snapshot) {
    var moveObj = snapshot.val();

    $('*[data-row="' + moveObj.row + '"] *[data-col="' + moveObj.col + '"]').addClass(moveObj.color).addClass("slideDown");

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


      game.checkHorizontal();
      game.checkVertical();
      game.checkDiagonal();
  }
  });
});
