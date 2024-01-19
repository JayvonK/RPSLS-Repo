import {
    body,
    playCol,
    modeCol,
    howToPlayCol,
    fT3Col,
    fT5Col,
    suddenDeathCol,
} from "./app.js";
import { addSuddenDeathFight, fightDiv, addFT3Fight, addFT5Fight } from "./addFights.js";
import { shurikenDiv } from "./addGameModes.js";
import { inject1v1, injectAI } from "./addVersus.js";
import { AITrue } from "./addVersus.js";

let p1Point = 0;
let p2Point = 0;

let resultDiv = document.getElementById("resultDiv");

function SDWinner(winnerName, choice1, choice2) {
    body.className = "bodyBg1 overflow";

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

    if (AITrue) {
        winnerTxt2.innerText = `Samurai 1 chose to battle with ${choice1} and Supreme AI chose to battle with ${choice2}, as a result, ${winnerName} wins`;
    } else {
        winnerTxt2.innerText = `Samurai 1 chose to battle with ${choice1} and Samurai 2 chose to battle with ${choice2}, as a result, ${winnerName} wins`;
    }



    let exitBtn = document.createElement("button");
    exitBtn.className = "absolute exitBtn imPerfect";
    exitBtn.innerText = "exit";
    exitBtn.addEventListener("click", (event) => {
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
    });

    let restartBtn = document.createElement("button");
    restartBtn.className = "absolute restartBtn imPerfect";
    restartBtn.innerText = "restart";
    restartBtn.addEventListener("click", (event) => {
        resultDiv.innerHTML = "";
        resultDiv.className += " none";
        fightDiv.innerHTML = "";
        body.className = "bodyBg1 overflowX";
        p1Point = 0;
        p2Point = 0;
        addSuddenDeathFight(p1Point, p2Point, "dont cheat", "dont cheat");
    });

    resultDiv.appendChild(winnerBg);
    resultDiv.appendChild(winnerTxt);
    resultDiv.appendChild(winnerTxt2);
    resultDiv.appendChild(exitBtn);
    resultDiv.appendChild(restartBtn);
}

function FT3Winner(winnerName, choice1, choice2) {
    body.className = "bodyBg1 overflow";

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

    if(AITrue){
        winnerTxt2.innerText = `Samurai 1 chose to battle with ${choice1} and Supreme AI chose to battle with ${choice2}, as a result, ${winnerName} wins round ${p1Point + p2Point + 1}`;
    }else {
        winnerTxt2.innerText = `Samurai 1 chose to battle with ${choice1} and Samurai 2 chose to battle with ${choice2}, as a result, ${winnerName} wins round ${p1Point + p2Point + 1}`;
    }
    

    let exitBtn = document.createElement("button");
    exitBtn.className = "absolute exitBtn imPerfect";
    exitBtn.innerText = "exit";
    exitBtn.addEventListener("click", (event) => {
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
    });

    resultDiv.appendChild(winnerBg);
    resultDiv.appendChild(winnerTxt);
    resultDiv.appendChild(winnerTxt2);
    resultDiv.appendChild(exitBtn);
}

function TieSD(choice1, choice2) {
    body.className = "bodyBg1 overflow";

    resultDiv.className = "resultScreen absolute";
    let winnerBg = document.createElement("img");
    winnerBg.className = "winnerBg";
    winnerBg.src = "./assets/resultscreenbg.png";
    winnerBg.alt = "background screen";

    let winnerTxt = document.createElement("h1");
    winnerTxt.className = "imPerfect white absolute winnerTxt";
    winnerTxt.innerText = "A draw!";

    let winnerTxt2 = document.createElement("p");
    winnerTxt2.className = "winnerTxt2 firaCode absolute white";
    winnerTxt2.innerText = `Samurai 1 chose to battle with ${choice1} and Samurai 2 chose to battle with ${choice2}, as a result, both Samurais have come to a draw`;

    let exitBtn = document.createElement("button");
    exitBtn.className = "absolute exitBtn imPerfect";
    exitBtn.innerText = "exit";
    exitBtn.addEventListener("click", (event) => {
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
    });

    let contnueBtn = document.createElement("button");
    contnueBtn.className = "absolute restartBtn imPerfect";
    contnueBtn.innerText = "continue";
    contnueBtn.addEventListener("click", (event) => {
        resultDiv.innerHTML = "";
        resultDiv.className += " none";
        fightDiv.innerHTML = "";
        body.className = "bodyBg1 overflowX";
        addSuddenDeathFight(p1Point, p2Point, "dont cheat", "dont cheat");
    });

    resultDiv.appendChild(contnueBtn);
    resultDiv.appendChild(winnerBg);
    resultDiv.appendChild(winnerTxt);
    resultDiv.appendChild(winnerTxt2);
    resultDiv.appendChild(exitBtn);
}

