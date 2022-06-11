//display a basic title of the game being played
//display the selection's of both the user and the computer
//display three buttons with both visual and written depiction of the user's selection of paper rock scissors
//display a button for reset
//display statistics for number of times played and winning percentages
//display image for winning and losing
//need to determine computer selection
//need to compare computer selection against user selection to determine winner

let userChoice
let computerChoice
let result
let percentWon
let timesWon = 0
let timesPlayed = 0
let computerChoiceDisplay = document.getElementById('computer-choice')
let userChoiceDisplay = document.getElementById('user-choice')
let resultDisplay = document.getElementById('result')
let possibleChoices = document.querySelectorAll('button')
let timesPlayedDisplay = document.getElementById('rounds')
let percentWonDisplay = document.getElementById('percentStat')