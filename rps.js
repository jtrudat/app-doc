//declaration of all the variables to be used and elements to be selected within the DOM
//preference is to have all variables exist outside of functions to facilitate access by any function
let compCheck
let myChoice
let computerChoice
let winningPecentage
let winners
let trophiesWon = 0
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

//this section is the main action of the game
//first event listeners are placed on each button
//next, the id of the selected button becomes the the users choice which will become a part of a series of nested if/else statements 
//to help determine winner
//all functions are called from this location
//this is for mobile or desktop
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

//this is for desktop keystroke experience only
 document.addEventListener('keydown', (keyPressed) => {
    if (keyPressed.key === 'ArrowDown') {
        myChoice = 'paper'
    } else if (keyPressed.key === 'ArrowLeft') {
      myChoice = 'rock'
    } else if (keyPressed.key === 'ArrowRight') {
      myChoice = 'scissors'
    } else if (keyPressed.key === 'ArrowUp'){
        history.go(0)
    }
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

//this function determines the display for the user's selected image and number of times the user has played
function myChoiceIcon (){
    if(myChoice === 'rock'){
        let rockImg = document.getElementById('userImg')
        rockImg.src = "./assets/rockHand3.png"
        rockImg.alt = "a rock"
    }
    else if(myChoice === 'paper'){
        let paperImg = document.getElementById('userImg')
        paperImg.src = "./assets/paperHand3.png"
        paperImg.alt = "a roll of toilet paper"
    }
    else if(myChoice === 'scissors'){
        let scissorsImg = document.getElementById('userImg')
        scissorsImg.src = "./assets/scissorsHand3.png"
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
        rockImg.src = "./assets/rockHand3.png"
        rockImg.alt = 'gray rock' 
    }
    else if(randomNumber === 2){
        computerChoice = 'paper'
        let paperImg = document.getElementById('compImg')
        paperImg.src = "./assets/paperHand3.png"
        paperImg.alt = 'roll of toilet paper'
    }
   else if(randomNumber === 3){
        computerChoice = 'scissors'
        let scissorsImg = document.getElementById('compImg')
        scissorsImg.src = "./assets/scissorsHand3.png"
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
        winners = 'Getting lucky, paper covers rock, but no trophy yet'
        lives += 1
        timesWon += 1
    }
    else if(computerChoice === 'paper' && myChoice === 'scissors'){
        winners = 'Getting lucky, scissors cut paper, but no trophy yet'
        lives += 1
        timesWon += 1
    }
    else if(computerChoice === 'scissors' && myChoice === 'rock'){
        winners = 'Getting lucky, rock smashes scissors, but no trophy yet'
        lives += 1
        timesWon += 1
    }
    resultDisplay.innerHTML = `Overall Result: ${winners}`
    livesLeft.innerHTML = `Life savers left: ${lives}`
}

// determines the user's winning percentage
function percentWon (){
percentWinning = (timesWon/timesPlayed).toFixed(2)*100
percentWonDisplay.innerHTML = `Luckiness today: Wins-${timesWon}, Trophies-${trophiesWon}, at ${percentWinning}%`
}

// determines the image displayed after each try
function interim(){
    if(winners === 'Sorry but you lose'){
    let winningImage = document.getElementById('winner')
    winningImage.src = "./assets/thumbsdown.png"
    winningImage.alt = ""
    console.log('loser')   
    }
    else if(winners === 'draw'){
    let winningImage = document.getElementById('winner')
    winningImage.src = "./assets/rpsdemo1.png"
    winningImage.alt = ""
    console.log('draw')
    }
    else{
    let winningImage = document.getElementById('winner')
    winningImage.src = "./assets/sosothumbs.png"
    winningImage.alt = ""
    console.log('winner') 
    }
}

//determines if player has won or lost the game and displays an image appropriately
function trophy(){
    if(timesPlayed >= 5 && percentWinning >= 50 && winners !== 'Sorry but you lose' && winners !== 'draw'){
    let winningImage = document.getElementById('winner')
    winningImage.src = "./assets/crownWinner.png"
    winningImage.alt = ""
    resultDisplay.innerHTML = `Overall Result: YOU ARE THE CHAMPION`
    trophiesWon += 1
    percentWonDisplay.innerHTML = `Luckiness today: Wins-${timesWon}, Trophies-${trophiesWon}, at ${percentWinning}%`
    }
    else if(timesPlayed >= 5 && percentWinning < 50 && lives <= 0){
    let winningImage = document.getElementById('winner')
    winningImage.src = "./assets/jsk1.png"
    winningImage.alt = ""
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
