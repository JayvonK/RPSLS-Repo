import { addSuddenDeath, addFT3, addFT5 } from "./addGameModes.js";

let injectAI = document.getElementById("injectAI");
let inject1v1 = document.getElementById("inject1v1");

function addVersus () {
    inject1v1.className = "col centerCol";
    injectAI.className = "col centerCol";
    let img1v1 = document.createElement("img");
    img1v1.src = "./assets/1v1 Shuriken.png";
    img1v1.className = "cursor";
    img1v1.addEventListener('click', (event) => {
        console.log("1v1 working");
        inject1v1.className += " none";
        injectAI.className += " none";
        addFT3();
        addSuddenDeath();
        addFT5();
    })
    inject1v1.appendChild(img1v1);

    let imgAI = document.createElement("img");
    imgAI.src = "./assets/AI shuriken.png";
    imgAI.className = "cursor";
    imgAI.addEventListener('click', (event) => {
        console.log("1v1 working");
    })
    injectAI.appendChild(imgAI);
}



export { addVersus, inject1v1, injectAI }