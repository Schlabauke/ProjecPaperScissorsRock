let points = document.getElementById("Points")
let comPoints = document.getElementById("ComPoints")
let output = document.getElementById("output")

let choice = ""
let computerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 5)
    switch (randomNumber) {
        case 0:
            choice = "Paper"
            break;
        case 1:
            choice = "Scissors"
            break;
        case 2:
            choice = "Rock"
            break;
        case 3:
            choice = "Lizard"
            break;
        case 4:
            choice = "Spok"
    }
    return choice
}

let scissors = "Scissors"
let paper = "Paper"
let rock = "Rock"
let spock = "Spock"
let lizard = "Lizard"

let userPoints = 0;
let computerPoints = 0;
let counter = 1;

let counterOutput = document.getElementById("counterOutput")
let Anzahl = document.getElementsByName("Anzahl")


let maxRounds = () => {
    for (let i = 0; i < Anzahl.length; i++) {
        console.log(Anzahl[i].value)
        if (Anzahl[i].checked) {
            return Anzahl[i].value
        }
    }
}

let spockMe = (userChoice) => {
    maxRounds()
    counterOutput.innerHTML = `${counter}/ ${maxRounds()}`

    if (counter == maxRounds()) {
        if (userPoints < computerPoints) {
            console.log("You've been assimilated")
        } else if (userPoints > computerPoints) {
            console.log("We defeated the Borg!")
        } else if (userPoints == computerPoints) {
            console.log("Rematch")
        } else {
            return null
        }
    }

    computerChoice()
    output.innerHTML = `Computer picks: ${computerChoice}. You picked:${userChoice}.`

    let resultBoth = userChoice + choice
    console.log(resultBoth)
    switch (resultBoth) {
        case "ScissorsPaper":
        case "PaperRock":
        case "RockLizard":
        case "LizardSpock":
        case "SpockScissors":
        case "ScissorsLizard":
        case "LizardPaper":
        case "PaperSpock":
        case "SpockRock":
        case "RockScissors":
            userPoints += 1
            counter += 1
            points.innerHTML = userPoints
            output.innerHTML = "You won!"
            break;
        case "PaperScissors":
        case "RockPaper":
        case "LizardRock":
        case "SpockLizard":
        case "ScissorsSpock":
        case "LizardScissors":
        case "PaperLizard":
        case "SpockPaper":
        case "RockSpock":
        case "ScissorsRock":
            console.log("Computer +=1 Point")
            computerPoints += 1
            counter += 1
            comPoints.innerHTML = computerPoints
            output.innerHTML = "Computer won!"
            break;
        default: userChoice == choice
            console.log('its a tie!')
            counter += 1
            output.innerHTML = "It's a tie!"
    }

}
