let playBtn = document.getElementById("playBtn");
let modeBtn = document.getElementById("modeBtn");
let howToPlayBtn = document.getElementById("howToPlayBtn");
let music = document.getElementById("music");
let volume = document.getElementById("volume");

playBtn.addEventListener('click', (event) => {
    modeBtn.src = "";
    howToPlayBtn.src = "";
})