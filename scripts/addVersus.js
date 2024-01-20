import { addSuddenDeath, addFT3, addFT5 } from "./addGameModes.js";
import { lightMode } from "./app.js";

let AITrue = true;
let inject1v1 = document.getElementById("inject1v1");

function addVersus () {
    inject1v1.className = "col centerCol";
    let img1v1 = document.createElement("img");
    if(lightMode){
        img1v1.src = "./assets/black1v1 Shuriken.png";
    } else {
        img1v1.src = "./assets/1v1 Shuriken.png";
    }
    img1v1.className = "cursor";
    img1v1.addEventListener('click', (event) => {
        console.log("1v1 working");
        inject1v1.className += " none";
        addSuddenDeath();
        addFT3();
        addFT5();
        AITrue = false;
    })
    img1v1.addEventListener('mouseover', (event) => {
        img1v1.src = "./assets/cyan1v1 Shuriken.png";
        if(lightMode){
            img1v1.src = "./assets/pink1v1.png";
        }
    })
    img1v1.addEventListener("mouseleave", (event) => {
        img1v1.src = "./assets/1v1 Shuriken.png";
        if(lightMode){
            img1v1.src = "./assets/black1v1 Shuriken.png";
        }
    })
    inject1v1.appendChild(img1v1);

    let imgAI = document.createElement("img");
    if(lightMode){
        imgAI.src = "./assets/blackAI shuriken.png";
    }else {
        imgAI.src = "./assets/AI shuriken.png";
    }
    imgAI.className = "cursor";
    imgAI.addEventListener('click', (event) => {
        inject1v1.className += " none";
        addSuddenDeath();
        addFT3();
        addFT5();
        AITrue = true;
    })
    imgAI.addEventListener('mouseover', (event) => {
        imgAI.src = "./assets/cyanAI shuriken.png";
        if(lightMode){
            imgAI.src = "./assets/pinkai.png";
        }
    })
    imgAI.addEventListener("mouseleave", (event) => {
        imgAI.src = "./assets/AI shuriken.png";
        if(lightMode){
            imgAI.src = "./assets/blackAI shuriken.png";
        }
    })
    
    inject1v1.appendChild(imgAI);
}



export { addVersus, inject1v1, AITrue }