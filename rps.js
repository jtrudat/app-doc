//display a basic title of the game being played
//display the selection's of both the user and the computer
//display three buttons with both visual and written depiction of the user's selection of paper rock scissors
//display a button for reset
//display statistics for number of times played and winning percentages
//display image for winning and losing
//need to determine computer selection
//need to compare computer selection against user selection to determine winner
let compCheck
let myChoice
let computerChoice
let result
let percentWon
let timesWon = 0
let timesPlayed = 0
let computerChoiceDisplay = document.getElementById('computer-choice')
let myChoiceDisplay = document.getElementById('user-choice')
let resultDisplay = document.getElementById('result')
let buttonPicks = document.querySelectorAll('button')
let timesPlayedDisplay = document.getElementById('rounds')
let percentWonDisplay = document.getElementById('percentStat')

buttonPicks.forEach((myButton)=>{
        myButton.addEventListener('click', (myPick)=>{
        myChoice = myPick.target.id
        console.log(myChoice)
        myChoiceDisplay.innerHTML = `You drew : ${myChoice}`
        myChoiceIcon()
        compGenerator()
        console.log(compCheck)
    })
})
function myChoiceIcon (){
    if(myChoice === 'rock'){
        let rockImg = document.getElementById('userImg')
        rockImg.src = "./assets/rock.png"
        rockImg.alt = "a rock"
    }
    else if(myChoice === 'paper'){
        let paperImg = document.getElementById('userImg')
        paperImg.src = "./assets/paper.png"
        paperImg.alt = "a roll of toilet paper"
    }
    else if(myChoice === 'scissors'){
        let scissorsImg = document.getElementById('userImg')
        scissorsImg.src = "./assets/scissors.png"
        scissorsImg.alt = "scissors with red handle"
    }
}
function compGenerator(){
    let randomNumber = Math.floor(Math.random()*3) + 1
    compCheck = randomNumber
    if(randomNumber === 1){
        computerChoice = 'rock'
        let rockImg = document.getElementById('compImg')
        rockImg.src = "./assets/rock.png" 
    }
    //else if(){

    //}
   // else if(){

   // }
    computerChoiceDisplay.innerHTML = `Computer drew: ${computerChoice}`
}  
