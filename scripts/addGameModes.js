import { fT3Col, fT5Col, suddenDeathCol } from "./app.js";
import { addSuddenDeathFight, addFT3Fight } from "./addFights.js";


let shurikenDiv = document.getElementById("shurikenDiv");

function addFT3()
{
    fT3Col.className = "col centerCol";
    let imgFT3 = document.createElement("img");
    imgFT3.src = "./assets/FT3 shuriken.png";
    imgFT3.classname = "cursor";
    imgFT3.addEventListener('click', (event) => {
        shurikenDiv.className += " none";
        addFT3Fight(0, 0, "dont cheat", "dont cheat");
    })

    fT3Col.appendChild(imgFT3);
}

function addSuddenDeath()
{
    suddenDeathCol.className = "col centerCol";
    let imgSuddenDeath = document.createElement("img");
    imgSuddenDeath.src = "./assets/sudden death shuriken.png";
    imgSuddenDeath.className = "cursor";
    imgSuddenDeath.addEventListener('click', (event) => {
        shurikenDiv.className += " none";
        addSuddenDeathFight(0, 0, "dont cheat", "dont cheat");
    })

    suddenDeathCol.appendChild(imgSuddenDeath);
}

function addFT5() 
{
    fT5Col.className = "col centerCol";
    let imgFT5 = document.createElement("img");
    imgFT5.src = "./assets/FT5 shuriken.png";
    imgFT5.addEventListener('click', (event) => {
        shurikenDiv.className += " none";
        console.log("first to 5");
    })

    fT5Col.appendChild(imgFT5);
}

export { addFT3, addSuddenDeath, addFT5, shurikenDiv};