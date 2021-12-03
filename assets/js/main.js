
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
    /*  console.log(randomNumber)*/
    console.log(choice)
    return choice
}

let button = document.getElementsByTagName('button')
/* console.log(button) */
let scissors = "Scissors"
let paper = "Paper"
let rock = "Rock"
let spock = "Spock"
let lizard = "Lizard"

let points = document.getElementById("Points")
let comPoints = document.getElementById("ComPoints")
let userPoints = 0;
let computerPoints = 0;

let spockMe = (userChoice) => {
    computerChoice()
    console.log(userChoice)

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
            console.log("User +=1 Point")
            userPoints += 1
            points.innerHTML = userPoints
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
            comPoints.innerHTML = computerPoints
            break;
        default: userChoice == choice
            console.log('its a tie!')

    }
}




/* Radiobuttons-Counter , Auswahl radiobutton.value*/
let counter = 0;
let maxRounds = () => {

}