import { body, playCol, modeCol, howToPlayCol, fT3Col, fT5Col, suddenDeathCol } from "./app.js";
import { addSuddenDeathFight, fightDiv, addFT3Fight } from "./addFights.js";
import { shurikenDiv } from "./addGameModes.js";
import { inject1v1, injectAI } from "./addVersus.js";

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
    exitBtn.addEventListener('click', (event) => {
        resultDiv.innerHTML = "";
        resultDiv.className += " none";
        fightDiv.className += " none";
        body.className = "bodyBg1 overflowX";
        shurikenDiv.className = "container-fluid lotus shurikenDiv";
        playCol.className = "col centerCol";
        modeCol.className = "col centerCol";
        howToPlayCol.className = "col centerCol";
        inject1v1.className += " none";
        injectAI.className += " none";
        fT3Col.className += " none";
        fT5Col.className += " none";
        suddenDeathCol.className += " none";
        inject1v1.innerHTML = "";
        injectAI.innerHTML = "";
        fT3Col.innerHTML = "";
        fT5Col.innerHTML = "";
        suddenDeathCol.innerHTML = "";
        fightDiv.innerHTML = "";
        p1Point = 0;
        p2Point = 0;
        shurikenDiv
    })
    

    let restartBtn = document.createElement("button");
    restartBtn.className = "absolute restartBtn imPerfect";
    restartBtn.innerText = "restart";
    restartBtn.addEventListener('click', (event) => {
        resultDiv.innerHTML = "";
        resultDiv.className += " none";
        fightDiv.innerHTML = "";
        body.className = "bodyBg1 overflowX";
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

function FT3Winner(winnerName, choice1, choice2)
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
    winnerTxt2.innerText = `Samurai 1 chose to battle with ${choice1} and Samurai 2 chose to battle with ${choice2}, as a result, ${winnerName} wins round ${p1Point + p2Point + 1}`;

    let exitBtn = document.createElement("button");
    exitBtn.className = "absolute exitBtn imPerfect";
    exitBtn.innerText = "exit";
    exitBtn.addEventListener('click', (event) => {
        resultDiv.innerHTML = "";
        resultDiv.className += " none";
        fightDiv.className += " none";
        body.className = "bodyBg1 overflowX";
        shurikenDiv.className = "container-fluid lotus shurikenDiv";
        playCol.className = "col centerCol";
        modeCol.className = "col centerCol";
        howToPlayCol.className = "col centerCol";
        inject1v1.className += " none";
        injectAI.className += " none";
        fT3Col.className += " none";
        fT5Col.className += " none";
        suddenDeathCol.className += " none";
        inject1v1.innerHTML = "";
        injectAI.innerHTML = "";
        fT3Col.innerHTML = "";
        fT5Col.innerHTML = "";
        suddenDeathCol.innerHTML = "";
        fightDiv.innerHTML = "";
        p1Point = 0;
        p2Point = 0;
        shurikenDiv
    })
    

    let contnueBtn = document.createElement("button");
    contnueBtn.className = "absolute restartBtn imPerfect";
    contnueBtn.innerText = "continue";
    contnueBtn.addEventListener('click', (event) => {
        resultDiv.innerHTML = "";
        resultDiv.className += " none";
        fightDiv.innerHTML = "";
        body.className = "bodyBg1 overflowX";
        addFT3Fight(p1Point, p2Point, "dont cheat", "dont cheat");
    })

    resultDiv.appendChild(winnerBg);
    resultDiv.appendChild(winnerTxt);
    resultDiv.appendChild(winnerTxt2);
    resultDiv.appendChild(exitBtn);
    resultDiv.appendChild(contnueBtn);

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
                    p1Point++;
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
                    p1Point++;
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

function displayFT3Winner(choice1, choice2) {
    switch (choice1) {
        case "rock":
            switch (choice2) {
                case "rock":
                    break;
                case "paper":
                    FT3Winner("Samurai 2", choice1, choice2);
                    p2Point++;
                    break;
                case "scissors":
                    FT3Winner("Samurai 1", choice1, choice2);
                    p1Point++;
                    break;
                case "lizzard":
                    FT3Winner("Samurai 1", choice1, choice2);
                    p1Point++;
                    break;
                case "spock":
                    FT3Winner("Samurai 2", choice1, choice2);
                    p2Point++;
                    break;
            }
            break;
        case "paper":
            switch (choice2) {
                case "rock":
                    FT3Winner("Samurai 1", choice1, choice2);
                    p1Point++;
                    break;
                case "paper":
                    break;
                case "scissors":
                    FT3Winner("Samurai 2", choice1, choice2);
                    p2Point++;
                    break;
                case "lizzard":
                    FT3Winner("Samurai 2", choice1, choice2);
                    p2Point++;
                    break;
                case "spock":
                    FT3Winner("Samurai 1", choice1, choice2);
                    p1Point++;
                    break;
            }
            break;
        case "scissors":
            switch (choice2) {
                case "rock":
                    FT3Winner("Samurai 2", choice1, choice2);
                    p2Point++;
                    break;
                case "paper":
                    FT3Winner("Samurai 1", choice1, choice2);
                    p1Point++;
                    break;
                case "scissors":
                    break;
                case "lizzard":
                    FT3Winner("Samurai 1", choice1, choice2);
                    p1Point++;
                    break;
                case "spock":
                    FT3Winner("Samurai 2", choice1, choice2);
                    p2Point++;
                    break;
            }
            break;
        case "lizzard":
            switch (choice2) {
                case "rock":
                    FT3Winner("Samurai 2", choice1, choice2);
                    p2Point++;
                    break;
                case "paper":
                    FT3Winner("Samurai 1", choice1, choice2);
                    p1Point++;
                    break;
                case "scissors":
                    FT3Winner("Samurai 2", choice1, choice2);
                    p2Point++;
                    break;
                case "lizzard":
                    break;
                case "spock":
                    FT3Winner("Samurai 1", choice1, choice2);
                    p1Point++;
                    break;
            }
            break;
        case "spock":
            switch (choice2) {
                case "rock":
                    FT3Winner("Samurai 1", choice1, choice2);
                    p1Point++;
                    break;
                case "paper":
                    FT3Winner("Samurai 2", choice1, choice2);
                    p2Point++;
                    break;
                case "scissors":
                    FT3Winner("Samurai 1", choice1, choice2);
                    p1Point++;
                    break;
                case "lizzard":
                    FT3Winner("Samurai 2", choice1, choice2);
                    p2Point++;
                    break;
                case "spock":
                    break;
            }
            break;
    }
}

export { displaySDWinner, p1Point, p2Point, FT3Winner, displayFT3Winner }