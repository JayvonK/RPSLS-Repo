let injectAI = document.getElementById("injectAI");
let inject1v1 = document.getElementById("inject1v1");

function add1v1 () {
    let img1v1 = document.createElement("img");
    img1v1.src = "./assets/1v1 Shuriken.png";
    img1v1.addEventListener('click', (event) => {
        console.log("1v1 working");
    })
    inject1v1.appendChild(img1v1);
}

function addAI () {
    let imgAI = document.createElement("img");
    imgAI.src = "./assets/AI shuriken.png";
    imgAI.addEventListener('click', (event) => {
        console.log("1v1 working");
    })
    injectAI.appendChild(imgAI);
}



export { add1v1, addAI }