function TieFT3(choice1, choice2) {
    body.className = "bodyBg1 overflow";

    resultDiv.className = "resultScreen absolute";
    let winnerBg = document.createElement("img");
    winnerBg.className = "winnerBg";
    winnerBg.src = "./assets/resultscreenbg.png";
    winnerBg.alt = "background screen";

    let winnerTxt = document.createElement("h1");
    winnerTxt.className = "imPerfect white absolute winnerTxt";
    winnerTxt.innerText = "A draw!";

    let winnerTxt2 = document.createElement("p");
    winnerTxt2.className = "winnerTxt2 firaCode absolute white";
    winnerTxt2.innerText = `Samurai 1 chose to battle with ${choice1} and Samurai 2 chose to battle with ${choice2}, as a result, both Samurais have come to a draw`;

    let exitBtn = document.createElement("button");
    exitBtn.className = "absolute exitBtn imPerfect";
    exitBtn.innerText = "exit";
    exitBtn.addEventListener("click", (event) => {
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
    });

    let contnueBtn = document.createElement("button");
    contnueBtn.className = "absolute restartBtn imPerfect";
    contnueBtn.innerText = "continue";
    contnueBtn.addEventListener("click", (event) => {
        resultDiv.innerHTML = "";
        resultDiv.className += " none";
        fightDiv.innerHTML = "";
        body.className = "bodyBg1 overflowX";
        addFT3Fight(p1Point, p2Point, "dont cheat", "dont cheat");
    });

    resultDiv.appendChild(contnueBtn);
    resultDiv.appendChild(winnerBg);
    resultDiv.appendChild(winnerTxt);
    resultDiv.appendChild(winnerTxt2);
    resultDiv.appendChild(exitBtn);
}

