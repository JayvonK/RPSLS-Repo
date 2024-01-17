let playBtn = document.getElementById("playBtn");
let modeBtn = document.getElementById("modeBtn");
let howToPlayBtn = document.getElementById("howToPlayBtn");
let music = document.getElementById("music");

playBtn.addEventListener('click', (event) => {
    modeBtn.src = "";
    howToPlayBtn.src = "";
})