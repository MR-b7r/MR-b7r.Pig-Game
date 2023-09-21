const newGameBtn = document.querySelector('.new-game-button')
const rollDiceBtn = document.querySelector('.roll-dice-button')
const holdBtn = document.querySelector('.hold-button')
const totalScores = document.querySelectorAll('.total-score')
const currentScores = document.querySelectorAll('.current-score')
const diceImages = document.querySelectorAll('.dice img')
const diceImage = document.querySelector('.dice img')
const player = document.querySelectorAll('.player')

let currentScre1 = 0, totalScore1 = 0
let currentScre2 = 0, totalScore2 = 0

document.addEventListener('load', newGame())    
newGameBtn.addEventListener('click', newGame)

rollDiceBtn.addEventListener("click", rollDice)

holdBtn.addEventListener("click", holdDice)


function newGame() {
    rollDiceBtn.disabled = ""
    holdBtn.disabled = ""
    currentScre1 = 0
    currentScre2 = 0
    totalScore1 = 0
    totalScore2 = 0
    player[0].classList.remove("winner")
    player[1].classList.remove("winner")
    totalScores.forEach(totalScore => {
        totalScore.innerHTML = "0"
    })
    currentScores.forEach(currentScore => {
        currentScore.innerHTML = 0
    })
    diceImages.forEach(image => {
        image.classList.add("hidden")
    })
    player[0].classList.add("active")
}

function rollDice() {
    const curScoreActivePlayer = document.querySelector(".player.active .current-score")
    const diceRndm = Math.trunc(Math.random() * 6) + 1
    diceImage.classList.remove("hidden")
    diceImage.src = `images/dice-${diceRndm}.png`
    if(diceRndm !== "1") {
        if(curScoreActivePlayer.id === "current-0") {
            currentScre1 += diceRndm
            curScoreActivePlayer.textContent = currentScre1
        }
        else {
            currentScre2 += diceRndm
            curScoreActivePlayer.textContent = currentScre2
        }

    }
    if(diceRndm == "1") {
        if(curScoreActivePlayer.id === "current-0") {
            curScoreActivePlayer.textContent = '0'
            currentScre1 = 0
            switchPlayer()
        }
        else {
            curScoreActivePlayer.textContent = '0'
            currentScre2 = 0
            switchPlayer()
        }
        
    }

}
function switchPlayer() {
    if(player[0].classList.contains("active")) {
        player[0].classList.remove("active")
        player[1].classList.add("active")
        
    }
    else {
        player[1].classList.remove("active")
        player[0].classList.add("active")
    }
}


function holdDice() {
    const curScoreActivePlayer = document.querySelector(".player.active .current-score")
    const totScreActvPlayer = document.querySelector(".player.active .total-score")


    if(curScoreActivePlayer.id === "current-0") {
        totalScore1 += currentScre1
        totScreActvPlayer.textContent = totalScore1
        curScoreActivePlayer.textContent = '0'
        currentScre1 = 0
    }
    else{
        totalScore2 += currentScre2
        totScreActvPlayer.textContent = totalScore2
        curScoreActivePlayer.textContent = '0'
        currentScre2 = 0
    }
    

    if(totalScore1 >= "100") {
        rollDiceBtn.disabled = "disabled"
        holdBtn.disabled = "disabled"
        player[0].classList.add("winner")
    }
    else if(totalScore2 >= "100") {
        rollDiceBtn.disabled = "disabled"
        holdBtn.disabled = "disabled"
        player[1].classList.add("winner")
    }

    else {
        switchPlayer()
    }
    
    
}
