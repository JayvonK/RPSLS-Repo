
let resultDiv = document.getElementById("resultDiv");

function SDWinner(winnerName, choice1, choice2)
{
    let winnerBg = document.createElement("img");
    winnerBg.className = "winnerBg";
    winnerBg.src = "./assets/resultscreenbg.png";
    winnerBg.alt = "background screen";

    let winnerTxt = document.createElement("h1");
    winnerTxt.className = "imPerfect white absolute winnerTxt";
    winnerTxt.innerText = winnerName + " wins";

    let winnerTxt2 = document.createElement("p");
    winnerTxt2.className = "winnerTxt2 firaCode absolute white";
    winnerTxt2.innerText = `Samurai 1 chose to battle with ${choice1} and Samurai 2 chose to battle with ${scissors}, as a result, ${winnerName} wins`;

    let exitBtn = document.createElement("button");
    exitBtn.className = "absolute exitBtn imPerfect";
    exitBtn.innerText = "exit";

    let restartBtn = document.createElement("button");
    restartBtn.className = "absolute restartBtn imPerfect";
    restartBtn.innerText = "restart";

    resultDiv.appendChild(winnerBg);
    resultDiv.appendChild(winnerTxt);
    resultDiv.appendChild(winnerTxt2);
    resultDiv.appendChild(exitBtn);
    resultDiv.appendChild(restartBtn);

}


function displaySDWinner(choice1, choice2) {
    switch (choice1) {
        case "rock":
            switch (choice2) {
                case "rock":
                    break;
                case "paper":
                    break;
                case "scissors":
                    break;
                case "lizzard":
                    break;
                case "spock":
                    break;
            }
            break;
        case "paper":
            switch (choice2) {
                case "rock":
                    break;
                case "paper":
                    break;
                case "scissors":
                    break;
                case "lizzard":
                    break;
                case "spock":
                    break;
            }
            break;
        case "scissors":
            switch (choice2) {
                case "rock":
                    break;
                case "paper":
                    break;
                case "scissors":
                    break;
                case "lizzard":
                    break;
                case "spock":
                    break;
            }
            break;
        case "lizzard":
            switch (choice2) {
                case "rock":
                    break;
                case "paper":
                    break;
                case "scissors":
                    break;
                case "lizzard":
                    break;
                case "spock":
                    break;
            }
            break;
        case "spock":
            switch (choice2) {
                case "rock":
                    break;
                case "paper":
                    break;
                case "scissors":
                    break;
                case "lizzard":
                    break;
                case "spock":
                    break;
            }
            break;
    }
}