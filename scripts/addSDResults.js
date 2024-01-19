import { body } from "./app.js";
import { addSuddenDeathFight, fightDiv } from "./addFights.js";

let p1Point = 0;
let p2Point = 0;

let resultDiv = document.getElementById("resultDiv");

function SDWinner(winnerName, choice1, choice2)
{
    body.className += " overflow";

    resultDiv.className = "resultScreen absolute";
    let winnerBg = document.createElement("img");
    winnerBg.className = "winnerBg";
    winnerBg.src = "./assets/resultscreenbg.png";
    winnerBg.alt = "background screen";

    let winnerTxt = document.createElement("h1");
    winnerTxt.className = "imPerfect white absolute winnerTxt";
    winnerTxt.innerText = winnerName + " wins";

    let winnerTxt2 = document.createElement("p");
    winnerTxt2.className = "winnerTxt2 firaCode absolute white";
    winnerTxt2.innerText = `Samurai 1 chose to battle with ${choice1} and Samurai 2 chose to battle with ${choice2}, as a result, ${winnerName} wins`;

    let exitBtn = document.createElement("button");
    exitBtn.className = "absolute exitBtn imPerfect";
    exitBtn.innerText = "exit";

    let restartBtn = document.createElement("button");
    restartBtn.className = "absolute restartBtn imPerfect";
    restartBtn.innerText = "restart";
    restartBtn.addEventListener('click', (event) => {
        resultDiv.innerHTML = "";
        resultDiv.className += " none";
        fightDiv.innerHTML = "";
        body.className = "bodyBg1";
        p1Point = 0;
        p2Point = 0;
        addSuddenDeathFight(p1Point, p2Point, "dont cheat", "dont cheat");
    })

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
                    SDWinner("Samurai 2", choice1, choice2);
                    p2Point++;
                    break;
                case "scissors":
                    SDWinner("Samurai 1", choice1, choice2);
                    p1Point++;
                    break;
                case "lizzard":
                    SDWinner("Samurai 1", choice1, choice2);
                    p1Point++;
                    break;
                case "spock":
                    SDWinner("Samurai 2", choice1, choice2);
                    p2Point++;
                    break;
            }
            break;
        case "paper":
            switch (choice2) {
                case "rock":
                    SDWinner("Samurai 1", choice1, choice2);
                    p1Point++;
                    break;
                case "paper":
                    break;
                case "scissors":
                    SDWinner("Samurai 2", choice1, choice2);
                    p2Point++;
                    break;
                case "lizzard":
                    SDWinner("Samurai 2", choice1, choice2);
                    p2Point++;
                    break;
                case "spock":
                    SDWinner("Samurai 1", choice1, choice2);
                    p1Point++;
                    break;
            }
            break;
        case "scissors":
            switch (choice2) {
                case "rock":
                    SDWinner("Samurai 2", choice1, choice2);
                    p2Point++;
                    break;
                case "paper":
                    SDWinner("Samurai 1", choice1, choice2);
                    p2Point++;
                    break;
                case "scissors":
                    break;
                case "lizzard":
                    SDWinner("Samurai 1", choice1, choice2);
                    p1Point++;
                    break;
                case "spock":
                    SDWinner("Samurai 2", choice1, choice2);
                    p2Point++;
                    break;
            }
            break;
        case "lizzard":
            switch (choice2) {
                case "rock":
                    SDWinner("Samurai 2", choice1, choice2);
                    p2Point++;
                    break;
                case "paper":
                    SDWinner("Samurai 1", choice1, choice2);
                    p2Point++;
                    break;
                case "scissors":
                    SDWinner("Samurai 2", choice1, choice2);
                    p2Point++;
                    break;
                case "lizzard":
                    break;
                case "spock":
                    SDWinner("Samurai 1", choice1, choice2);
                    p1Point++;
                    break;
            }
            break;
        case "spock":
            switch (choice2) {
                case "rock":
                    SDWinner("Samurai 1", choice1, choice2);
                    p1Point++;
                    break;
                case "paper":
                    SDWinner("Samurai 2", choice1, choice2);
                    p2Point++;
                    break;
                case "scissors":
                    SDWinner("Samurai 1", choice1, choice2);
                    p1Point++;
                    break;
                case "lizzard":
                    SDWinner("Samurai 2", choice1, choice2);
                    p2Point++;
                    break;
                case "spock":
                    break;
            }
            break;
    }
}

export { displaySDWinner, p1Point, p2Point }