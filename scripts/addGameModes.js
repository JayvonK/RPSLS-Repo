import { playCol } from "./app.js";
import { inject1v1, injectAI } from "./addVersus.js";

function addFT3()
{
    playCol.className = "col";
    let imgFT3 = document.createElement("img");
    imgFT3.src = "./assets/FT3 shuriken.png";
    imgFT3.addEventListener('click', (event) => {
        console.log("first to 3")
    })

    playCol.appendChild(imgFT3);
}

function addSuddenDeath()
{
    let imgSuddenDeath = document.createElement("img");
    imgSuddenDeath.src = "./assets/sudden death shuriken.png";
    imgSuddenDeath.addEventListener('click', (event) => {
        console.log("sudden death")
    })

    inject1v1.appendChild(imgSuddenDeath);
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

export { addFT3, addSuddenDeath, addFT5};