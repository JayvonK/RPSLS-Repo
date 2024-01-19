import { fT3Col, fT5Col } from "./app.js";
import { inject1v1, injectAI } from "./addVersus.js";
import { addSuddenDeathFight } from "./addFights.js";


let shurikenDiv = document.getElementById("shurikenDiv");

function addFT3()
{
    fT3Col.className = "col";
    let imgFT3 = document.createElement("img");
    imgFT3.src = "./assets/FT3 shuriken.png";
    imgFT3.classname = "cursor";
    imgFT3.addEventListener('click', (event) => {
        console.log("first to 3")
    })

    fT3Col.appendChild(imgFT3);
}

function addSuddenDeath()
{
    let col = document.createElement("col");
    col.className = "col";
    let imgSuddenDeath = document.createElement("img");
    imgSuddenDeath.src = "./assets/sudden death shuriken.png";
    imgSuddenDeath.addEventListener('click', (event) => {
        shurikenDiv.className += " none";
        addSuddenDeathFight(0, 0, "dont cheat", "dont cheat");
    })

    col.appendChild(imgSuddenDeath);
}

function addFT5() 
{
    let imgFT5 = document.createElement("img");
    imgFT5.src = "./assets/FT5 shuriken.png";
    imgFT5.addEventListener('click', (event) => {
        console.log("first to 5");
    })

    injectAI.appendChild(imgFT5)
}

export { addFT3, addSuddenDeath, addFT5, shurikenDiv};