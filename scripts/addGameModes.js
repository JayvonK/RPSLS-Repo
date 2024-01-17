import { playCol } from "./app.js";
import { inject1v1, injectAI } from "./addVersus.js";

function addFT3()
{
    playCol.className = "col";
    let imgFT3 = document.createElement("img");
    imgFT3.src = "./assets/FT3 shuriken.png";
    imgFT3.addEventListener('click', (event) => {
        console.log("sudden death")
    })

    playCol.appendChild(imgFT3);
}

function addSuddenDeath()
{
    playCol.className = "col";
    let imgSuddenDeath = document.createElement("img");
    imgSuddenDeath.src = "./assets/sudden death shuriken.png";
    imgSuddenDeath.addEventListener('click', (event) => {
        console.log("sudden death")
    })

    inject1v1.appendChild(imgSuddenDeath);
}

function addFT5() 
{
    imgAI.className = "none";
    let imgFT5 = document.createElement("")
}

export { addFT3, addSuddenDeath, addFT5};