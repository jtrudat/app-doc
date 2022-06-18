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
let winningPecentage
let winners
let lives = 3
let timesWon = 0
let timesPlayed = 0
let computerChoiceDisplay = document.getElementById('computer-choice')
let myChoiceDisplay = document.getElementById('user-choice')
let resultDisplay = document.getElementById('result')
let buttonPicks = document.querySelectorAll('button')
let timesPlayedDisplay = document.getElementById('rounds')
let percentWonDisplay = document.getElementById('percentStat')
let livesLeft = document.getElementById('lifeSavers')


buttonPicks.forEach((myButton)=>{
        myButton.addEventListener('click', (myPick)=>{
        myChoice = myPick.target.id
        console.log(myChoice)
        myChoiceDisplay.innerHTML = `You drew : ${myChoice}`
        myChoiceIcon()
        compGenerator()
        result()
        percentWon()
        Trophy()
        overall()
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
    timesPlayed += 1
    timesPlayedDisplay.innerHTML = `number of times played this session: ${timesPlayed}`
}
function compGenerator(){
    let randomNumber = Math.floor(Math.random()*3) + 1
    compCheck = randomNumber
    if(randomNumber === 1){
        computerChoice = 'rock'
        let rockImg = document.getElementById('compImg')
        rockImg.src = "./assets/rock.png"
        rockImg.alt = 'gray rock' 
    }
    else if(randomNumber === 2){
        computerChoice = 'paper'
        let paperImg = document.getElementById('compImg')
        paperImg.src = "./assets/paper.png"
        paperImg.alt = 'roll of toilet paper'
    }
   else if(randomNumber === 3){
        computerChoice = 'scissors'
        let scissorsImg = document.getElementById('compImg')
        scissorsImg.src = "./assets/scissors.png"
        scissorsImg.alt = "red handle scissors"
    }
    computerChoiceDisplay.innerHTML = `Computer drew: ${computerChoice}`
    console.log(compCheck, computerChoice)
}  
function result(){
    if(computerChoice === myChoice){
           winners = 'draw'
           lives -=1
    }
    else if(computerChoice === 'rock' && myChoice ==='scissors'){
        winners = 'Sorry but you lose'
        lives -= 1
    }
    else if(computerChoice === 'paper' && myChoice === 'rock'){
        winners = 'Sorry but you lose'
        lives -=1
    }
    else if(computerChoice === 'scissors' && myChoice === 'paper'){
        winners = 'Sorry but you lose'
    }
    else if(computerChoice === 'rock' && myChoice === 'paper'){
        timesWon += 1
        winners = 'Getting lucky with paper covering rock'
        lives +=1
    }
    else if(computerChoice === 'paper' && myChoice === 'scissors'){
        timesWon += 1
        winners = 'Getting lucky with scissors cutting paper'
        lives +=1
    }
    else if(computerChoice === 'scissors' && myChoice === 'rock'){
        timesWon += 1
        winners = 'Getting lucky with rock smashing scissors'
        lives +=1
    }
    
    resultDisplay.innerHTML = `Overall Result: ${winners}`
    livesLeft.innerHTML = `Life savers left: ${lives}`
}

function percentWon (){
percentWinning = (timesWon/timesPlayed).toFixed(2)*100
percentWonDisplay.innerHTML = `Luckiness today: ${timesWon} wins at ${percentWinning}%`
}
function Trophy(){

     if(winners === 'Sorry but you lose'){
        let winningImage = document.getElementById('winner')
        winningImage.src = "./assets/donald-trump.png"
        console.log('loser')    
        }
    else if(winners === 'draw'){
    let winningImage = document.getElementById('winner')
    winningImage.src = ""
    console.log('draw')   
    }
    
    else{
    let winningImage = document.getElementById('winner')
    winningImage.src = "./assets/sosothumbs.png"
    console.log('winner') 
    }
}

function overall(){
    if(timesPlayed >= 5 && percentWinning >= 50){
    let winningImage = document.getElementById('winner')
    winningImage.src = "./assets/crownWinner.png"
    resultDisplay.innerHTML = `Overall Result: YOU ARE THE CHAMPION`
    }
    else if(timesPlayed >= 5 && percentWinning < 50 && lives <= 0){
    let winningImage = document.getElementById('winner')
    winningImage.src = "./assets/jsk.png"
    resultDisplay.innerHTML = `Overall Result: GAME OVER`   
    }
    else{
        console.log('keep playing')
    }
}
