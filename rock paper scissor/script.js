/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
    const rpsChoice = ['Rock', 'Paper', 'Scissor']
    const random = Math.floor(Math.random() * rpsChoice.length)
    return rpsChoice[random]
}

const choose = document.getElementById("choose")
choose.innerHTML = `Computer choice:-${getComputerChoice()}`


let totalScore = { computerScore: 0, playerScore: 0 }
// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
    // return the result of score based on if you won, drew, or lost
    let score = -2;


    // All situations where human draws, set `score` to 0
    if (playerChoice == computerChoice) {
        score = 0;
    }
    else if (playerChoice == 'Rock' && computerChoice == 'Scissor') {
        score = 1;
    }
    else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
        score = 1;
    }
    else if (playerChoice == 'Scissor' && computerChoice == 'Paper') {
        score = 1
    }
    else {
        score = -1
    }

    return score

    // All situations where human wins, set `score` to 1
    // make sure to use else ifs here


    // Otherwise human loses (aka set score to -1)

    // return score

}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
    // Hint: on a score of -1
    // You should do result.innerText = 'You Lose!'
    // Don't forget to grab the div with the 'result' id!

    let resultDiv = document.getElementById("result")
    let handDiv = document.getElementById("hands")
    let playerScoreDiv = document.getElementById("player-score")

    if (score == -1) {
        resultDiv.innerText = "YOU LOSE!"
    }
    else if (score == 1) {
        resultDiv.innerText = 'YOU WON!'
    }
    else {
        resultDiv.innerText = 'DRAW'
    }

    handDiv.innerText = `🧑${playerChoice} VS 💻${computerChoice}`
    playerScoreDiv.innerText = `Your Score:-${totalScore['playerScore']}`

}




// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
    const computerChoice = getComputerChoice();
    let score1 = getResult(playerChoice, computerChoice)



    if (score1 == 0) {
    } else if (score1 == 1) {
        totalScore['playerScore']++;
    } else {
        totalScore['computerScore']++;
    }
    showResult(score1, playerChoice, computerChoice)
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
    // use querySelector to select all RPS Buttons
    // use querySelector to select all RPS Buttons
    const buttons = document.querySelectorAll(".rpsButton")
    // buttons[0].onclick = () =>  console.log(buttons[0].value)

    // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
    // 1. loop through the buttons using a forEach loop
    // 2. Add a 'click' event listener to each button
    // 3. Call the onClickRPS function every time someone clicks
    // 4. Make sure to pass the currently selected rps button as an argument
    buttons.forEach(rpsButton => {
        rpsButton.onclick = () => onClickRPS(rpsButton.value)
    }
    );


    // Add a click listener to the end game button that runs the endGame() function on click

}

// ** endGame function clears all the text on the DOM **
function endGame() {
    let end = document.getElementById('endGameButton')
    end.onclick = () => {

        let resultDiv = document.getElementById("result")
        let handDiv = document.getElementById("hands")
        let playerScoreDiv = document.getElementById("player-score")
        resultDiv.innerText = ""
        handDiv.innerText = ""
        playerScoreDiv.innerText = ""
        totalScore['playerScore'] = 0;
        totalScore['computerScore'] = 0;

    }
}

playGame()
endGame();