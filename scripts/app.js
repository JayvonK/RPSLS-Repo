import { musicPlay, stopMusic } from "./music.js";
import { add1v1 } from "./addBtns.js";

let playBtn = document.getElementById("playBtn");
let modeBtn = document.getElementById("modeBtn");
let howToPlayBtn = document.getElementById("howToPlayBtn");
let volume = document.getElementById("volume");
let modal = document.getElementById("btnModal");
let playCol = document.getElementById("playCol");



volume.addEventListener('click', () => {
    console.log("click");
    console.log(volume.alt);
    if(volume.alt === "volume icon")
    {
        stopMusic();
        volume.src = "./assets/muted icon.png";
        volume.alt = "mute icon"
        console.log("i woke");
    } else if (volume.alt === "mute icon")
    {
        musicPlay();
        volume.src = "./assets/volume icon.png";
        volume.alt = "volume icon"
        console.log("i wokde");
    }
})

playBtn.addEventListener('click', (event) => {
    modeBtn.className = "none";
    modal.className += " none";
    playCol.className += " none";
    add1v1();
})