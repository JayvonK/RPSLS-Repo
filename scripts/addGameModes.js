import { fT3Col, lightMode} from "./app.js";
import { addSuddenDeathFight, addFT3Fight, addFT5Fight } from "./addFights.js";


let shurikenDiv = document.getElementById("shurikenDiv");

function addFT3()
{
    fT3Col.className = "col centerCol";
    let imgFT3 = document.createElement("img");
    if(lightMode){
        imgFT3.src = "./assets/blackFT3 shuriken.png";
    }else{
        imgFT3.src = "./assets/FT3 shuriken.png";
    }
    
    imgFT3.className = "cursor";
    imgFT3.addEventListener('click', (event) => {
        shurikenDiv.className += " none";
        addFT3Fight(0, 0, "dont cheat", "dont cheat");
    })
    imgFT3.addEventListener('mouseover', (event) => {
        imgFT3.src = "./assets/cyan FT3 shuriken.png";
        if(lightMode){
            imgFT3.src = "./assets/pinkFT3.png";
        }
    })
    imgFT3.addEventListener("mouseleave", (event) => {
        imgFT3.src = "./assets/FT3 shuriken.png";
        if(lightMode){
            imgFT3.src = "./assets/blackFT3 shuriken.png";
        }
    })

    fT3Col.appendChild(imgFT3);
}

function addSuddenDeath()
{
    fT3Col.className = "col centerCol";
    let imgSuddenDeath = document.createElement("img");
    if(lightMode){
        imgSuddenDeath.src = "./assets/blacksudden death shuriken.png";
    }else{
        imgSuddenDeath.src = "./assets/sudden death shuriken.png";
    }
    
    imgSuddenDeath.className = "cursor";
    imgSuddenDeath.addEventListener('click', (event) => {
        shurikenDiv.className += " none";
        addSuddenDeathFight(0, 0, "dont cheat", "dont cheat");
    })
    imgSuddenDeath.addEventListener('mouseover', (event) => {
        imgSuddenDeath.src = "./assets/cyansudden death shuriken.png";
        if(lightMode){
            imgSuddenDeath.src = "./assets/pinksuddenDeath.png";
        }
    })
    imgSuddenDeath.addEventListener("mouseleave", (event) => {
        imgSuddenDeath.src = "./assets/sudden death shuriken.png";
        if(lightMode){
            imgSuddenDeath.src = "./assets/blacksudden death shuriken.png";
        }
    })

    fT3Col.appendChild(imgSuddenDeath);
}

function addFT5() 
{
    fT3Col.className = "col centerCol";
    let imgFT5 = document.createElement("img");
    if(lightMode){
        imgFT5.src = "./assets/blackFT5 shuriken.png";
    }else{
        imgFT5.src = "./assets/FT5 shuriken.png";
    }
    imgFT5.className = "cursor";
    imgFT5.addEventListener('click', (event) => {
        shurikenDiv.className += " none";
        addFT5Fight(0, 0, "dont cheat", "dont cheat");
    })
    imgFT5.addEventListener('mouseover', (event) => {
        imgFT5.src = "./assets/cyanFT5 shuriken.png";
        if(lightMode){
            imgFT5.src = "./assets/pinkFT5.png";
        }
    })
    imgFT5.addEventListener("mouseleave", (event) => {
        imgFT5.src = "./assets/FT5 shuriken.png";
        if(lightMode){
            imgFT5.src = "./assets/blackFT5 shuriken.png";
        }
    })

    fT3Col.appendChild(imgFT5);
}

export { addFT3, addSuddenDeath, addFT5, shurikenDiv};