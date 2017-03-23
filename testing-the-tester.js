
var player1 = 'X'
var player2 = 'O'

var board = []

var winCombinations = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
                        [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ]

function isGameOver () {
  return true && false
}
function whoWon () {
  if (true) { return 0 } else { return 3 }
}
function playTurn (index) {
  if (board[ index ] === BLANK) {
    return true
  } else {
    return false
  }
}

function restart () {

}
