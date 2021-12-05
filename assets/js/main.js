let points = document.getElementById("Points")
let comPoints = document.getElementById("ComPoints")
let output = document.getElementById("output")
let sectionOne = document.getElementById("sectionOne")
let Borg = document.getElementById("Borg")
let Enterprise = document.getElementById("Enterprise")
let Rematch = document.getElementById("Rematch")

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

let maxRounds = () => {
    for (let i = 0; i < Anzahl.length; i++) {
        if (Anzahl[i].checked) {
            return Anzahl[i].value
        }
    }
}
let rundenZahl = maxRounds()
let spockMe = (userChoice) => {
    maxRounds()
    counterOutput.innerHTML = `${counter}/ ${maxRounds()}`
    computerChoice()

    if (counter == rundenZahl) {
        if (userPoints < computerPoints) {
            Borg.classList.toggle("Show")
            sectionOne.style.display = "none"
        } else if (userPoints > computerPoints) {
            Enterprise.classList.toggle("Show")
            sectionOne.style.display = "none"
        } else {
            Rematch.classList.toggle("Show")
            sectionOne.style.display = "none"
        }
        return null
    }
    output.innerHTML = `Borg picked: ${computerChoice}. You picked:${userChoice}.`
    let resultBoth = userChoice + choice
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
            output.innerHTML = "Strike!"
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
            computerPoints += 1
            counter += 1
            comPoints.innerHTML = computerPoints
            output.innerHTML = "You got hit!"
            break;
        default: userChoice == choice
            counter += 1
            output.innerHTML = "Target missed!"
    }
}
