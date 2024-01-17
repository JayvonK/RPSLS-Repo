import { addSuddenDeath, addFT3 } from "./addGameModes.js";

let injectAI = document.getElementById("injectAI");
let inject1v1 = document.getElementById("inject1v1");

function addVersus () {
    let img1v1 = document.createElement("img");
    img1v1.src = "./assets/1v1 Shuriken.png";
    img1v1.addEventListener('click', (event) => {
        console.log("1v1 working");
        img1v1.className = "none";
        addFT3();
        addSuddenDeath();
    })
    inject1v1.appendChild(img1v1);

    let imgAI = document.createElement("img");
    imgAI.src = "./assets/AI shuriken.png";
    imgAI.addEventListener('click', (event) => {
        console.log("1v1 working");
        imgAI.class = "none";
        
    })
    injectAI.appendChild(imgAI);
}



export { addVersus, inject1v1, injectAI }