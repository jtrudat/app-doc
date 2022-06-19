
// declaration of all the variables to be used and elements to be selected within the DOM
let compCheck
let myChoice
let computerChoice
let winningPecentage
let winners
let lives = 3
let timesWon = 0
let timesPlayed = 0
let floater = document.querySelector('#users')
let startUp = document.getElementById('startMessage')
let computerChoiceDisplay = document.getElementById('computer-choice')
let myChoiceDisplay = document.getElementById('user-choice')
let resultDisplay = document.getElementById('result')
let buttonPicks = document.querySelectorAll('button')
let timesPlayedDisplay = document.getElementById('rounds')
let percentWonDisplay = document.getElementById('percentStat')
let livesLeft = document.getElementById('lifeSavers')


//the main action of the game
//first event listeners are placed on each button
//next, the id of the selected button becomes the the users choice which will become a part of a series of nested if/else statements 
//to help determine winner
//all functions are called from this location
buttonPicks.forEach((myButton)=>{
        myButton.addEventListener('click', (myPick)=>{
        myChoice = myPick.target.id
        console.log(myChoice)
        myChoiceDisplay.innerHTML = `You drew : ${myChoice}`
        startUp.innerHTML = ``
        myChoiceIcon()
        compGenerator()
        result()
        percentWon()
        interim()
        trophy()     
   })
})

//this function determines the display for the user,s selected image and number of times the user has played
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
    timesPlayedDisplay.innerHTML = `number of rounds played this session: ${timesPlayed}`
}

//this function determines the computer's selection and assigns the appropriate image
function compGenerator(){
    //Math.random must be used in conjunction with Math.floor to get a whole number of 1, 2 or 3
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

//determines the overall result, keeps track of how many times user has won and how many extra chances the user has left
function result(){
    if(computerChoice === myChoice){
        winners = 'draw'
        lives -= 1
    }
    else if(computerChoice === 'rock' && myChoice ==='scissors'){
        winners = 'Sorry but you lose'
        lives -= 1
    }
    else if(computerChoice === 'paper' && myChoice === 'rock'){
        winners = 'Sorry but you lose'
        lives -= 1
    }
    else if(computerChoice === 'scissors' && myChoice === 'paper'){
        winners = 'Sorry but you lose'
        lives -= 1
    }
    else if(computerChoice === 'rock' && myChoice === 'paper'){
        winners = 'Getting lucky with paper covering rock, but no trophy just yet'
        lives += 1
        timesWon += 1
    }
    else if(computerChoice === 'paper' && myChoice === 'scissors'){
        winners = 'Getting lucky with scissors cutting paper, but no trophy just yet'
        lives += 1
        timesWon += 1
    }
    else if(computerChoice === 'scissors' && myChoice === 'rock'){
        winners = 'Getting lucky with rock smashing scissors, but no trophy just yet'
        lives += 1
        timesWon += 1
    }
    resultDisplay.innerHTML = `Overall Result: ${winners}`
    livesLeft.innerHTML = `Life savers left: ${lives}`
}

// determines the user's winning percentage
function percentWon (){
percentWinning = (timesWon/timesPlayed).toFixed(2)*100
percentWonDisplay.innerHTML = `Luckiness today: ${timesWon} wins at ${percentWinning}%`
}

// determines the image displayed after each try
function interim(){
    if(winners === 'Sorry but you lose'){
    let winningImage = document.getElementById('winner')
    winningImage.src = "./assets/thumbsdown.png"
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

// determines if player has won or lost the game and displays an image appropriately
function trophy(){
    if(timesPlayed >= 5 && percentWinning >= 50){
    let winningImage = document.getElementById('winner')
    winningImage.src = "./assets/crownWinner.png"
    resultDisplay.innerHTML = `Overall Result: YOU ARE THE CHAMPION`
    }
    else if(timesPlayed >= 5 && percentWinning < 50 && lives <= 0){
    let winningImage = document.getElementById('winner')
    winningImage.src = "./assets/jsk1.png"
    resultDisplay.innerHTML = `Overall Result: GAME OVER`
    let audio = new Audio('./assets/jskaudio.mp3')
    audio.play()
    let audio1 = new Audio('./assets/gameover2.mp3')
    audio1.play()  
    }
    else{
    console.log('keep playing')
    }
}