function displaySDWinner(choice1, choice2) {
    switch (choice1) {
        case "rock":
            switch (choice2) {
                case "rock":
                    TieSD(choice1, choice2);
                    break;
                case "paper":
                    if (AITrue) {
                        SDWinner("Supreme AI", choice1, choice2);
                    } else {
                        SDWinner("Samurai 2", choice1, choice2);
                    }
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
                    if (AITrue) {
                        SDWinner("Supreme AI", choice1, choice2);
                    } else {
                        SDWinner("Samurai 2", choice1, choice2);
                    }
                    p2Point++;
                    break;
                default:
                    console.log(choice2);
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
                    TieSD(choice1, choice2);
                    break;
                case "scissors":
                    if (AITrue) {
                        SDWinner("Supreme AI", choice1, choice2);
                    } else {
                        SDWinner("Samurai 2", choice1, choice2);
                    }
                    p2Point++;
                    break;
                case "lizzard":
                    if (AITrue) {
                        SDWinner("Supreme AI", choice1, choice2);
                    } else {
                        SDWinner("Samurai 2", choice1, choice2);
                    }
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
                    if (AITrue) {
                        SDWinner("Supreme AI", choice1, choice2);
                    } else {
                        SDWinner("Samurai 2", choice1, choice2);
                    }
                    p2Point++;
                    break;
                case "paper":
                    SDWinner("Samurai 1", choice1, choice2);
                    p1Point++;
                    break;
                case "scissors":
                    TieSD(choice1, choice2);
                    break;
                case "lizzard":
                    SDWinner("Samurai 1", choice1, choice2);
                    p1Point++;
                    break;
                case "spock":
                    if (AITrue) {
                        SDWinner("Supreme AI", choice1, choice2);
                    } else {
                        SDWinner("Samurai 2", choice1, choice2);
                    }
                    p2Point++;
                    break;
            }
            break;
        case "lizzard":
            switch (choice2) {
                case "rock":
                    if (AITrue) {
                        SDWinner("Supreme AI", choice1, choice2);
                    } else {
                        SDWinner("Samurai 2", choice1, choice2);
                    }
                    p2Point++;
                    break;
                case "paper":
                    SDWinner("Samurai 1", choice1, choice2);
                    p1Point++;
                    break;
                case "scissors":
                    if (AITrue) {
                        SDWinner("Supreme AI", choice1, choice2);
                    } else {
                        SDWinner("Samurai 2", choice1, choice2);
                    }
                    p2Point++;
                    break;
                case "lizzard":
                    TieSD(choice1, choice2);
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
                    if (AITrue) {
                        SDWinner("Supreme AI", choice1, choice2);
                    } else {
                        SDWinner("Samurai 2", choice1, choice2);
                    }
                    p2Point++;
                    break;
                case "scissors":
                    SDWinner("Samurai 1", choice1, choice2);
                    p1Point++;
                    break;
                case "lizzard":
                    if (AITrue) {
                        SDWinner("Supreme AI", choice1, choice2);
                    } else {
                        SDWinner("Samurai 2", choice1, choice2);
                    }
                    p2Point++;
                    break;
                case "spock":
                    TieSD(choice1, choice2);
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
                    TieFT3(choice1, choice2);
                    break;
                case "paper":
                    if (AITrue) {
                        FT3Winner("Supreme AI", choice1, choice2);
                    } else {
                        FT3Winner("Samurai 2", choice1, choice2);
                    }
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
                    if (AITrue) {
                        FT3Winner("Supreme AI", choice1, choice2);
                    } else {
                        FT3Winner("Samurai 2", choice1, choice2);
                    }
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
                    TieFT3(choice1, choice2);
                    break;
                case "scissors":
                    if (AITrue) {
                        FT3Winner("Supreme AI", choice1, choice2);
                    } else {
                        FT3Winner("Samurai 2", choice1, choice2);
                    }
                    p2Point++;
                    break;
                case "lizzard":
                    if (AITrue) {
                        FT3Winner("Supreme AI", choice1, choice2);
                    } else {
                        FT3Winner("Samurai 2", choice1, choice2);
                    }
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
                    if (AITrue) {
                        FT3Winner("Supreme AI", choice1, choice2);
                    } else {
                        FT3Winner("Samurai 2", choice1, choice2);
                    }
                    p2Point++;
                    break;
                case "paper":
                    FT3Winner("Samurai 1", choice1, choice2);
                    p1Point++;
                    break;
                case "scissors":
                    TieFT3(choice1, choice2);
                    break;
                case "lizzard":
                    FT3Winner("Samurai 1", choice1, choice2);
                    p1Point++;
                    break;
                case "spock":
                    if (AITrue) {
                        FT3Winner("Supreme AI", choice1, choice2);
                    } else {
                        FT3Winner("Samurai 2", choice1, choice2);
                    }
                    p2Point++;
                    break;
            }
            break;
        case "lizzard":
            switch (choice2) {
                case "rock":
                    if (AITrue) {
                        FT3Winner("Supreme AI", choice1, choice2);
                    } else {
                        FT3Winner("Samurai 2", choice1, choice2);
                    }
                    p2Point++;
                    break;
                case "paper":
                    FT3Winner("Samurai 1", choice1, choice2);
                    p1Point++;
                    break;
                case "scissors":
                    if (AITrue) {
                        FT3Winner("Supreme AI", choice1, choice2);
                    } else {
                        FT3Winner("Samurai 2", choice1, choice2);
                    }
                    p2Point++;
                    break;
                case "lizzard":
                    TieFT3(choice1, choice2);
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
                    if (AITrue) {
                        FT3Winner("Supreme AI", choice1, choice2);
                    } else {
                        FT3Winner("Samurai 2", choice1, choice2);
                    }
                    p2Point++;
                    break;
                case "scissors":
                    FT3Winner("Samurai 1", choice1, choice2);
                    p1Point++;
                    break;
                case "lizzard":
                    if (AITrue) {
                        FT3Winner("Supreme AI", choice1, choice2);
                    } else {
                        FT3Winner("Samurai 2", choice1, choice2);
                    }
                    p2Point++;
                    break;
                case "spock":
                    TieFT3(choice1, choice2);
                    break;
            }
            break;
    }

    if (p1Point === 3 || p2Point === 3) {
        let restartBtn = document.createElement("button");
        restartBtn.className = "absolute restartBtn imPerfect";
        restartBtn.innerText = "restart";
        restartBtn.addEventListener("click", (event) => {
            resultDiv.innerHTML = "";
            resultDiv.className += " none";
            fightDiv.innerHTML = "";
            body.className = "bodyBg1 overflowX";
            p1Point = 0;
            p2Point = 0;
            addFT3Fight(p1Point, p2Point, "dont cheat", "dont cheat");
        });
        resultDiv.appendChild(restartBtn);
    } else {
        let contnueBtn = document.createElement("button");
        contnueBtn.className = "absolute restartBtn imPerfect";
        contnueBtn.innerText = "continue";
        contnueBtn.addEventListener("click", (event) => {
            resultDiv.innerHTML = "";
            resultDiv.className += " none";
            fightDiv.innerHTML = "";
            body.className = "bodyBg1 overflowX";
            addFT3Fight(p1Point, p2Point, "dont cheat", "dont cheat");
        });
        resultDiv.appendChild(contnueBtn);
    }
}

    function displayFT5Winner(choice1, choice2) {
        switch (choice1) {
            case "rock":
                switch (choice2) {
                    case "rock":
                        TieFT3(choice1, choice2);
                        break;
                    case "paper":
                        if (AITrue) {
                            FT3Winner("Supreme AI", choice1, choice2);
                        } else {
                            FT3Winner("Samurai 2", choice1, choice2);
                        }
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
                        if (AITrue) {
                            FT3Winner("Supreme AI", choice1, choice2);
                        } else {
                            FT3Winner("Samurai 2", choice1, choice2);
                        }
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
                        TieFT3(choice1, choice2);
                        break;
                    case "scissors":
                        if (AITrue) {
                            FT3Winner("Supreme AI", choice1, choice2);
                        } else {
                            FT3Winner("Samurai 2", choice1, choice2);
                        }
                        p2Point++;
                        break;
                    case "lizzard":
                        if (AITrue) {
                            FT3Winner("Supreme AI", choice1, choice2);
                        } else {
                            FT3Winner("Samurai 2", choice1, choice2);
                        }
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
                        if (AITrue) {
                            FT3Winner("Supreme AI", choice1, choice2);
                        } else {
                            FT3Winner("Samurai 2", choice1, choice2);
                        }
                        p2Point++;
                        break;
                    case "paper":
                        FT3Winner("Samurai 1", choice1, choice2);
                        p1Point++;
                        break;
                    case "scissors":
                        TieFT3(choice1, choice2);
                        break;
                    case "lizzard":
                        FT3Winner("Samurai 1", choice1, choice2);
                        p1Point++;
                        break;
                    case "spock":
                        if (AITrue) {
                            FT3Winner("Supreme AI", choice1, choice2);
                        } else {
                            FT3Winner("Samurai 2", choice1, choice2);
                        }
                        p2Point++;
                        break;
                }
                break;
            case "lizzard":
                switch (choice2) {
                    case "rock":
                        if (AITrue) {
                            FT3Winner("Supreme AI", choice1, choice2);
                        } else {
                            FT3Winner("Samurai 2", choice1, choice2);
                        }
                        p2Point++;
                        break;
                    case "paper":
                        FT3Winner("Samurai 1", choice1, choice2);
                        p1Point++;
                        break;
                    case "scissors":
                        if (AITrue) {
                            FT3Winner("Supreme AI", choice1, choice2);
                        } else {
                            FT3Winner("Samurai 2", choice1, choice2);
                        }
                        p2Point++;
                        break;
                    case "lizzard":
                        TieFT3(choice1, choice2);
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
                        if (AITrue) {
                            FT3Winner("Supreme AI", choice1, choice2);
                        } else {
                            FT3Winner("Samurai 2", choice1, choice2);
                        }
                        p2Point++;
                        break;
                    case "scissors":
                        FT3Winner("Samurai 1", choice1, choice2);
                        p1Point++;
                        break;
                    case "lizzard":
                        if (AITrue) {
                            FT3Winner("Supreme AI", choice1, choice2);
                        } else {
                            FT3Winner("Samurai 2", choice1, choice2);
                        }
                        p2Point++;
                        break;
                    case "spock":
                        TieFT3(choice1, choice2);
                        break;
                }
                break;
        }
    
        if (p1Point === 5 || p2Point === 5) {
            let restartBtn = document.createElement("button");
            restartBtn.className = "absolute restartBtn imPerfect";
            restartBtn.innerText = "restart";
            restartBtn.addEventListener("click", (event) => {
                resultDiv.innerHTML = "";
                resultDiv.className += " none";
                fightDiv.innerHTML = "";
                body.className = "bodyBg1 overflowX";
                p1Point = 0;
                p2Point = 0;
                addFT5Fight(p1Point, p2Point, "dont cheat", "dont cheat");
            });
            resultDiv.appendChild(restartBtn);
        } else {
            let contnueBtn = document.createElement("button");
            contnueBtn.className = "absolute restartBtn imPerfect";
            contnueBtn.innerText = "continue";
            contnueBtn.addEventListener("click", (event) => {
                resultDiv.innerHTML = "";
                resultDiv.className += " none";
                fightDiv.innerHTML = "";
                body.className = "bodyBg1 overflowX";
                addFT5Fight(p1Point, p2Point, "dont cheat", "dont cheat");
            });
            resultDiv.appendChild(contnueBtn);
        }
}

export { displaySDWinner, p1Point, p2Point, FT3Winner, displayFT3Winner, displayFT5Winner }
